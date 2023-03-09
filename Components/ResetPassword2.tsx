import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import styles from "../Components/resetPassword.module.scss";
import PassLogo from "../public/PassLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEyeSlash,
  faEye,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import axios, { AxiosError } from "axios";
import config from "../config.json";
import { useRouter } from "next/router";

const API_ENDPOINT = config.apiEndpoint;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PWD_REGEX = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/;

const ResetPassword2 = () => {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(!PWD_REGEX.test(pwd));
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("done");
    const validateEmail = EMAIL_REGEX.test(email);
    const validatePwd = !PWD_REGEX.test(pwd);
    if (!validateEmail || !validatePwd) {
      setErrMsg("Invalid Entries");
      return;
    }

    try {
      const response = await axios.post(`${API_ENDPOINT}/login`, {
        email: email.toLowerCase(),
        password: pwd,
      });
      console.log(JSON.stringify(response?.data));
      setEmail("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      const error = err as AxiosError;
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 400) {
        setErrMsg("wrong email or Password");
      } else {
        setErrMsg("Log in failed");
      }
    }
  };

  return (
    <div className={`${styles.Container}`}>
      <form onSubmit={handleSubmit} className={styles.center}>
        <Image src={PassLogo} alt="PassLogo" className={styles.PassLogo} />
        <h3>Reset Your Password</h3>
        <p>You can reset your password using this form.</p>
        <h6>New Password*</h6>
        <p
          ref={errRef}
          className={errMsg ? styles.instructions : styles.hidden}
        >
          {errMsg}
        </p>

        <div className={styles.inputContainer}>
          <FontAwesomeIcon icon={faLock} className={styles.icon} />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            onFocus={() => setPwdFocus(true)}
          />
          <div className={styles.eye}>
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </div>
        </div>
        <p
          className={
            pwdFocus && pwd && !validPwd ? styles.instructions : styles.hidden
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} className={styles.pwdIcon} />
          minimum 8 characters, at least one uppercase letter, one lowercase
          letter, one number and one special charachter
        </p>

        <h6>Verify Password*</h6>
        <p
          ref={errRef}
          className={errMsg ? styles.instructions : styles.hidden}
        >
          {errMsg}
        </p>

        <div className={styles.inputContainer}>
          <FontAwesomeIcon icon={faLock} className={styles.icon} />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            onFocus={() => setPwdFocus(true)}
          />
          <div className={styles.eye}>
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </div>
        </div>
        <p
          className={
            pwdFocus && pwd && !validPwd ? styles.instructions : styles.hidden
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} className={styles.pwdIcon} />
          minimum 8 characters, at least one uppercase letter, one lowercase
          letter, one number and one special charachter
        </p>
        <button
          disabled={!validEmail || !validPwd}
          className={styles.btnPrimary}
          type="submit"
        >
          Create a New Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword2;
