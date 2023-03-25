import Head from "next/head";
import React from "react";
import Link from "next/link";
import Style from "../Components/signUpDone2.module.scss";
import Image from "next/image";
import PassLogo from "../public/PassLogo.svg";
import amico from "../public/amico.svg";
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
import { faGrinStars } from "@fortawesome/free-regular-svg-icons";

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
                  icon={faGrinStars}
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

      {/* <!-- Start landing --> */}

      <div className={Style.landing}>
        <div className={Style.container}>
          <div className={Style.text}>
            <h1>Your account has successfully activated</h1>
            <div className={Style.amico}>
              <Image src={amico} alt="amico" className={Style.amico} />
            </div>
            <p>let's polish your profile to stand out between your peers</p>
          </div>
        </div>
      </div>

      {/* <!-- End landing --> */}
    </>
  );
};

export default SignUpDone;
