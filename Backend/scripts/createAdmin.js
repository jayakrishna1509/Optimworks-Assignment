import mongoose from "mongoose";
import dotenv from "dotenv";
import AdminModel from "../Models/adminModel.js";
import bcrypt from "bcryptjs";
dotenv.config();

const createOrUpdateAdmin = async () => {
  await mongoose.connect(process.env.MONGODB_URL);

  const email = "admin@consulto.com";
  const hashedPassword = await bcrypt.hash("admin@123", 10);

  await AdminModel.updateOne(
    { email },
    {
      $set: {
        name: "Admin",
        email: email,
        password: hashedPassword,
        role: "admin",
      },
    },
    { upsert: true }
  );

  console.log("Admin user created or updated!");
  mongoose.disconnect();
};

createOrUpdateAdmin();
