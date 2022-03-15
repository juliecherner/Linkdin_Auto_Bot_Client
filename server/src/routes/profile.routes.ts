import express, { Request, Response } from 'express';
import * as handlers from '../controllers/profile.controller';


const Router = express.Router();

Router.get('/healthcheck', (req: Request, res: Response): void => {
  res.sendStatus(200);
});

Router.post('/add-profiles', handlers.addProfile);

Router.get('/get-all-profiles', handlers.getAllProfiles);


export default Router;
