import express from "express";
const router = express.Router();

import { router as helloSkeleton } from "./routes/helloSkeleton";

router.use("/hello", helloSkeleton);

export { router as apiRoutes };
