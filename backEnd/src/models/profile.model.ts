import mongoose from 'mongoose';

export interface ProfileDocument extends mongoose.Document {
  _id: string;
  name: string;
  profileName: string;
  position: string;
  email: string;
  //linkdinLink:only required field
  linkdinLink: string;
  isEmailSent: boolean;
  isStared: boolean;
  isVmarked: boolean;
  tags: string[];
  imageSrc: string;
  comment: string;
  dateScraped: Date;
}

const profileSchema = new mongoose.Schema({
  name: String,
  profileName: String,
  position: String,
  email: String,
  linkdinLink: String,
  isEmailSent: Boolean,
  isStared: Boolean,
  isVmarked: Boolean,
  tags: [String],
  imageSrc: String,
  comment: String,
  dateScraped: Date,
});

const ProfileModel = mongoose.model<ProfileDocument>('Profile', profileSchema);

export default profileSchema;
