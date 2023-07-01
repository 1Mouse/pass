import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./profileContent.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Line from "@/components/common/Line";
import IUserBack from "@/lib/types/IUserBack";
import GenericError from "./common/GenericError/GenericError";
import useAuthStore from "@/lib/zustand/stores/useAuthStore";
import {useEffect,useState} from 'react';

type Props = {
    userData?: IUserBack | null;
    errorMsg: string;
};

const ProfileContent = (props: Props) => {
    console.log("props in profile content");
    console.log(props);

    const username=useAuthStore(state=>state.user.username);

    const [firstRender, setFirstRender] = useState<boolean>(false);

    useEffect(() => {
        setFirstRender(true);
    }, [])

    if (props.userData === null) {
        return <GenericError errorMsg={props.errorMsg} />;
    }

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
                    />
                </div>
                <section className={styles.info}>
                    <h1 className={styles.name}>
                        {props.userData!.info.firstName} {props.userData!.info.lastName}
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
                    <p className={styles.username}>@{props.userData!.username}</p>
                    <p className={styles.bio}>{props.userData!.info.bio}</p>
                    <div className={styles.bookNowContainer}>
                        <p className={styles.price}>{props.userData!.info.price}$ /hr</p>
                        {firstRender && props.userData!.role==='interviewer' && (username===''||username!==props.userData!.username)&&<button className={styles.bookNow}>Book</button>}
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

                {/* <span className={styles.skill}>javascript</span>
                <span className={styles.skill}>DSA</span>
                <span className={styles.skill}>front end</span>
                <span className={styles.skill}>AI</span>
                <span className={styles.skill}>big data analysis</span>    
                <span className={styles.skill}>DSA</span>
                <span className={styles.skill}>front end</span>
                <span className={styles.skill}>AI</span>
                <span className={styles.skill}>big data analysis</span>
                <span className={styles.skill}>javascript</span>
                <span className={styles.skill}>DSA</span>
                <span className={styles.skill}>front end</span>
                <span className={styles.skill}>AI</span>
                <span className={styles.skill}>big data analysis</span> */}

                {/* <Line/> */}
                <h2 className={styles.heading}>
                    Level of Experience:{" "}
                    <span>{props.userData!.info.levelOfExperience}</span>
                </h2>
                {/* <Line/> */}

                {props.userData!.info.socials && (
                    <h2 className={styles.heading}>
                        Socials:&nbsp; &nbsp;
                        {props.userData!.info.socials.linkedin && (
                            <span className={styles.socialIcon}>
                                <Link
                                    href={props.userData!.info.socials.linkedin}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} className={`fa-2xl`} />
                                </Link>
                            </span>
                        )}
                        {props.userData!.info.socials.github && (
                            <span className={styles.socialIcon}>
                                <Link
                                    href={props.userData!.info.socials.github}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon icon={faGithub} className={`fa-2xl`} />
                                </Link>
                            </span>
                        )}
                        {props.userData!.info.socials.twitter && (
                            <span className={styles.socialIcon}>
                                <Link
                                    href={props.userData!.info.socials.twitter}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon icon={faTwitter} className={`fa-2xl`} />
                                </Link>
                            </span>
                        )}                        
                    </h2>
                )}
            </section>
        </div>
    );
};

export default ProfileContent;
