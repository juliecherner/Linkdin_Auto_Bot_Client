import { Request, Response } from 'express';
import { getErrorMessage } from '../utils/errors.util';
import { ProfileDocument } from '../models/profile.model'
import * as services from '../services/profile.service';

export async function addProfile(
  req: Request<{}, {}, ProfileDocument>,
  res: Response) {
  try {
    const result = await services.addProfile(req.body);
    
    return res.send("Profile insertion to DB success");
  } catch (error) {
    return res.status(500).send("Profile insertion to DB failed");
  }
}

export async function getAllProfiles(req: Request, res: Response) {
  try {
    const profiles = await services.getAllProfiles();
    return res.send(profiles);
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
}
