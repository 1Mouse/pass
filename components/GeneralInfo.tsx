import { useRef, useState } from "react";
import styles from "./generalInfo.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Line from "./common/Line";
import axios,{AxiosError} from "axios";
import config from "../config.json";
import { useRouter } from "next/router";

const API_ENDPOINT = config.apiEndpoint;

function GeneralInfo() {
    const router = useRouter();
    const firstNameRef = useRef<HTMLInputElement>(null);

    const [firstName, setFirstName] = useState("");
    const [firstNameFocus, setFirstNameFocus] = useState(false);
    const [lastName, setLastName] = useState("");
    const [lastNameFocus, setLastNameFocus] = useState(false);

    const [levelOfExperience, setLevelOfExperience] = useState('');

    const [bio, setBio] = useState('');
    const [bioFocus, setBioFocus] = useState(false);

    // const validateName = (name: string): boolean => {
    //     const regex = /^[a-zA-Z]+$/;
    //     return regex.test(name);
    // };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    //     try {
    //         const response = await axios.post(`${API_ENDPOINT}/signin`, {
    //             "email": email.toLowerCase(),
    //             "password": pwd,
    //         });
    //         // console.log(JSON.stringify(response?.data));
    //         const u = omit(['password'], response?.data?.user) as IUser;
    //         // console.log(u);
    //         setUser(u);
    //         setAccessToken(response?.data?.accessToken);
    //         setRefreshToken(response?.data?.refreshToken);
    //         // console.log("user ",user);
    //         // console.log("at ",accessToken);
    //         // console.log("rt ", refreshToken);

    //         setEmail('');
    //         setPwd('');
    //         setSuccess(true);
    //     } catch (err) {
    //         const error = err as AxiosError;
    //         if (!error?.response) {
    //             setErrMsg('No Server Response');
    //         } else if (error.response?.status === 400) {
    //             setErrMsg('wrong email or Password');
    //         } else {
    //             setErrMsg('Log in failed');
    //         }
    //     }
    // }

    // if (success) {
    //     router.push('users/polish')
    // }
    //     console.log('done');
    };

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
                                <option value="middle">Middle</option>
                                <option value="senior">Senior</option>
                                <option value="techLead">Tech Lead</option>
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

export default GeneralInfo;
