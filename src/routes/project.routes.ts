import { Router } from "express";

import { getProjects, postProject } from "../controllers/project.controller";

const router = Router();

   router
      .get("/", getProjects)
      .post("/", postProject);

export default router;