import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Style from "../Components/navbarList.module.scss";
import logo from "../public/frameLogo1X.jpg";
import icon from "../public/close-circle-fill1X.jpg";

const NavbarList = () => {
  return (
    <>
        {/* <!-- Start NavBar --> */}

        <div className={Style.header}>
          <div className={Style.container}>
            <ul>
              <li>
                <Image
                  src={logo}
                  alt="Landscape picture"
                  width={80}
                  height={50}
                />
              </li>
              <li>
                <Image
                  // className={Style.icon}
                  src={icon}
                  alt="icon"
                  width={32}
                  height={32}
                />
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- End NavBar --> */}
        {/* <!-- Start NavBarList --> */}
        <div className={Style.NavBarList}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <hr/>
            <li>
              <Link href="/watch interviews">watch interviews</Link>
            </li>
            <hr/>
            <li>
              <Link href="/Browse">Browse</Link>
            </li>
            <hr/>
            <li>
              <Link href="/Browse">Profile</Link>
            </li>
            <hr/>
            <li>
              <Link href="/Browse">About</Link>
            </li>
            <hr/>
            <li>
              <Link href="/Browse">Pricing</Link>
            </li>
            <hr/>
            <li>
              <Link href="/Browse">Testimonials</Link>
            </li>
            <hr/>
            <li>
              <Link href="/Browse">Contact</Link>
            </li>
          </ul>
        </div> 
        {/* <!-- End NavBarList --> */}
    </>
  );
};

export default NavbarList;
