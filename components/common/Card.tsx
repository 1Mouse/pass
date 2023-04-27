import React from "react";
import Style from "./card.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faChevronCircleDown,
  faCircleXmark,
  faDollar,
}
 from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

library.add(faSearch, faChevronCircleDown, faCircleXmark, faDollar, faStar);

interface CardProps {
  rate: number;
  price: number;
  name: string;
  bio: string;
  photo: string;
}

const Card = (props: CardProps) => {
  // Define a function to handle the click event
  const handleClick = () => {
    // Do something when the background is clicked
    // For example, redirect to another page
    window.location.href = "/profile";
  };

  return (
    <div className={Style.slidecontainer}>
      <div className={Style.slidecontent}>
        {/* Add an onClick attribute to the div element that has the background */}
        <div className={Style.card} onClick={handleClick}>
          <div className={Style.cardcontent}>
            <div className={Style.header}>
              <Link href="/profile">
                <span className={Style.rate}>
                  <FontAwesomeIcon icon={faStar} className={Style.Star} />
                  <h4>{props.rate}</h4>
                </span>
              </Link>
              <Link href="/profile">
                <span className={Style.price}>
                  <FontAwesomeIcon icon={faDollar} className={Style.Dollar} />
                  <h4>{props.price}/hr</h4>
                </span>
              </Link>
            </div>
            <div className={Style.imagecontent}>
              <Link href="/profile">
                <div className={Style.cardimage}>
                  <Image
                    src={props.photo}
                    alt="description of image"
                    width={100}
                    height={100}
                  />
                </div>
              </Link>
            </div>
            <Link href="/profile">
              <h2 className={Style.name}>{props.name}</h2>
            </Link>
            <Link href="/profile">
              <p className={Style.Bio}>{props.bio}</p>
            </Link>
            <button className={Style.button}>Book Now</button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;