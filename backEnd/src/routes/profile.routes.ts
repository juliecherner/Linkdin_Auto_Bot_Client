import express, { Request, Response } from 'express';
import * as profileHandlers from '../controllers/profile.controller';

// TODO: Create content and security validation middlewere for all input

const Router = express.Router();

Router.get('/healthcheck', (req: Request, res: Response): void => {
  res.sendStatus(200);
});

Router.post('/profiles', profileHandlers.addProfile);

Router.get('/profiles', profileHandlers.getAllProfiles);

Router.put('/profile', profileHandlers.updateProfile);

Router.delete('/profile', profileHandlers.deleteProfile);

export default Router;
