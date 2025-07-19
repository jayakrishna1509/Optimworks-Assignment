// scripts/createInitialAdmin.js
import mongoose from "mongoose";
import adminModel from "../Models/adminModel.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const createInitialAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    const existingAdmin = await adminModel.findOne({ adminid: "admin" });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash("admin123", 10);
      await adminModel.create({
        adminid: "admin",
        adminPassword: hashedPassword,
      });
      console.log("✅ Initial admin created successfully");
    } else {
      console.log("ℹ️ Admin already exists");
    }

    process.exit(0);
  } catch (error) {
    console.error("❌ Error creating initial admin:", error);
    process.exit(1);
  }
};

createInitialAdmin();
