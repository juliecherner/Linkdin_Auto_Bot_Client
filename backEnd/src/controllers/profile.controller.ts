import { Request, Response } from 'express';
import { getErrorMessage } from '../utils/errors.util';
import { ProfileDocument } from '../models/profile.model'
import * as services from '../services/profile.service';

export async function addProfile(
  req: Request<{}, {}, ProfileDocument>,
  res: Response
) {
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

export async function updateProfile(
  req: Request<{}, {}, ProfileDocument>,
  res: Response
) {
  try {
    const {profileId} = req.query;
    const update = req.body;
    if (!update) {
      return res.status(400).send("Update required in body"); 
    }

    const result = await services.updateProfile({_id: profileId}, update, { new: true });
    if (!result) {
      return res.status(404).send("Profile not found");
    }

    return res.send(result);    
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
}

export async function deleteProfile(
  req: Request,
  res: Response
) {
  try {
    const { profileId } = req.query;
    
    const result = await services.deleteProfile({ _id: profileId });
    if (!result) {
      return res.status(404).send("Profile not found");
    }

    return res.send(result);
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
}
