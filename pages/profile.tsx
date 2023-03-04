import React from "react";
import styles from "../styles/profile.module.scss";
import Profiletop from "../componant/profile_page/Profile_top_section/profiletop";
import Container1 from "@/componant/profile_page/container1";
import Skill from "@/componant/profile_page/skills";
import Container2 from "@/componant/profile_page/container2";
import Container3 from "@/componant/profile_page/interst";
import Changeusename from "@/componant/profile_page/changeusename";
import Changeemail from "@/componant/profile_page/changeemail";
import Changepassword from "@/componant/profile_page/changepassword";
import Pricing from "@/componant/profile_page/pricing";
import Dateandtime from "@/componant/profile_page/dateandtime";
import Social from "@/componant/profile_page/socials";
export default function Profile() {
  return (
    <>
      <main>
        <div className={styles.profile}>
          <div className={styles.profile_head}>
            <Profiletop></Profiletop>
          </div>
          <hr></hr>
          <div className={styles.profile_container1}>
            <Container1></Container1>
          </div>
          <hr></hr>
          <div className={styles.profile_container2}>
            <Container2></Container2>
          </div>
          <hr></hr>
          <div className={styles.container3}>
            <Container3></Container3>
          </div>
          <hr></hr>
          <div>
            <Changeusename></Changeusename>
          </div>
          <hr></hr>
          <div>
            <Changeemail></Changeemail>
          </div>
          <hr></hr>
          <div>
            <Changepassword></Changepassword>
          </div>
          <hr></hr>
          <div>
            <Pricing></Pricing>
          </div>
          <hr></hr>
          <div>
            <Dateandtime></Dateandtime>
          </div>
          <hr></hr>
          <div>
            <Social></Social>
          </div>
          <hr></hr>
        </div>
      </main>
    </>
  );
}
