import React, { useState } from "react";
import styles from "../styles/pages/bookinginterveiwer.module.scss";
import Head from "next/head";
import CardStatusInterviewee from "./Card-Status-Interviwee";
import CardStatusInterviewer from "./Card-Status-Interviwer";

export default function Booking() {
  const [isHadVisible, setHadVisible] = useState(true);
  const [isMakeVisible, setMakeVisible] = useState(true);

  const toggleHadVisibility = () => {
    setHadVisible(!isHadVisible);
  };

  const toggleMakeVisibility = () => {
    setMakeVisible(!isMakeVisible);
  };

  return (
    <>
      <Head>
        <title>Booking</title>
      </Head>
      <div className={styles.text}>
        Welcome to the Interviews page. Here you can view all the interviews
        that have been scheduled and their current status.
      </div>
      <div className={styles.page}>
      <div className={styles.booking}>
        <div className={styles.buttonContainer}>
          <button
            onClick={toggleHadVisibility}
            className={`${styles.button} ${
              isHadVisible ? styles.showButton : styles.hideButton
            }`}
          >
            Had
          </button>
          <button
            onClick={toggleMakeVisibility}
            className={`${styles.button} ${
              isMakeVisible ? styles.showButton : styles.hideButton
            }`}
          >
            Make
          </button>
        </div>
        {isHadVisible && (
          <div className={styles.section}>
            <h2
              className={`${styles.sectionHeading} ${styles.clickable}`}
              onClick={toggleHadVisibility}
            >
              Had
            </h2>
            <CardStatusInterviewee />
          </div>
        )}
        {isMakeVisible && (
          <div className={styles.section}>
            <h2
              className={`${styles.sectionHeading} ${styles.clickable}`}
              onClick={toggleMakeVisibility}
            >
              Make
            </h2>
            <CardStatusInterviewer />
          </div>
          
        )}
      </div>
      </div>
    </>
  );
}
