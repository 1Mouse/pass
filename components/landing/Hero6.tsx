import React from 'react';
import styles from './hero6.module.scss';

const Hero6: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <p className={styles['c-txt']}>
          Welcome to Pass
          Your gate for seamless interviews
        </p>
      </div>

      <div className={styles.card}>
        <p className={styles['c-txt']}>
          Discover the Power of Pass
          Unlock your potential and excel in your job interviews
        </p>
      </div>

      <div className={styles.card}>
        <p className={styles['c-txt']}>
          Elevate Your Interview Skills
          Learn valuable techniques and strategies to ace any interview
        </p>
      </div>
    </div>
  );
};

export default Hero6;
