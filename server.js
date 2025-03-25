import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import projectRoutes from "./routes/projectRoutes.js";
import { errorDetector } from "./middleware/errorMiddleware.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(errorDetector);

// Routes
app.use("/api/projects", projectRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
