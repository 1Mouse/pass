import React from "react";
import styles from "../styles/profile.module.scss";
import Profiletop from "../componant/profile_page/Profile_top_section/Profiletop";
import Container1 from "@/componant/profile_page/General_info_section/Container1";
import Skill from "@/componant/profile_page/Choose";
import Container2 from "@/componant/profile_page/General_info_section/Container2";
import Container3 from "@/componant/profile_page/General_info_section/Interst";
import Changeusename from "@/componant/profile_page/User_section/Changeusename";
import Changeemail from "@/componant/profile_page/Email_section/Changeemail";
import Changepassword from "@/componant/profile_page/Password_section/Changepassword";
import Pricing from "@/componant/profile_page/Price/Pricing";
import Dateandtime from "@/componant/profile_page/DateAndTime/Dateandtime";
import Social from "@/componant/profile_page/Social_info/Socials";
export default function Profile() {
  return (
    <>
      <main>
        <div className={styles.profile}>
          <div className={styles.profile_head}>
            <Profiletop></Profiletop>
          </div>
          <div className={styles.profile_container1}>
            <Container1></Container1>
          </div>
          <div className={styles.profile_container2}>
            <Container2></Container2>
          </div>
          <div className={styles.container3}>
            <Container3></Container3>
          </div>
          <div>
            <Changeusename></Changeusename>
          </div>
          <div>
            <Changeemail></Changeemail>
          </div>
          <div>
            <Changepassword></Changepassword>
          </div>
          <div>
            <Pricing></Pricing>
          </div>
          <div>
            <Dateandtime></Dateandtime>
          </div>
          <div>
            <Social></Social>
          </div>
        </div>
      </main>
    </>
  );
}
