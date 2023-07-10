import styles from './genericError.module.scss';
import Image from 'next/image';

export default function GenericError({errorMsg}:{errorMsg:string}){
    return(
        <div className={styles.errorContainer}>
            <div className={styles.imageContainer}>
                <Image
                    src='/assets/user-not-found.gif'
                    width={400}
                    height={400}
                    alt='user not found'
                    className={styles.image}
                />
            </div>
            <p className={styles.errorMsg}>{errorMsg}</p>
        </div>
    )
} 