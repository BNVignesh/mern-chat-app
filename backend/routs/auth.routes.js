import express from "express";
import { loginuser,logoutuser,signup } from "../controllers/auth.controller.js";
const router=express.Router();

router.post('/login',loginuser);
router.post('/signup',signup);
router.post('/logout',logoutuser);

export default router;