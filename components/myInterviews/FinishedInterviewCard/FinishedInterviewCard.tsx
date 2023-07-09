import EditInterviewInfo from '../EditInterviewInfo/EditInterviewInfo';
import styles from './finishedInterviewCard.module.scss'
import IInterview from '@/lib/types/Interviews/IInterview';
import Image from 'next/image';
import { useState } from 'react';
import useAuthStore from '@/lib/zustand/stores/useAuthStore';
import InterviewInfo from './../InterviewInfo/InterviewInfo'

type Props = {
    interview: IInterview
    username: string
    updateInterviews: (interview: IInterview) => void
}

const FinishedInterviewCard = ({ interview, username, updateInterviews }: Props) => {
    const [toggleEdit, setToggleEdit] = useState<boolean>(false);
    const [AuthedUser] = useAuthStore((state) => [state.user.username]);

    return (
        <>
            <section className={styles.interviewCard}>
                {AuthedUser===username && <button className={styles.edit} onClick={() => setToggleEdit(!toggleEdit)}>Edit</button>}
                <div className={styles.imageContainer}>
                    <Image
                        src={
                            interview.interviewer.imageUrl === '' ?
                                '/assets/default_profile_photo.svg'
                                :
                                interview.interviewer.imageUrl
                        }
                        alt="a picture of a person"
                        width={60}
                        height={60}
                        className={styles.image}
                    />
                </div>
                <div>Interviewer name: {interview.interviewer.info.firstName} {interview.interviewer.info.lastName}</div>
                <div className={styles.imageContainer}>
                    <Image
                        src={
                            interview.interviewer.imageUrl === '' ?
                                '/assets/default_profile_photo.svg'
                                :
                                interview.interviewer.imageUrl
                        }
                        alt="a picture of a person"
                        width={60}
                        height={60}
                        className={styles.image}
                    />
                </div>
                <div>Interviewee name: {interview.interviewee.info.firstName} {interview.interviewee.info.lastName}</div>

                {toggleEdit && <EditInterviewInfo interview={interview} setToggleEdit={setToggleEdit} toggleEdit={toggleEdit} updateInterviews={updateInterviews} />}
                {!toggleEdit&& interview.info?.title!==undefined && <InterviewInfo interview={interview} />}
                {/* {toggleEdit && interview.info?.title!==undefined && <EditInterviewReview />}
                {!toggleEdit && interview.info?.reviews?.length > 0 && <InterviewReview/>} */}
            </section>
        </>
    )
}

export default FinishedInterviewCard;