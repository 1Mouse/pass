import { Types } from 'mongoose';

import { InterviewStatus } from '../../enums/interview-status-enum';
import IInterviewInfo from './interview-info-interface';

export default interface IInterview {
  _id: Types.ObjectId;
  interviewer: Types.ObjectId;
  interviewee: Types.ObjectId;
  status: InterviewStatus;
  isFinished: boolean;
  date: Date;
  info?: IInterviewInfo;
  price: number;
}
