import Head from "next/head";
import React from "react";
import Link from "next/link";
import Style from "../Components/card.module.scss";
import Image from "next/image";
import PassLogo from "../public/PassLogo.svg";
import Logo from "../public/Logo.svg";
import Home from "../pages/Home";
import amico from "../public/amico.svg";
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
import { faStar } from "@fortawesome/free-regular-svg-icons";

// import { useRouter } from "next/router";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";

const Card = () => {
  return (
    <div className={Style.slide_container}>
      <div className={Style.slide_content}>
        <div className={Style.card}>
          <div className={Style.image_content}>
            <span className={Style.overlay}></span>
            <div className={Style.card_image}>
              <Image src={amico} alt="amico" className={Style.card_img} />
            </div>
          </div>
          <div className={Style.card_content}>
            <h2 className={Style.name}>David Dell</h2>
            <p className={Style.description}>
              The lorem text the section that contains header with having open
              functionality. Lorem dolor sit amet consectetur adipisicing elit.
            </p>
            <p className={Style.card_price_rate}>
              4
              <FontAwesomeIcon
                icon={faStar}
                className={Style.FontAwesomeIcon}
              />
              From $20 / person
            </p>
            <button className={Style.button}>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
