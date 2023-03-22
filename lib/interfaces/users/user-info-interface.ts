import { Types } from 'mongoose';
import ISocials from './socials-interface';
import ITimeslot from './timeslot-interface';

export default interface IUserInfo {
  _id: Types.ObjectId;
  firstName: string;
  lastName: string;
  bio?: string;
  price: number;
  priceable: boolean;
  interviewsHad: Types.ObjectId[];
  interviewsMade: Types.ObjectId[];
  skills?: string[];
  interests?: string[];
  socials?: ISocials;
  timeslots: ITimeslot[];
}
