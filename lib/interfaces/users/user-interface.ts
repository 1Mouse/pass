import { Types } from 'mongoose';
import { Role } from '../../enums/role-enum';
import IUserInfo from './user-info-interface';

export default interface IUser {
  _id: Types.ObjectId;
  username: string;
  email: string;
  password: string;
  confirmed: boolean;
  active: boolean;
  role: Role;
  info?: IUserInfo;
}
