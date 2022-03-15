import {
  DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery,
} from 'mongoose';
import ProfileModel, { ProfileDocument } from '../models/profile.model';

export async function addProfile(
  data: DocumentDefinition<ProfileDocument>
) {
  try {
    const newModel = await ProfileModel.insertMany(data);
    return;
  } catch (error) {
    throw '';
  }  
}

export async function getAllProfiles() {
  return ProfileModel.find({});
}
