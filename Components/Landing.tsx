import React from "react";
import Link from "next/link";
import Style from "../Components/landing.module.scss";
import Image from "next/image";
import img from "../public/image_landing.png";
import Home from "../pages/Home";
// import { useRouter } from "next/router";

const Landing = () => {
  return (
    // start header
    <>
      <div className={Style.header}>
        <div className={Style.container}>
          <a href="#Home" className={Style.logo}>
            Pass
          </a>
          <ul className={Style.main_nav}>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Pricing">Pricing</a>
            </li>
            <li>
              <a href="#Testmonials">Testmonials</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
            <li>
              <a href="#Log In">Log In</a>
            </li>
            <li className={Style.bt}>
              <a href="#Join Now">Join Now</a>
            </li>
          </ul>
        </div>
      </div>
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
          <div className={Style.image}>
            <Image src={img} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
