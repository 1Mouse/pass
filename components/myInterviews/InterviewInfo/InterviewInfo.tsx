import IInterview from '@/lib/types/Interviews/IInterview';
import styles from './interviewInfo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

type Props = {
    interview: IInterview
}
const InterviewInfo = ({ interview }: Props) => {
    const getFromAndTo = () => {
        if(interview.info&&interview.info.reviews&&interview.info.reviews.length>0&&interview.info.reviews[0].from===interview.interviewee._id){
            return 'Review given about the interviewer'
        }
        else if(interview.info&&interview.info.reviews&&interview.info.reviews.length>0&&interview.info.reviews[0].from===interview.interviewer._id){
            return 'Review given about the interviewee'
        }
        if (interview.info && interview.info.reviews && interview.info.reviews.length > 1 && interview.info.reviews[1].from === interview.interviewee._id){
            return 'Review given about the interviewer'
        }
        else if(interview.info&&interview.info.reviews&&interview.info.reviews.length>1&&interview.info.reviews[1].from===interview.interviewer._id){
            return 'Review given about the interviewee'
        }
    }
    return (
        <>
            <h2 className={styles.heading}>{interview.info!.title}</h2>
            <p className={styles.summary}>{interview.info!.summary}</p>
            <h2 className={styles.tags}>Skills:</h2>
            {interview.info!.tags.map((tag, i) => (
                <span key={i} className={styles.tag}>
                    {tag}
                </span>
            ))}
            {
                interview.info!.reviews && interview.info!.reviews.length > 0 &&
                <>
                    <h2 className={styles.heading}>Reviews:</h2>
                    {interview.info!.reviews.map((review, i) => (
                        <div key={i}>
                            <h2 className={styles.subHeading}>{getFromAndTo()}</h2>
                            <p className={styles.summary}>{review.feedback}</p>
                            <p>Rating: 
                                <span className={styles.rating}>
                                
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

// function Review(){ 
//     const getThat=()=>{
//         if (reveiw.interviewee._id !== AuthedId) return interview.interviewee._id;
//         else return interview.interviewer._id;
//     }
//     return(
//         <>
//         <h3>from {}</h3>
//         <p>Review text</p>
//         </>
//     )
// }

export default InterviewInfo;