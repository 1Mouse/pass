import { useRef, useState, useEffect } from "react";
import styles from "./generalInfo.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Line from "./common/Line";
import axios, { AxiosError, AxiosResponse } from "axios";
import config from "../config.json";
import { useRouter } from "next/router";
import useAuthStore from "../lib/zustand/stores/useAuthStore";
import useUserStore from "@/lib/zustand/stores/useUserStore";
import useHasMounted from "@/lib/hooks/useHasMounted";

import { InfinitySpin } from 'react-loader-spinner'
import Error from "./common/Error";

const API_ENDPOINT = config.apiEndpoint;

function GeneralInfo() {
    const hasMounted = useHasMounted();
    const router = useRouter();
    const firstNameRef = useRef<HTMLInputElement>(null);

    const [firstName, setFirstName] = useUserStore(state => [state.firstName, state.setFirstName]);
    const [firstNameFocus, setFirstNameFocus] = useState(false);
    const [lastName, setLastName] = useUserStore(state => [state.lastName, state.setLastName]);
    const [lastNameFocus, setLastNameFocus] = useState(false);

    const [levelOfExperience, setLevelOfExperience] = useUserStore(state => [state.levelOfExperience, state.setLevelOfExperience]);

    const [bio, setBio] = useUserStore(state => [state.bio, state.setBio]);
    const [bioFocus, setBioFocus] = useState(false);

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const accessToken = useAuthStore(state => state.accessToken);
    // const {setFirstName,setLastName,setLevelOfExperience,setBio} = useUserStore(state => ({
    //     setFirstName: state.setFirstName,
    //     setLastName: state.setLastName,
    //     setLevelOfExperience: state.setLevelOfExperience,
    //     setBio: state.setBio
    // }));

    // const validateName = (name: string): boolean => {
    //     const regex = /^[a-zA-Z]+$/;
    //     return regex.test(name);
    // };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e);
        setLoading(true);
        // console.log(accessToken);
        try {
            const response = await axios.put(`${API_ENDPOINT}/users`, {
                "firstName": firstName,
                "lastName": lastName,
                "levelOfExperience": levelOfExperience,
                "bio": bio
            },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                }
            );
            console.log(JSON.stringify(response?.data));

            setFirstName(response?.data?.info.firstName);
            setLastName(response?.data?.info.lastName);
            setLevelOfExperience(response?.data?.info.levelOfExperience);
            setBio(response?.data?.info.bio)
            setLoading(false)

            setSuccess(true);
        } catch (err) {
            const error = err as AxiosError;
            console.log(error)
            //@ts-ignore
            setError(error.response.data.message||"Something went wrong");
            // if (error?.response) {
            //     //@ts-ignore
            //     setErrMsg(error.response?.data?.message);
            // }
            // else {
            //     setErrMsg('Log in failed');
            // }
        }
    }

    if (!hasMounted) {
        return null;
    }

    if (error) {
        return (
            <Error errMsg={error} />
        )
    }

    if (loading) {
        return (
            <InfinitySpin
                width='200'
                color="white"
            />
        );
    }

    if (success) {
        router.push('/users/polish-skills');
    }
    console.log(firstName);
    console.log(levelOfExperience)
    console.log(bio)
    console.log(accessToken);

    if (!success) {
        return (
            <>
                <div className={styles.generalInfo}>
                    <h2 className={styles.heading}>
                        General Information
                    </h2>
                    {/* <Line/> */}
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={`${styles.grid} ${styles.customGrid}`}>
                            <div className={styles.left}>


                                <div className={styles.inputContainer}>
                                    {/* <label 
                                    // className={styles.visuallyHidden} htmlFor="firstName"
                                    aria-label='haha'
                                    >First Name</label> */}
                                    <input
                                        required
                                        name="firstName"
                                        type="name"
                                        placeholder="First name"
                                        ref={firstNameRef}
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        onFocus={() => setFirstNameFocus(true)}
                                        aria-live="polite"
                                        aria-label='first name'
                                    />
                                    <p
                                        className={
                                            firstNameFocus && !firstName
                                                ? styles.instructions
                                                : styles.hidden
                                        }
                                    >
                                        <FontAwesomeIcon icon={faInfoCircle} className={styles.pwdIcon} />
                                        Please enter your first name
                                    </p>
                                </div>
                                {/* <label htmlFor="lastName">Last Name</label> */}
                                <div className={styles.inputContainer}>
                                    <input
                                        required
                                        name="lastName"
                                        type="name"
                                        placeholder="Last name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        onFocus={() => setLastNameFocus(true)}
                                        aria-placeholder="Close"
                                    />
                                    <p
                                        className={
                                            lastNameFocus && !lastName
                                                ? styles.instructions
                                                : styles.hidden
                                        }
                                    >
                                        <FontAwesomeIcon icon={faInfoCircle} className={styles.pwdIcon} />
                                        Please enter your last name
                                    </p>
                                </div>


                                <select
                                    required
                                    title="--Level Of Experience--"
                                    name="levelOfExperience"
                                    className={styles.select}
                                    value={levelOfExperience}
                                    onChange={(e) => setLevelOfExperience(e.target.value)}
                                >
                                    <option hidden disabled value="" className={styles.d}>
                                        --Level Of Experience--
                                    </option>
                                    <option value="junior">Junior</option>
                                    <option value="mid-level">Middle</option>
                                    <option value="senior">Senior</option>
                                    <option value="tech-lead">Tech Lead</option>
                                    <option value="staff">Staff</option>
                                    <option value="principal ">principal</option>
                                </select>
                            </div>

                            <div className={styles.right}>
                                <textarea
                                    name='bio'
                                    placeholder='Write about yourself'
                                    className={styles.textArea}
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    onFocus={() => setBioFocus(true)}
                                    // cols={30}
                                    // rows={10}
                                    required
                                >
                                </textarea>
                                <p
                                    className={
                                        bioFocus && !bio
                                            ? styles.instructions
                                            : styles.hidden
                                    }
                                >
                                    <FontAwesomeIcon icon={faInfoCircle} className={styles.pwdIcon} />
                                    Please write about yourself
                                </p>
                            </div>
                        </div>

                        <button
                            disabled={(!firstName || !lastName || !levelOfExperience || !bio)}
                            className={styles.next}
                            type='submit'
                        >
                            Next
                        </button>
                    </form>
                </div>
            </>
        );
    }
    return null;
}

export default GeneralInfo;
