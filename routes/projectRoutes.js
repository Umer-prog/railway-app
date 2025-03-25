import express from "express";
import {
  getProjects,
  getProjectCount,
  addProject,
  deleteProject,
  getProjectById,
  updateProject,
} from "../controllers/projectController.js";

const router = express.Router();

// Get total number of projects
router.get("/count", getProjectCount);

// Get all projects
router.get("/", getProjects);

// Add a new project
router.post("/", addProject);

// Get a single project by ID
router.get("/:id", getProjectById);

// Update a project
router.put("/:id", updateProject);

// Delete a project
router.delete("/:id", deleteProject);

export default router;
