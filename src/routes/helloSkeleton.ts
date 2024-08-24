import express from "express";
export const router = express.Router();
import { getHomePage } from "../controllers/helloSkeleton";

router.get("/", getHomePage);
