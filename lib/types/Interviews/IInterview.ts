import IUserBack from '@/lib/types/IUserBack';
import IInterviewInfo from '@/lib/types/Interviews/IInterviewInfo';
import {InterviewStatus} from '@/lib/types/Interviews/InterviewStatus';

export default interface IInterview {
    _id: string;
    interviewer: IUserBack;
    interviewee: IUserBack;
    status: InterviewStatus;
    date: Date;
    meetingUrl: string;
    info?: IInterviewInfo;
    price: number;
    isPaid: boolean;
}