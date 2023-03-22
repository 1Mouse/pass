import { Types } from 'mongoose';

import { Role } from '../../enums/role-enum';
import IUserInfo from './user-info-interface';

export default interface IUserFilterCriteria {
  username?: string;
  role?: Role;
  info?: IUserInfo;
}
