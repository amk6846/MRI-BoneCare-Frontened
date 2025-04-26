import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected Successfully 🚀");
  } catch (error) {
    console.log("MongoDB Connection Failed ❌", error);
  }
};

export default connectMongoDB;
