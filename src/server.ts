require("dotenv").config();
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
const app = express();
import cors from "cors";
import { checkDbConnection, db } from "./db/db";
import { logger } from "./modules/logger";
import morgan from "morgan";
import { apiRoutes } from "./api";
import { user } from "./db/schema";
import { sql } from "drizzle-orm";

const port = process.env.PORT || 3302;

app.use(cookieParser());

app.use(morgan("dev"));

app.use(cors({ credentials: true }));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(`/api`, apiRoutes);

app.listen(port, async () => {
  await checkDbConnection();
  logger.info(`Server is running on port ${port}`);
});

export { app };
