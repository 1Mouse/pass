import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/ThankYou.module.scss';
import Image from 'next/image';
import Navbarfirst from '@/Components/common/navbar';

export default function thankyou() {
  return (
    <>
     <Navbarfirst></Navbarfirst>
      <div className={styles.container}>
        <div className={styles.center}>
          <div className={styles.imageContainer}>
            <Image src="/LOGO.png" alt="Example Image" width={50} height={50} />
          </div>
          <div className={styles.text}>
            <div>Thank you! Please check your email.</div>
            <div>Please check your email, and follow the instructions to activate your PASS.IO account and book your first interview. See you soon!</div>
          </div>
        </div>
      </div>
    </>
  );
}