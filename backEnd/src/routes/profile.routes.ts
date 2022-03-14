import express, { Request, Response } from "express";
import * as profileHandlers from "../controllers/profile.controller";



const Router = express.Router();

Router.get('/healthcheck', (req: Request, res: Response): void => {
  res.sendStatus(200);
});



Router.get(
  '/get-all-profiles', 
  profileHandlers.getAllProfiles,
);


export default Router;
