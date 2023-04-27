import React from "react";
import Image from "next/image";
import styles from "./UserCard.module.scss";


const fullName = "John Doe";
const userName = "johndoe123";
const role = "Developer";
const rating = 4;
// const price =30;
const levelOfExperience = "Intermediate";
const skills = ["JavaScript", "React", "CSS", "HTML"];
const bio = "We are alwayes ready to face any challenging projects.";

const UserProfile: React.FC = () => {
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

export default UserProfile;



// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import styles from "./skills.module.scss";

// const socialMediaLinks = [
//   { platform: "facebook", url: "https://facebook.com/example" },
//   { platform: "linkedin", url: "https://www.linkedin.com/example" },
//   { platform: "twitter", url: "https://www.twitter.com/example/" },
// ];

// const UserProfile: React.FC = () => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     fetch("https://api.example.com/user-data")
//       .then((response) => response.json())
//       .then((data) => setUserData(data))
//       .catch((error) => console.log(error));
//   }, []);

//   if (!userData) {
//     return <div>Loading...</div>;
//   }

//   const {
//     fullName,
//     userName,
//     role,
//     rating,
//     levelOfExperience,
//     skills,
//     bio,
//   } = userData;

//   return (
//     <div className={styles.userProfile}>
//       <div className={styles.leftSide}>
//         <div className={styles.field}>
//           <span className={styles.label}>Full Name</span>
//           <span className={styles.value}>{fullName}</span>
//         </div>
//         <div className={styles.field}>
//           <span className={styles.label}>User Name</span>
//           <span className={styles.value}>{userName}</span>
//         </div>
//         <div className={styles.field}>
//           <span className={styles.label}>Role</span>
//           <span className={styles.value}>{role}</span>
//         </div>
//         <div className={styles.field}>
//           <span className={styles.label}>Rating</span>
//           <span className={styles.value}>{rating}/5</span>
//         </div>
//       </div>
//       <div className={styles.rightSide}>
//         <div className={styles.field}>
//           <span className={styles.label}>Level of Experience</span>
//           <span className={styles.value}>{levelOfExperience}</span>
//         </div>
//         <div className={styles.field}>
//           <span className={styles.label}>Skills</span>
//           <span className={styles.value}>{skills.join(", ")}</span>
//         </div>
//         <div className={styles.field}>
//           <span className={styles.label}>Bio</span>
//           <span className={styles.value}>{bio}</span>
//         </div>
//         <div className={styles.socialMedia}>
//           <span className={styles.label}>Social Media</span>
//           <div className={styles.iconContainer}>
//             {socialMediaLinks.map((link) => (
//               <a href={link.url} key={link.url}>
//                 {link.platform === "facebook" && (
//                   <div
//                     className={styles.icon}
//                     style={{ backgroundImage: `url("/Facebook.svg")` }}
//                   />
//                 )}
//                 {link.platform === "likedin" && (
//                   <div
//                     className={styles.icon}
//                     style={{ backgroundImage: `url("/Linkedin.svg")` }}
//                   />
//                 )}
//                 {link.platform === "twitter" && (
//                   <div
//                     className={styles.icon}
//                     style={{ backgroundImage: `url("/Twitter.svg")` }}
//                   />
//                 )}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;


// -----------------------------------------------------------------------
// json file



// {
//   "fullName": "John Doe",
//   "userName": "johndoe123",
//   "role": "Web Developer",
//   "rating": 4.5,
//   "levelOfExperience": "Intermediate",
//   "skills": ["HTML", "CSS", "JavaScript", "React"],
//   "bio": "I'm a web developer with a passion for creating beautiful and responsive websites.",
//   "socialMediaLinks": [
//     {
//       "platform": "facebook",
//       "url": "https://www.facebook.com/johndoe123"
//     },
//     {
//       "platform": "linkedin",
//       "url": "https://linkedin.com/johndoe123"
//     },
//     {
//       "platform": "twitter",
//       "url": "https://www.twitter.com/johndoe123/"
//     }
//   ]
// }