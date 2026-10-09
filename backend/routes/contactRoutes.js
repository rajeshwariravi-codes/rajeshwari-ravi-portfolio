import express from "express";
import { submitContactForm } from "../controllers/contactController.js";
import validateContactForm from "../middleware/contactValidation.js";
import contactRateLimiter from "../middleware/rateLimiter.js";

const router = express.Router();

router.post("/", contactRateLimiter, validateContactForm, submitContactForm);

export default router;