import Head from "next/head";
import React from "react";
import Link from "next/link";
import Style from "../Components/landing.module.scss";
import Image from "next/image";
import PassLogo from "../public/PassLogo.svg";
import HeroImage from "../public/HeroImage.png";
import Home from "../pages/Home";
import NavbarList from "./NavbarList";
// import your animation
import "animate.css";

// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your icons
import {} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";

// import { useRouter } from "next/router";

const Landing = () => {
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
              <Link href="#About">About</Link>
            </li>
            <li>
              <Link href="#Pricing">Pricing</Link>
            </li>
            <li>
              <Link href="#Testmonials">Testmonials</Link>
            </li>
            <li>
              <Link href="#Contact">Contact</Link>
            </li>
            <li>
              <Link href="#Log In">Log In</Link>
            </li>
            <li className={Style.bt}>
              <Link href="#Join Now">Join Now</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- End NavBar --> */}

      {/* <!-- Start landing --> */}

      <div className={Style.landing}>
        <div className={Style.container}>
          <div className={Style.text}>
            <h1>
              Best PlatForm To interviews with engineers from Amazon, Google,
              Facebook, and other top companies.
            </h1>
            <p>
              Get better at algorithmic and systems design problems, and get
              detailed feedback on exactly what you need to work on.
            </p>
          </div>
          <div className={Style.HeroImage}>
            <Image
              src={HeroImage}
              alt="HeroImage"
              className={Style.HeroImage}
            />
          </div>
        </div>
      </div>

      {/* <!-- End landing --> */}
    </>
  );
};

export default Landing;
