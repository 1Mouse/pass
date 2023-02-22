import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Polish.module.scss';
import Image from 'next/image';
import SearchBox from '@/Components/common/search';

export default function Home() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image src="/Frame Logo.png" alt="Logo" width={124.71}height={56.73} />
        </div>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/" passHref>
              watch interview
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              Brawse
            </Link>
          </li>
          <li>
           <Link href="" passHref>
            <SearchBox/>
            </Link>
          </li>
          <li>
            
            <Image src="/Line 1.png" alt="Logo" width={1}height={32} />
            
          </li>
          <li>
            <Link href="/contact" passHref>
            <Image src="/user.png" alt="Logo" width={32}height={32} />
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
            <Image src="/icon-park-outline_drop-down-list.png" alt="Logo" width={32}height={32} />
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.container}>
        <div className={styles.center}>
          <div className={styles.uptext}>Your account has successfully activated</div>
          <div className={styles.imageContainer}>
            <Image src="/group Signuo Done Image.png" alt="Example Image" width={300} height={300} />
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
