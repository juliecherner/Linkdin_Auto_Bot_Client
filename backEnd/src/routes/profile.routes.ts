import express, { Request, Response } from "express";
import { getAllProfileHandler } from "../controllers/profile.controller";



const Router = express.Router();

Router.get('/healthcheck', (req: Request, res: Response): void => {
  res.sendStatus(200);
});



Router.get(
  '/get-tasks-by-project/:projectId', 
  // validateResource(findTaskSchema),
  getAllProfileHandler,
);


export default Router;
