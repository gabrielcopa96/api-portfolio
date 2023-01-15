import "dotenv/config"

import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import { router } from "./routes";

const versionApi = process.env.VERSION || "v1";
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

mongoose.set("strictQuery", false);

app.use(`/${versionApi}`, router);

export default app;