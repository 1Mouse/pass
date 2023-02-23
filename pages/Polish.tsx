import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Polish.module.scss';
import Image from 'next/image';
import SearchBox from '@/Components/common/search';
import Navbarfirst from '@/Components/common/navbar';

export default function Polish() {
  return (
    <>
      <Navbarfirst />
      <div className={styles.container}>
        <div className={styles.center}>
          <div className={styles.uptext}>Your account has successfully activated</div>
          <div className={styles.imageContainer}>
            <Image src="/groupSignuoDoneImage.png" alt="Example Image" width={300} height={300} />
          </div>
          <div className={styles.text}>
            <div>let's polish your profile to stand out between your peers</div>
            <button className={styles.button}>lets go</button>
          </div>
        </div>
      </div>
    </>
  );
}
