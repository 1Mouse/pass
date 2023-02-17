import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../../styles/navbarNewUser.module.scss'
import Link from 'next/link';
import NavButton from './button'
const inter = Inter({ subsets: ['latin'] })





function NavbarNewUser() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src="/Frame Logo.png" alt="Logo" />
      </div>
      <ul className={styles.ul}>
      <li >    <NavButton href='./about' text="About" /></li>
             <li >    <NavButton href='./pricing' text="Pricing" /></li>
             <li >    <NavButton href='./testimoials' text="Testimoials" /></li>
             <li >    <NavButton href='./contact' text="Contact" /></li>
             <li >    <NavButton href='./login' text="Log in" /></li>
             <li className={styles.JoinNow}>    <NavButton href='./JoinNow' text="Join now" /></li>
      </ul>
      
    </nav>
  );
}

export default NavbarNewUser;

























