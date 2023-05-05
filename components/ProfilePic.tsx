import Image from 'next/image';
import styles from './profilePic.module.scss'

const ProfilePic = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image
                    src="/photo.svg"
                    alt="description of image"
                    width={250}
                    height={250}
                />
            </div>
        </div>
    );
}

export default ProfilePic;