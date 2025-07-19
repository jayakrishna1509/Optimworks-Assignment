import express from "express";
import {addDoctor, adminLogin, appointments, categories, deletedoctor, doctors} from "../Controllers/adminController.js";
import upload from "../Middleware/multer.js";
import { email, name, password } from "../Middleware/validations.js";
import bcrypt from "bcrypt";

const adminRouter = express.Router()

adminRouter.post('/adddoctor',upload.single("image"),name,email,addDoctor)
adminRouter.get('/doctors',doctors);
adminRouter.get('/categories',categories);
adminRouter.post('/login',adminLogin);
adminRouter.delete('/deletedoctor', deletedoctor);
adminRouter.get('/appointments', appointments);

adminRouter.post('/login', async (req, res) => {
    const { adminid, adminPassword } = req.body;
    // handle login
    const isValidPassword = await bcrypt.compare(adminPassword, admin.adminPassword);
});

export default adminRouter