import { projects } from "../config/dbMock.js";

// Get total projects count
export const getProjectCount = (req, res) => {
  res.json({ status: "success", count: projects.length });
};

// Get all projects
export const getProjects = (req, res) => {
  res.json({ status: "success", projects });
};

// Add a new project
export const addProject = (req, res) => {
  const { name } = req.body;

  if (!name || name.length < 3) {
    return res.status(400).json({
      status: "error",
      message: "Project name must be at least 3 characters",
    });
  }

  // Prevent duplicate project names (case-insensitive)
  if (projects.some((proj) => proj.name.toLowerCase() === name.toLowerCase())) {
    return res
      .status(400)
      .json({ status: "error", message: "Project name already exists" });
  }

  const newProject = {
    name: name,
    id: projects.length + 1,
  };
  projects.push(newProject);
  res.status(201).json({ status: "success", project: newProject });
};

// Get project by ID
export const getProjectById = (req, res) => {
  const { id } = req.params;
  const project = projects.find((proj) => proj.id == id);
  if (!project) {
    return res
      .status(404)
      .json({ status: "error", message: "Project not found" });
  }

  res.json({ status: "success", project });
};

// Update a project
export const updateProject = (req, res) => {
  const { id } = req.params; //parameter
  const { name } = req.body; //body

  const project = projects.find((proj) => proj.id == id);
  if (!project) {
    return res
      .status(404)
      .json({ status: "error", message: "Project not found" });
  }

  if (!name || name.length < 3) {
    return res.status(400).json({
      status: "error",
      message: "Project name must be at least 3 characters",
    });
  }

  project.name = name; // Update project name
  res.json({ status: "success", project });
};

// Delete a project by ID
export const deleteProject = (req, res) => {
  const { id } = req.params;
  const index = projects.findIndex((proj) => proj.id == id);

  if (index === -1) {
    return res
      .status(404)
      .json({ status: "error", message: "Project not found" });
  }

  const deletedProject = projects.splice(index, 1)[0];
  res.json({ status: "success", deletedProject });
};
