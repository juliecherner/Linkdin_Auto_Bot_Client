import express, { Request, Response } from "express";
import { getAllProfilesHandler } from "../controllers/profile.controller";



const Router = express.Router();

Router.get('/healthcheck', (req: Request, res: Response): void => {
  res.sendStatus(200);
});



Router.get(
  '/get-all-profiles', 
  getAllProfilesHandler,
);


export default Router;
