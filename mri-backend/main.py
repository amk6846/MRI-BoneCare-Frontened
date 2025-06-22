from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import torch
import torch.nn as nn
from torchvision import models, transforms
from PIL import Image
import io
import base64

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# === Your Model Class ===
class MyModel(nn.Module):
    def __init__(self):
        super(MyModel, self).__init__()
        self.model = models.resnet18()
        num_ftrs = self.model.fc.in_features
        self.model.fc = nn.Linear(num_ftrs, 2)

    def forward(self, x):
        return self.model(x)

# === Load Trained Model ===
model = MyModel()
checkpoint = torch.load("model/Best.pt", map_location=torch.device("cpu"))
state_dict = {"model." + k: v for k, v in checkpoint.items()}
model.load_state_dict(state_dict)
model.eval()

# === Class Labels ===
CLASS_LABELS = {
    0: "Normal",
    1: "Tumor"
}

# === Image Transformations ===
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406],
                         [0.229, 0.224, 0.225])
])

@app.get("/")
def read_root():
    return {"message": "MRI Model API is up and running ✅"}

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    image_bytes = await file.read()
    img = Image.open(io.BytesIO(image_bytes)).convert("RGB")

    # Transform for model
    input_tensor = transform(img).unsqueeze(0)

    with torch.no_grad():
        outputs = model(input_tensor)
        probabilities = torch.nn.functional.softmax(outputs[0], dim=0)
        confidence, predicted = torch.max(probabilities, 0)
        class_index = predicted.item()

    result = CLASS_LABELS.get(class_index, "Unknown")
    confidence_percent = round(confidence.item() * 100, 2)

    # Encode image as base64 to return to frontend
    buffered = io.BytesIO()
    img.save(buffered, format="JPEG")
    img_str = base64.b64encode(buffered.getvalue()).decode()

    return {
        "result": result,
        "confidence": confidence_percent,
        "tumorType": result,
        "mri_scan_image": img_str,
        "segmented_image": img_str  # Same image for now
    }
