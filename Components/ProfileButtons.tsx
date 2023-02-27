import Head from "next/head";
import React from "react";
import Link from "next/link";
import Style from "../Components/profileButtons.module.scss";
import Image from "next/image";
// import your animation
import "animate.css";

// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your icons
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";

// import { useRouter } from "next/router";

const ProfileButtons = () => {
  return (
    <>
      <button className={`${Style.btn} ${Style.btn_sections}`}>Upload</button>
      <button className={`${Style.btn} ${Style.btn_Delete}`}>
        <FontAwesomeIcon icon={faTrash} className={Style.FontAwesomeIcon} />
        Delete Photo
      </button>
      <div className={Style.input_group}>
        <input type="text" className={Style.input} />
        <FontAwesomeIcon icon={faPlus} className={Style.FontAwesomeIcon} />
      </div>
    </>
  );
};

export default ProfileButtons;
