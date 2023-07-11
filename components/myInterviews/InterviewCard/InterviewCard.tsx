import styles from './interviewCard.module.scss';
import IInterview from '@/lib/types/Interviews/IInterview';
import useAuthStore from '@/lib/zustand/stores/useAuthStore';
import { useState, useEffect } from "react";
import axios, { AxiosError } from 'axios';
import { API_URL } from '@/lib/utils/urls';
import { fireSuccess, fireError } from '@/lib/utils/toasts';
import dayjs, { Dayjs } from 'dayjs';
import Link from 'next/link';
import PaypalModal from "@/components/common/PaypalModal/PaypalModal";

type Props = {
    interview: IInterview,
    accessToken: string,
    filterAnInterview: (_id: string) => void
}

export default function InterviewCard({ interview, accessToken, filterAnInterview }: Props) {
    const [role, authedId] = useAuthStore(state => [state.user.role, state.user._id])
    const [loading, setLoading] = useState<boolean>(false)
    const [showModal, setShowModal] = useState(false);


    console.log('here', interview)
    const handleConfirm = async () => {
        try {
            setLoading(true)
            const response = await axios.put(`${API_URL}/interviews/${interview._id}/confirmation`, {},
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                }
            );
            console.log(JSON.stringify(response?.data));
            setLoading(false);
            filterAnInterview(interview._id);
            fireSuccess('Confirmed successfully');
        } catch (err) {
            setLoading(false);
            const error = err as AxiosError;
            console.log(error)
            if (error?.response) {
                //@ts-ignore
                fireError(error.response?.data?.message);
            }
            else {
                fireError('Something went wrong')
            }
        }
    }

    const handleReject = async () => {
        try {
            setLoading(true)
            const response = await axios.put(`${API_URL}/interviews/${interview._id}/rejection`, {},
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                }
            );
            console.log(JSON.stringify(response?.data));
            setLoading(false);
            filterAnInterview(interview._id);
            fireSuccess('rejection is done');
        } catch (err) {
            setLoading(false);
            const error = err as AxiosError;
            console.log(error)
            if (error?.response) {
                //@ts-ignore
                fireError(error.response?.data?.message);
            }
            else {
                fireError('Something went wrong')
            }
        }
    }



    return (<>
        <div className={styles.Card}>
            <div>
                <span>Interviewer: </span>
                <span><Link href={`/users/${interview.interviewer.username}`}
                className={styles.profileLink}
                >
                {interview.interviewer.info.firstName + ' ' + interview.interviewer.info.lastName}
                </Link>
                </span>
            </div>
            <div>
                <span>Interviwee: </span>
                <span>
                    <Link href={`/users/${interview.interviewee.username}`}
                        className={styles.profileLink}
                    >
                    {interview.interviewee.info.firstName + ' ' + interview.interviewee.info.lastName}
                    </Link>
                    </span>
            </div>
            <div>
                <span>Date: </span>
                <span>{dayjs(interview.date).format('ddd, MMM D, YYYY h:mm A')}</span>
            </div>
            <div>
                <span>price: </span>
                <span>{interview.price === 0 ? 'free' : `${interview.price}$`}</span>
            </div>
            {
                interview.status === "pending" &&
                <>
                    <div className={styles.pendingButtonsContainer}>
                        {role === 'interviewer' &&
                            <button className={styles.confirm} disabled={loading}
                                onClick={handleConfirm}
                            >{loading ? 'loading...' : 'Confirm'}</button>}
                        <button
                            className={styles.reject}
                            disabled={loading}
                            onClick={handleReject}
                        >{loading ? 'loading...' : 'Reject'}</button>
                    </div>
                </>
            }
            {
                interview.status === "confirmed" &&
                <>
                    <div>
                        <span>got paid: </span>
                        <span>{interview.isPaid ? 'yes' : 'no'}</span>
                    </div>
                    {!interview.isPaid && interview.interviewee._id === authedId && 
                    <button
                        className={styles.pay}
                        onClick={() => setShowModal(true)}
                        >
                    {'pay now'}</button>}
                    {showModal &&
                            <PaypalModal
                                showModal={showModal}
                                setShowModal={setShowModal}
                                accessToken={accessToken}
                                interviewId={interview._id}
                            />
                        }
                </>
            }
            {/* {interview.status === "rejected" && <p>rejected</p>}
            {interview.status === "finished" && <p>finished</p>} */}
        </div>
    </>
    )
}


//!interview.isPaid&& interview.interviewee._id===authedId 