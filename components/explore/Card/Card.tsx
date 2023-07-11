import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import IUserBack from "@/lib/types/IUserBack";
import { useState } from 'react';
import useAuthStore from "@/lib/zustand/stores/useAuthStore";
// import Modal from "@/components/common/Modal/Modal";
// import BookModal from "@/components/common/BookModal/BookModal";
import MuiModal from "@/components/common/MuiModal/MuiModal";

type Props = {
    userData: IUserBack | null;
};

const Card = (props: Props) => {
    // console.log("props in profile content");
    // console.log(props);

    const [showModal, setShowModal] = useState(false);

    const [_id, accessToken] = useAuthStore(state => [state.user._id, state.accessToken]);

    return (
        <div className={styles.contentBox}>
            <div className={`${styles.card}`}>
                <div className={styles.imageContainer}>
                    <Image
                        src={
                            props.userData!.imageUrl === '' || props.userData!.imageUrl === undefined ?
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
                            {Array(+props.userData!.rating.toFixed())
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
                        <button className={styles.bookNow} onClick={() => setShowModal(true)
                        }>
                            Book</button>
                        {showModal &&
                            <MuiModal
                                showModal={showModal}
                                setShowModal={setShowModal}
                                timeslots={props.userData!.info.timeslots}
                                interviewerId={props.userData!._id}
                                intervieweeId={_id}
                                accessToken={accessToken}
                            />
                        }
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
