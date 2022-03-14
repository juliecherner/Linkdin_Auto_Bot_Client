import { Request, Response } from 'express';



export async function getAllProfileHandler(req: Request, res: Response) {
  const profile = await getAllProfileService({ projectId });
  
  return res.send(profile);
}
