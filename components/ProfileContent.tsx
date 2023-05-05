import React from "react";
import Image from "next/image";
import styles from "./profileContent.module.scss";


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
        <div className={styles.userProfile}>
            <div className={styles.leftSide}>
                <div className={styles.field}>
                    <span className={styles.label}>Full Name</span>
                    <span className={styles.value}>{fullName}</span>
                </div>
                <div className={styles.field}>
                    <span className={styles.label}>User Name</span>
                    <span className={styles.value}>{userName}</span>
                </div>
                <div className={styles.field}>
                    <span className={styles.label}>Role</span>
                    <span className={styles.value}>{role}</span>
                </div>
                <div className={styles.field}>
                    <span className={styles.label}>Rating</span>
                    <span className={styles.value}>{rating}/5</span>
                </div>
                {/* <div className={styles.field}>
          <span className={styles.label}>price</span>
          <span className={styles.value}>{price}</span>
        </div> */}
            </div>
            <div className={styles.rightSide}>
                <div className={styles.field}>
                    <span className={styles.label}>Level of Experience</span>
                    <span className={styles.value}>{levelOfExperience}</span>
                </div>
                <div className={styles.field}>
                    <span className={styles.label}>Skills</span>
                    <span className={styles.value}>{skills.join(", ")}</span>
                </div>
                <div className={styles.field}>
                    <span className={styles.label}>Bio</span>
                    <span className={styles.value}>{bio}</span>
                </div>
                <div className={styles.socialMedia}>
                    <span className={styles.label}>Social Media</span>
                    <div className={styles.iconContainer}>
                        <a>
                            {" "}
                            <img src="/Facebook.svg" className={styles.icon} />
                        </a>
                        <a>
                            <img src="/Linkedin.svg" className={styles.icon} />
                        </a>
                        <a>
                            <img src="/Twitter.svg" className={styles.icon} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileContent;