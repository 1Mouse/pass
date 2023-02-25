import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/navbarList.module.scss'
// import logo from "../public/frameLogo.svg";
// import icon from "../public/close-circle-fill.svg";
// import Home from "../pages/Home";
// import "animate.css";
// import { useRouter } from "next/router";

const NavbarList = () => {
  return (
    <>
      {/* <!-- Start NavBar --> */}

      <div className={styles.navbar}>
        <div className={styles.container}>
          <ul>
            <li>
              <Link href="Home">
                <Image className={styles.logo} src='{logo}' alt="logo" />
              </Link>
            </li>
            <li>
              <Image className={styles.icon} src='{icon}' alt="icon" />
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- End NavBar --> */}

      {/* <!-- Start NavBarList --> */}

      <div className={`${styles.NavBarList} animate__animated animate__shakeX`}>
        <ul>
          <li>
            <Link href="Home">Home</Link>
          </li>
          <hr />
          <li>
            <Link href="Home">watch interviews</Link>
          </li>
          <hr />
          <li>
            <Link href="/Browse">Browse</Link>
          </li>
          <hr />
          <li>
            <Link href="/Profile">Profile</Link>
          </li>
          <hr />
          <li>
            <Link href="/About">About</Link>
          </li>
          <hr />
          <li>
            <Link href="/Pricing">Pricing</Link>
          </li>
          <hr />
          <li>
            <Link href="/Testimonials">Testimonials</Link>
          </li>
          <hr />
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* <!-- End NavBarList --> */}
    </>
  );
};

export default NavbarList;