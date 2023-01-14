import { Router } from "express";

import { getTechnologies, postTechnology } from "../controllers/technology.controller";

const router = Router();

   router
      .get("/", getTechnologies)
      .post("/", postTechnology);

export default router;