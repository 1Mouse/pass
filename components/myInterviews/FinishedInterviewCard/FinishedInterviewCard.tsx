import EditInterviewInfo from '../EditInterviewInfo/EditInterviewInfo';
import styles from './finishedInterviewCard.module.scss'
import IInterview from '@/lib/types/Interviews/IInterview';
import Image from 'next/image';
import { useState } from 'react';
import useAuthStore from '@/lib/zustand/stores/useAuthStore';
import InterviewInfo from './../InterviewInfo/InterviewInfo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

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
                {AuthedUser === username &&
                <div>
                    <button
                        className={styles.edit}
                        onClick={() => setToggleEdit(!toggleEdit)}>
                        {<FontAwesomeIcon icon={faPenToSquare} />}
                    </button>
                    </div>
                }
                <div className={styles.grid_2x1}>
                    <div className={styles.left}>
                        <h4 className={styles.role}>The Interviewer</h4>
                        <div className={styles.imageContainer}>
                            <Image
                                src={
                                    interview.interviewer.imageUrl === '' ?
                                        '/assets/default_profile_photo.svg'
                                        :
                                        interview.interviewer.imageUrl
                                }
                                alt="a picture of a person"
                                width={100}
                                height={100}
                                className={styles.image}
                            />
                        </div>
                        <div>
                            <Link 
                            className={styles.linkUnset}
                            href={`/users/${interview.interviewer.username}`}
                            target='_blank'
                            >
                                {interview.interviewer.info.firstName} {interview.interviewer.info.lastName}
                                </Link>
                                </div>
                    </div>
                    <div className={styles.right}>
                        <h4 className={styles.role}>The Interviewee</h4>
                        <div className={styles.imageContainer}>
                            <Image
                                src={
                                    interview.interviewee.imageUrl === '' ?
                                        '/assets/default_profile_photo.svg'
                                        :
                                        interview.interviewee.imageUrl
                                }
                                alt="a picture of a person"
                                width={100}
                                height={100}
                                className={styles.image}
                            />
                        </div>
                        <div>
                            <Link 
                            className={styles.linkUnset}
                            href={`/users/${interview.interviewee.username}`}
                            target='_blank'
                            >
                            {interview.interviewee.info.firstName} {interview.interviewee.info.lastName}
                            </Link>
                            </div>
                    </div>
                </div>
                {toggleEdit && <EditInterviewInfo interview={interview} setToggleEdit={setToggleEdit} toggleEdit={toggleEdit} updateInterviews={updateInterviews} />}
                {!toggleEdit && interview.info?.title !== undefined && <InterviewInfo interview={interview} />}
                {/* {toggleEdit && interview.info?.title!==undefined && <EditInterviewReview />}
                {!toggleEdit && interview.info?.reviews?.length > 0 && <InterviewReview/>} */}
            </section>
        </>
    )
}

export default FinishedInterviewCard;