import IInterview from '@/lib/types/Interviews/IInterview';
import styles from './interviewInfo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import IReview from '@/lib/types/Interviews/IReview';

type Props = {
    interview: IInterview
}
const InterviewInfo = ({ interview }: Props) => {
    const getFromAndTo = (review: IReview) => {
        // if(interview.info&&interview.info.reviews&&interview.info.reviews.length>0&&interview.info.reviews[0].from===interview.interviewee._id){
        //     return '1 Review given about the interviewer'
        // }
        // else if(interview.info&&interview.info.reviews&&interview.info.reviews.length>0&&interview.info.reviews[0].from===interview.interviewer._id){
        //     return '2 Review given about the interviewee'
        // }
        // else if (interview.info && interview.info.reviews && interview.info.reviews.length > 1 && interview.info.reviews[1].from === interview.interviewee._id){
        //     return '3 Review given about the interviewer'
        // }
        // else if(interview.info&&interview.info.reviews&&interview.info.reviews.length>1&&interview.info.reviews[1].from===interview.interviewer._id){
        //     return '4 Review given about the interviewee'
        // }

        if (review.from === interview.interviewee._id) {
            return 'Review given about the interviewer'
        }

        return 'Review given about the interviewee'
    }
    return (
        <>
            <h2 className={styles.heading}>{interview.info!.title}</h2>
            <p className={styles.summary}>{interview.info!.summary}</p>
            <h2 className={styles.tags}>Tags:
                {interview.info!.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>
                        {tag}
                    </span>
                ))}
            </h2 >
            {
                interview.info!.reviews && interview.info!.reviews.length > 0 &&
                <>
                    {/* <h2 className={styles.heading}>Reviews:</h2> */}
                    {interview.info!.reviews.map((review, i) => (
                        <div key={i}>
                            <h2 className={styles.subHeading}>{getFromAndTo(review)}</h2>
                            <p className={styles.summary}>{review.feedback}</p>
                            <p className={styles.rating}>Rating:
                                <span>
                                    {Array(review.rating)
                                        .fill(0)
                                        .map((_, i) => (
                                            <FontAwesomeIcon
                                                key={i}
                                                icon={faStar}
                                                className={styles.icon}
                                            />
                                        ))}
                                </span>
                            </p>
                        </div>
                    ))
                    }
                </>
            }

        </>
    )
}

export default InterviewInfo;