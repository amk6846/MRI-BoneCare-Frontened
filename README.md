MRI BoneCare
============

Description:
------------
MRI BoneCare is a web-based platform for **automatic detection, segmentation, and classification of primary bone tumors** using MRI scans. 
It leverages an **ensemble multi-task deep learning framework** for accurate diagnosis and report generation. 
Users can upload MRI images, view results, and download PDF reports.

Features:
---------
1. **MRI Upload:** Users can upload MRI scans for analysis.
2. **Automatic Detection:** Detects presence of primary bone tumors.
3. **Segmentation:** Highlights tumor regions on MRI images.
4. **Classification:** Provides tumor type and confidence score.
5. **PDF Report:** Generates downloadable report with patient info and analysis.
6. **Authentication:** User login system to secure access.

Technologies Used:
------------------
- **Frontend:** Next.js, React.js, TailwindCSS
- **Backend:** Python, FastAPI (or Next.js API Routes)
- **Database:** MongoDB
- **Machine Learning Models:**
  - Faster R-CNN for detection
  - Unet++ for segmentation
  - ResNet25 for classification
- **PDF Generation:** html2canvas + jsPDF

Installation & Setup:
--------------------
1. Clone the repository:
2. Install dependencies:
3. Configure environment variables:
- Create a `.env` file
- Add MongoDB connection string:
  ```
  MONGODB_URI=<your_mongo_connection_string>
  ```
4. Run the development server:
5. Visit `http://localhost:3000` to access the app.

Usage:
------
- Login or create an account
- Upload MRI scan
- View detection results
- Download PDF report

Folder Structure:
-----------------
- `/app`        - Next.js app pages and components
- `/src/models` - MongoDB schema models
- `/src/lib`    - MongoDB connection helper
- `/public`     - Static assets like images
- `/ml-models`  - Pre-trained models for tumor detection, segmentation, classification

Contact:
--------
For any issues or inquiries, contact **[Abdul Majid / amk684678@gmail.com]**.

License:
--------
This project is for **educational purposes**.


