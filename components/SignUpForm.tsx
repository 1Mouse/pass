import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import styles from "./signUpForm.module.scss";
import OrLine from "./common/OrLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faLock,
    faEyeSlash,
    faEye,
    faUser,
    faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import axios, { AxiosError } from 'axios';
import { API_URL } from "@/lib/utils/urls";
import { useRouter } from "next/router";

const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PWD_REGEX = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/;

const SignUpForm = () => {
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

    const [role, setRole] = useState('');

    const [loading, setLoading] = useState(false);
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
        console.log('done')
        const validateEmail = EMAIL_REGEX.test(email);
        const validatePwd = !PWD_REGEX.test(pwd);
        if (!validateEmail || !validatePwd) {
            console.log('here')
            setErrMsg('Invalid Entries');
            return;
        }

        try {
            setLoading(true);
            const response = await axios.post(`${API_URL}/signup`, {
                "email": email.toLowerCase(),
                "password": pwd,
                "role": role
            });
            console.log(JSON.stringify(response?.data));
            setEmail('');
            setPwd('');
            setLoading(false);
            setSuccess(true);
        } catch (err) {
            setLoading(false);
            const error = err as AxiosError;
            if (!error?.response) {
                setErrMsg('No Server Response');
            } else if (error.response?.status === 400) {
                setErrMsg('This email is already taken');
            } else {
                setErrMsg('Registeration Failed');
            }
        }
    }

    if (success) {
        router.push('users/email/confirmation/')
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
                        <h1 className={styles.title}>Sign Up</h1>
                        <p>
                            already a member?{" "}
                            <span>
                                <Link href="/login">Log In</Link>
                            </span>
                        </p>
                    </div>
                    {/* <button type="button" className={styles.btnGoogle}>
                        Sign up with Google
                    </button>
                    <OrLine /> */}
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
                        <select
                            required
                            title="Select role"
                            id="role"
                            name="role"
                            className={styles.select}
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option hidden disabled value="" className={styles.d}>
                                Let&apos;s select role:
                            </option>
                            <option value="interviewee">Interviewee</option>
                            <option value="interviewer">Interviewer</option>
                        </select>
                        <button
                            disabled={(!validEmail || !validPwd || (role === '') || loading)}
                            className={styles.btnPrimary}
                            type='submit'
                        >
                            {loading ? 'loading...' : 'Sign Up'}
                        </button>
                    </form>
                </div>
            </div>
            <div className={styles.signupRight}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/assets/signup-artwork.svg"
                        alt=""
                        fill
                        priority={true}
                        className={styles.image}
                    />
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;
