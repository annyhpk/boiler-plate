import { Document, Model } from 'mongoose';
export interface UserTypes {
  name: string;
  email: string;
  password: string;
  lastname: string;
  role: number;
  image: string;
  token: string;
  tokenExp: number;
}

export interface UserDocument extends UserTypes, Document {}
export interface UserModel extends Model<UserDocument> {}