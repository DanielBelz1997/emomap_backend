// @ts-nocheck
import { Request, Response } from "express";

export async function getHomePage(req: Request, res: Response) {
  try {
    res.send("hello skeleton");
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e });
  }
}
