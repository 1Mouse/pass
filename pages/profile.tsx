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
        <div className={styles.profile} style={{ background: "#040B24" }}>
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
