import styles from "./finishedInterviews.module.scss"
import { useState, useEffect } from "react";
import useAuthStore from "@/lib/zustand/stores/useAuthStore";
import useUserStore from '@/lib/zustand/stores/useUserStore';
import useHasMounted from "@/lib/hooks/useHasMounted";
import { API_URL } from "@/lib/utils/urls";
import axios, { AxiosError } from 'axios';
import Image from 'next/image';
import IInterview from "@/lib/types/Interviews/IInterview";
import { fireError } from '@/lib/utils/toasts';
import InterviewCard from './../InterviewCard/InterviewCard';
import EditInterviewInfo from './../EditInterviewInfo/EditInterviewInfo';
import FinishedInterviewCard from './../FinishedInterviewCard/FinishedInterviewCard';

type Props = {
    username: string | undefined
    role: string
}

export default function FinishedInterviews({ username, role }: Props) {
    const hasMounted = useHasMounted();
    const [interviewsMade, setInterviewsMade] = useState<IInterview[]>([]);
    const [interviewsHad, setInterviewsHad] = useState<IInterview[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const updateInterviews= (interview:IInterview)=>{
        for(let i=0;i<interviewsMade.length;i++){
            if(interviewsMade[i]._id===interview._id){
                interviewsMade[i].info=interview.info;
                console.log('did it work',interviewsMade[i]);
                setInterviewsMade(interviewsMade);
                return;
            }
        }
        for(let i=0;i<interviewsHad.length;i++){
            if(interviewsHad[i]._id===interview._id){
                interviewsHad[i].info=interview.info;
                setInterviewsHad(interviewsHad);
                return;
            }
        }
    }

    const fetchAsInterviewer = async () => {
        try {
            setLoading(true);
            const response = await axios.get(
                `${API_URL}/users/${username}/interviews/finished?type=made`
            );
            console.log(JSON.stringify(response?.data));
            setInterviewsMade(response?.data);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            const e = err as AxiosError;
            console.log(e);
            //@ts-ignore
            // errorMsg = e.response?.data?.message;
        }
    }

    const fetchAsInterviewee = async () => {
        try {
            setLoading(true);
            const response = await axios.get(
                `${API_URL}/users/${username}/interviews/finished?type=had`
            );
            console.log('wtf',JSON.stringify(response?.data));
            setInterviewsHad(response?.data);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            const e = err as AxiosError;
            console.log(e);
            //@ts-ignore
            // errorMsg = e.response?.data?.message;
        }
    }

    useEffect(() => {
        if (role === 'interviewer') {
            fetchAsInterviewer();
            fetchAsInterviewee();
        }

        if (role === 'interviewee')
            fetchAsInterviewee();
    }, [])

    if (!hasMounted) return null;

    return (
        <>
            {interviewsMade.length > 0 && <div>
                <h2 className={styles.heading}>History as Interviewer</h2>
                {interviewsMade?.map(
                    (interview) => (
                        <FinishedInterviewCard
                            key={interview._id}
                            interview={interview}
                            username={username!}
                            updateInterviews={updateInterviews}
                        />
                    ))
                }
            </div>}
            {interviewsHad.length > 0 && <div>
                <h2 className={styles.heading}>History as Interviewee</h2>
                {interviewsHad?.map(
                    (interview) => (
                        <FinishedInterviewCard
                            key={interview._id}
                            interview={interview}
                            username={username!}
                            updateInterviews={updateInterviews}
                        />
                    ))
                }
            </div>}
        </>
    );
}