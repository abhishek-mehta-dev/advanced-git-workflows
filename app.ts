import express from "express";
import cors from "cors";
import { loggerMiddleware } from "./middlewares/logger.middleware";
import userRoutes from "./routes/user.routes";
import { getHealthStatus } from "./utils/health.util";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware);

// Routes
app.get("/", (req, res) => {
  res.send("Express + TypeScript is working 🚀");
});

app.get("/health", (req, res) => {
  res.json(getHealthStatus());
});

app.use("/users", userRoutes);

export default app;
