import { useState, useEffect } from "react";
import React from "react";
import styles from "../styles/pages/profile.module.scss";
import Head from "next/head";
import ImageComponent from "@/components/Photo";
import InfoComponent from "@/components/UserCard";


export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className={styles.slimeDrop}></div>;
      <div className={styles.profile}>
        <div>
          <ImageComponent></ImageComponent>
        </div>

        <div>
        <InfoComponent/>
        </div>
      </div>
    </>
  );
}