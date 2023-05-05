import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import styles from "./logInForm.module.scss";
import OrLine from "./common/OrLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faLock,
    faEyeSlash,
    faEye,
    faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import axios, { AxiosError } from 'axios';
import config from '../config.json';
import { useRouter } from "next/router";

import useAuthStore from '../lib/zustand/stores/useAuthStore';
import IUser from "@/lib/types/IUser";
import omit from './../lib/utils/omit';

const API_ENDPOINT = config.apiEndpoint;
const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PWD_REGEX = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/;

const LogInForm = () => {
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

    const { setUser, setAccessToken, setRefreshToken } = useAuthStore(
        (state) => ({
            setUser: state.setUser,
            setAccessToken: state.setAccessToken,
            setRefreshToken: state.setRefreshToken,
        })
    );

    const user = useAuthStore((state) => state.user);
    const accessToken = useAuthStore((state) => state.accessToken);
    const refreshToken = useAuthStore((state) => state.refreshToken);

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
        console.log('done')
        const validateEmail = EMAIL_REGEX.test(email);
        const validatePwd = !PWD_REGEX.test(pwd);
        if (!validateEmail || !validatePwd) {
            setErrMsg('Invalid Entries');
            return;
        }

        try {
            const response = await axios.post(`${API_ENDPOINT}/signin`, {
                "email": email.toLowerCase(),
                "password": pwd,
            });
            console.log(JSON.stringify(response?.data));
            const u = omit(['password','info'], response?.data?.user) as IUser;
            console.log(u);
            setUser(u);
            setAccessToken(response?.data?.accessToken);
            setRefreshToken(response?.data?.refreshToken);
            console.log("user ", user);
            console.log("at ", accessToken);
            console.log("rt ", refreshToken);

            setEmail('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            const error = err as AxiosError;
            console.log(error)
            if (error?.response) {
                //@ts-ignore
                setErrMsg(error.response?.data?.message);
            }
            else {
                setErrMsg('Log in failed');
            }
        }
    }

    if (success) {
        router.push('users/polish')
    }



    return (
        <div className={`grid grid--1x2 ${styles.pageNoScroll}`}>
            <div className={styles.signupLeft}>
                <div className={styles.stikyNavbar}>
                    <div>
                        <Link href="/">
                            <Image
                                className={styles.navBrand}
                                src="/assets/passLogo.svg"
                                alt=""
                                width={125}
                                height={57}
                            ></Image>
                        </Link>
                    </div>
                </div>
                <div className={styles.form}>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>Log In</h1>
                        <p>
                            not a member?{" "}
                            <span>
                                <Link href="/signup">Sign Up</Link>
                            </span>
                        </p>
                    </div>
                    <button type="button" className={styles.btnGoogle}>
                        Log in with Google
                    </button>
                    <OrLine />
                    <form onSubmit={handleSubmit} className={styles.formItself}>
                        <p
                            ref={errRef}
                            className={
                                errMsg ? styles.instructions
                                    : styles.hidden
                            }
                        >
                            {errMsg}
                        </p>
                        <div className={styles.inputContainer}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                            <input
                                required
                                type="email"
                                placeholder="Email"
                                ref={emailRef}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={() => setEmailFocus(true)}
                            />
                        </div>
                        <p
                            className={
                                emailFocus && email && !validEmail
                                    ? styles.instructions
                                    : styles.hidden
                            }
                        >
                            <FontAwesomeIcon icon={faInfoCircle} className={styles.pwdIcon} />
                            Please enter a valid E-mail
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
                                pwdFocus && pwd && !validPwd
                                    ? styles.instructions
                                    : styles.hidden
                            }>
                            <FontAwesomeIcon icon={faInfoCircle} className={styles.pwdIcon} />
                            minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special charachter
                        </p>

                        <div className={styles.forgotPasswordContainer}>
                            <p className={styles.forgotPassword} onClick={() => router.push('/users/forgot-password')}>Forgot password?</p>
                        </div>
                        <button
                            disabled={(!validEmail || !validPwd)}
                            className={styles.btnPrimary}
                            type='submit'
                        >
                            Log In
                        </button>
                    </form>
                </div>
            </div>
            <div className={styles.signupRight}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/assets/Signup-Image-1.5x.png"
                        alt=""
                        fill
                        className={styles.image}
                    />
                </div>
            </div>
        </div>
    );
};

export default LogInForm;
