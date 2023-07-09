import IInterview from '@/lib/types/Interviews/IInterview';
import styles from './interviewInfo.module.scss';

type Props = {
    interview: IInterview
}
const InterviewInfo = ({ interview }: Props) => {
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
        </>
    )
}

export default InterviewInfo;