import { Request, Response } from 'express';



export async function getAllProfileHandler(req: Request, res: Response) {
  const profile = await getAllProfilesService({ projectId });
  
  return res.send(profile);
}
