import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsesForSidebar } from "../controllers/user.controller.js";

const router=express.Router();
router.get("/",getUsesForSidebar);

export default router