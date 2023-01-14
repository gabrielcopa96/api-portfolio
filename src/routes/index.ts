import { Router } from "express";
import routesAuth from "./auth.routes";
import routesData from "./data.routes";
import routesProject from "./project.routes";
import routesTechnology from "./technology.routes";

const router = Router();

   router.use("/auth", routesAuth);
   router.use("/data", routesData);
   router.use("/project", routesProject);
   router.use("/technology", routesTechnology);
   
export { router }