import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// MIDDLEWARE

app.use(cors());
app.use(express.json());

// TEST ROUTE

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Rajeshwari Ravi Portfolio Backend is running 🚀",
  });
});

// CONTACT ROUTES

app.use("/api/contact", contactRoutes);

// START SERVER

app.listen(PORT, () => {
  console.log(`Portfolio backend running on http://localhost:${PORT}`);
});