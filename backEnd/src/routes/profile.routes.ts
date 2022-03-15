import express, { Request, Response } from 'express';
import * as handlers from '../controllers/profile.controller';

// TODO: Create content and security validation middlewere for all input

const Router = express.Router();

Router.get('/healthcheck', (req: Request, res: Response): void => {
  res.sendStatus(200);
});

Router.post('/add-profiles', handlers.addProfile);

Router.get('/get-all-profiles', handlers.getAllProfiles);

Router.put('/update-profile', handlers.updateProfile);

Router.delete('/delete-profile', handlers.deleteProfile);

export default Router;
