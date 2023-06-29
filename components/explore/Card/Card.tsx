import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import IUserBack from "@/lib/types/IUserBack";



type Props = {
    userData: IUserBack | null;
};

const Card = (props: Props) => {
    // console.log("props in profile content");
    // console.log(props);

    return (
        <div className={styles.contentBox}>
            <div className={`${styles.card}`}>
                <div className={styles.imageContainer}>
                    <Image
                        src={
                            props.userData!.imageUrl === ''|| props.userData!.imageUrl===undefined ?
                                '/assets/default_profile_photo.svg'
                                :
                                props.userData!.imageUrl
                        }
                        alt="a picture of a person"
                        width={300}
                        height={300}
                        className={styles.image}
                        loading="eager"
                    />
                </div>
                <section className={styles.info}>
                    
                    <h1 className={styles.name}>
                        <Link href={`/users/${props!.userData!.username}`} className={styles.unsetLink}>
                        {props.userData!.info.firstName} {props.userData!.info.lastName}
                        </Link>
                        <span className={styles.rating}>
                            {props.userData!.rating === 0 && "Unrated"}
                            {Array(props.userData!.rating)
                                .fill(0)
                                .map((_, i) => (
                                    <FontAwesomeIcon
                                        key={i}
                                        icon={faStar}
                                        className={styles.icon}
                                    />
                                ))}
                        </span>
                    </h1>
                    {/* </Link> */}
                    <p className={styles.username}>@{props.userData!.username}</p>
                    <p className={styles.bio}>{props.userData!.info.bio}</p>
                    <div className={styles.bookNowContainer}>
                        <p className={styles.price}>{props.userData!.info.price}$ /hr</p>
                        <button className={styles.bookNow}>Book</button>
                    </div>
                </section>
            </div>
            <section className={styles.skills}>
                <h2 className={styles.heading}>Skills:</h2>
                {props.userData!.info.skills!.map((skill, i) => (
                    <span key={i} className={styles.skill}>
                        {skill}
                    </span>
                ))}



                <h2 className={styles.heading}>
                    Level of Experience:{" "}
                    <span>{props.userData!.info.levelOfExperience}</span>
                </h2>

            </section>
        </div>
    );
};

export default Card;
