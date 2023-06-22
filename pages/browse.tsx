import React from "react";
import styles from "../styles/pages/browse.module.scss";
import Head from "next/head";
import CardPlace from "./CardPlace";
import CardStatus from "@/components/common/CardInterviewee";
import CardStatusInterviwee from "./Card-Status-Interviwee";

export default function browes() {
  return (
    <>
      <Head>
        <title>browes</title>
      </Head>

      <div className={styles.browes}>
        <div className={styles.Intor}>
          <div className={styles.IntroText}>
            <h4>COACHING</h4>
            <h2>Get expert coaching, mock interviews, and more</h2>
            <hr />
            <p>
              connect with an expert in your field to practice mock interviews,
              review your resume, or create a study plan.
            </p>
          </div>

          <div className={styles.Cards}>
            <h2>Browse all coaches</h2>
            <div className={styles.filter}>
              <label htmlFor="role">Filter by Role:</label>
              <select name="role" id="role">
                <option value="">All Roles</option>
                <option value="Interviewer">Interviewer</option>
                <option value="Interviewee">Interviewee</option>
              </select>

              <label htmlFor="company">Filter by Company:</label>
              <select name="company" id="company">
                <option value="">All Companies</option>
                <option value="google">Google</option>
                <option value="facebook">Facebook</option>
                <option value="apple">Apple</option>
              </select>
            </div>
            <CardPlace></CardPlace>
          </div>
        </div>
      </div>
    </>
  );
}
