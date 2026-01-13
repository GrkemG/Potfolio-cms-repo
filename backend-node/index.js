import express from "express";
import cors from "cors";
import projectsRouter from "./routes/projects.js";
import authRouter from "./routes/auth.js";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// routes
app.use("/api/projects", projectsRouter);
app.use("/api", authRouter);

// test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
