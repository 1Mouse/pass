import React from 'react';
import styles from '../components/hero5.module.scss';

const Hero5 = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>How to start</h1>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>01</h2>
              <h3>Step One</h3>
              <p>Set up your Profile</p>
              {/* <a href="#">Setup Now</a> */}
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>02</h2>
              <h3>Step Two</h3>
              <p>Choose from our Interviewrs</p>
              {/* <a href="#">Browse Now</a> */}
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>03</h2>
              <h3>Step Three</h3>
              <p>Book and join our world</p>
              {/* <a href="#">Book now</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero5;
