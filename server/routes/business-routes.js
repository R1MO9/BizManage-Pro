import BusinessController from "../controllers/business-controllers.js";
import checkAuth from "../middlewares/auth-middleware.js";
import express from "express";

const router = express.Router();

router.post("/create", checkAuth, BusinessController.createBusiness);
router.get("/get", checkAuth, BusinessController.getBusiness);
router.put("/update/:id", checkAuth, BusinessController.updateBusiness);
router.delete("/delete/:id", checkAuth, BusinessController.deleteBusiness);

export default router;