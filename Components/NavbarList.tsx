import Head from "next/head";
import React from "react";
import Link from "next/link";
import Style from "../Components/navbarList.module.scss";
import Image from "next/image";
import PassLogo from "../public/PassLogo.svg";
import HeroImage from "../public/HeroImage.png";
import Home from "../pages/Home";
// import your animation
import "animate.css";

// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your icons
import {
  faSearch,
  faChevronCircleDown,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

// import { useRouter } from "next/router";

const SignUpDone = () => {
  return (
    <>
      {/* <!-- Start NavBar --> */}

      <div className={Style.header}>
        <div className={Style.container}>
          <div className={Style.imageContainer}>
            <Link href="Home">
              <Image src={PassLogo} alt="PassLogo" className={Style.PassLogo} />
            </Link>
          </div>
          <ul className={Style.main_nav}>
            <li>
              <Link href="#Watch Interviews">Watch Interviews</Link>
            </li>
            <li>
              <Link href="#Browse">Browse</Link>
            </li>
            <li>|</li>
            <li>
              <Link href="#faSearch">
                <FontAwesomeIcon
                  icon={faSearch}
                  className={Style.FontAwesomeIcon}
                />
              </Link>
            </li>
            <li>
              <Link href="#faUser">
                <FontAwesomeIcon
                  icon={faUser}
                  className={Style.FontAwesomeIcon}
                />
              </Link>
            </li>
            <li>
              <Link href="#faChevronCircleDown">
                <FontAwesomeIcon
                  icon={faChevronCircleDown}
                  className={Style.FontAwesomeIcon}
                />
              </Link>
              <div className={Style.mega_menu}>
                <ul className={Style.links}>
                  <li>
                    <Link href="Home">Home</Link>
                  </li>

                  <li>
                    <Link href="Home">watch interviews</Link>
                  </li>

                  <li>
                    <Link href="/Browse">Browse</Link>
                  </li>

                  <li>
                    <Link href="/Profile">Profile</Link>
                  </li>

                  <li>
                    <Link href="/About">About</Link>
                  </li>

                  <li>
                    <Link href="/Pricing">Pricing</Link>
                  </li>

                  <li>
                    <Link href="/Testimonials">Testimonials</Link>
                  </li>

                  <li>
                    <Link href="/Contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- End NavBar --> */}
    </>
  );
};

export default SignUpDone;
