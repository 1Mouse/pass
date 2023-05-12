import React from "react";
import Image from "next/image";
import styles from "./profileContent.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Line from '@/components/common/Line'

const fullName = "John Doe";
const userName = "johndoe123";
const role = "Developer";
const rating = 4;
// const price =30;
const levelOfExperience = "Intermediate";
const skills = ["JavaScript", "React", "CSS", "HTML"];
const bio = "We are alwayes ready to face any challenging projects.";

const ProfileContent: React.FC = () => {
    return (
        <div className={styles.contentBox}>
            <div className={`${styles.card}`}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/assets/sample_photo.jpg"
                        alt=""
                        fill
                        className={styles.image}
                    />
                </div>
                <section className={styles.info}>
                    <h1 className={styles.name}>
                        Lorem Ipsum
                        <span className={styles.rating}>
                            4<FontAwesomeIcon icon={faStar} className={styles.icon} />
                        </span>
                    </h1>
                    <p className={styles.username}>@thisisusername_</p>
                    <p className={styles.bio}>Nullam condimentum, sapien vel mollis tincidunt, ex velit fermentum purus, eu elementum mi ipsum et nulla.  gravida dignissim tortor vel ultrices. Fusce eu risus eget.
                        condimentum, sapien vel mollis tincidunt, ex velit fermentum purus, eu elementum u elementum mi ipsum et nulla. Pellentesque vitae vulputate nulla. </p>
                    <div className={styles.bookNowContainer}>
                        <p className={styles.price}>5.00$ /hour</p>
                        <button className={styles.bookNow}>Book</button>
                    </div>
            </section>
            </div>
            <section className={styles.skills}>
                <h2 className={styles.heading}>Skills:</h2>
                    <span className={styles.skill}>javascript</span>
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
                <span className={styles.skill}>big data analysis</span>

                {/* <Line/> */}
                <h2 className={styles.heading}>Level of Experience: <span>Tech-lead</span></h2>
                {/* <Line/> */}
                <h2 className={styles.heading}>Socials:&nbsp; &nbsp; 
                <span className={styles.socialIcon}>
                <FontAwesomeIcon 
                icon={faLinkedin}
                className={`fa-2xl`}
                />
                </span>
                <span className={styles.socialIcon}>
                <FontAwesomeIcon 
                icon={faGithub}
                className={`fa-2xl`}
                />
                </span>
                <span className={styles.socialIcon}>
                <FontAwesomeIcon 
                icon={faTwitter}
                className={`fa-2xl`}
                />
                </span>
                </h2>
                
                </section>
            
        </div>
    );
};

export default ProfileContent;
