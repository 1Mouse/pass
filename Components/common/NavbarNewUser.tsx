import styles from '../../styles/navbarNewUser.module.scss'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbarnew = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/FrameLogo.png" alt="Interview Image" width={124.71} height={56.73} />
      </div>
      <button className={styles['menu-toggle']} onClick={toggleNav}>
        <Image src="/Hamburger.png" alt="Menu" width={20} height={20} />
      </button>
      <ul className={`${styles['nav-links']} ${navOpen ? styles['nav-links-open'] : ''}`}>
        <li>
          <Link href="/about">
            <span className={styles['nav-link']} onClick={toggleNav}>About</span>
          </Link>
        </li>
        <li>
          <Link href="/pricing">
            <span className={styles['nav-link']} onClick={toggleNav}>Pricing</span>
          </Link>
        </li>
        <li>
          <Link href="/testimonials">
            <span className={styles['nav-link']} onClick={toggleNav}>Testimonials</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span className={styles['nav-link']} onClick={toggleNav}>Contact</span>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <span className={styles['nav-link']} onClick={toggleNav}>Log In</span>
          </Link>
        </li>
        <li>
          <Link href="/joinnow">
            <span className={`${styles['nav-link']} ${styles['nav-link-unique']}`} onClick={toggleNav}>Join Now</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbarnew;
