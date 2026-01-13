import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

// behövs i ESM för __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_PATH = path.join(__dirname, "../data/projects.json");

// Läs data
const readData = () => {
  return JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
};

// Skriv data
const writeData = (data) => {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
};

// GET – alla projekt
router.get("/", (req, res) => {
  const projects = readData();
  res.json(projects);
});

// POST – skapa projekt
router.post("/", (req, res) => {
  const projects = readData();

  const newProject = {
    id: Date.now(),
    title: req.body.title || "Untitled project",
  };

  projects.push(newProject);
  writeData(projects);

  res.status(201).json(newProject);
});

// DELETE – ta bort projekt
router.delete("/:id", (req, res) => {
  const projects = readData();
  const filtered = projects.filter(
    (p) => p.id !== Number(req.params.id)
  );

  writeData(filtered);
  res.status(204).end();
});

export default router;
