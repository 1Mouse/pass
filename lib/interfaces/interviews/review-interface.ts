import { Types } from "mongoose";

export default interface IReview {
  from: Types.ObjectId;
  to: Types.ObjectId;
  rating: number;
  feedback: string;
}