import Head from "next/head";
import React from "react";
import Link from "next/link";
import Style from "../Components/resetPassword.module.scss";
import Image from "next/image";
import PassLogo from "../public/PassLogo.svg";

// import your animation
import "animate.css";

// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your icons
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { ST } from "next/dist/shared/lib/utils";

// import { useRouter } from "next/router";

const ResetPassword = () => {
  return (
    <>
      <div className={Style.frame}>
        <div className={Style.center}>
          <Image src={PassLogo} alt="PassLogo" className={Style.PassLogo} />
          <h3>Reset Your Password</h3>
          <p>You can reset your password using this form.</p>
          <h6>New Password*</h6>
          <input type="text" className={Style.input} />
          <h6>Verify Password*</h6>
          <input type="text" className={Style.input} />
          <button className={Style.btn}>Create a New Password</button>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
