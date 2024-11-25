import BusinessController from "../controllers/business-controllers.js";
import express from "express";

const router = express.Router();

router.post("/create", BusinessController.createBusiness);
router.get("/get/:id", BusinessController.getBusiness);
router.put("/update/:id", BusinessController.updateBusiness);
router.delete("/delete/:id", BusinessController.deleteBusiness);

export default router;