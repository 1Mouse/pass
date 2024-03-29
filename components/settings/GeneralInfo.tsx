import { useRef, useState } from "react";
import styles from "./generalInfo.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
// import Line from "../common/Line";
import axios, { AxiosError } from "axios";
import { API_URL } from "@/lib/utils/urls";
// import { useRouter } from "next/router";
import useAuthStore from "@/lib/zustand/stores/useAuthStore";
import useUserStore from "@/lib/zustand/stores/useUserStore";
import useHasMounted from "@/lib/hooks/useHasMounted";
// import { toast } from 'react-toastify'
import {fireSuccess,fireError} from '@/lib/utils/toasts';
// import { InfinitySpin } from 'react-loader-spinner'

function GeneralInfo() {
    const hasMounted = useHasMounted();
    // const router = useRouter();
    const firstNameRef = useRef<HTMLInputElement>(null);

    const [firstName, setFirstName] = useUserStore(state => [state.firstName, state.setFirstName]);
    const [firstNameFocus, setFirstNameFocus] = useState(false);
    const [lastName, setLastName] = useUserStore(state => [state.lastName, state.setLastName]);
    const [lastNameFocus, setLastNameFocus] = useState(false);

    const [levelOfExperience, setLevelOfExperience] = useUserStore(state => [state.levelOfExperience, state.setLevelOfExperience]);

    const [bio, setBio] = useUserStore(state => [state.bio, state.setBio]);
    const [bioFocus, setBioFocus] = useState(false);

    const [loading, setLoading] = useState(false);
    // const [successCount, setSuccessCount] = useState(0);
    // const [errorCount, setErrorCount] = useState(0);
    // const [error, setError] = useState<string | null>(null);

    const accessToken = useAuthStore(state => state.accessToken);

    // const firstUpdate = useRef(true);
    // const secondUpdate = useRef(true);
    // const thirdUpdate = useRef(true);
    // const forthUpdate = useRef(true);

    // const fireSuccess = (toastedMsg: string) => toast.success(toastedMsg, {
    //     position: "top-right",
    //     autoClose: 2000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    // });

    // const fireError = (toastedMsg: string) => toast.error(toastedMsg, {
    //     position: "top-right",
    //     autoClose: 2000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    // });

    // console.log("intial", successCount);
    // useLayoutEffect(() => {
    //     if (firstUpdate.current) {
    //         firstUpdate.current = false;
    //         return;
    //     }
    //     if (secondUpdate.current) {
    //         secondUpdate.current = false;
    //         return;
    //     }
    //     if (thirdUpdate.current) {
    //         thirdUpdate.current = false;
    //         return;
    //     }
    //     if (forthUpdate.current) {
    //         forthUpdate.current = false;
    //         return;
    //     }
    //     fireSuccess('General Information updated successfully');
    // }, [successCount])

    // useLayoutEffect(() => {
    //     if (firstUpdate.current) {
    //         firstUpdate.current = false;
    //         return;
    //     }
    //     if (secondUpdate.current) {
    //         secondUpdate.current = false;
    //         return;
    //     }
    //     if (thirdUpdate.current) {
    //         thirdUpdate.current = false;
    //         return;
    //     }
    //     if (forthUpdate.current) {
    //         forthUpdate.current = false;
    //         return;
    //     }
    //     fireError(error || "Something went wrong");
    // }, [errorCount])


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e);
        setLoading(true);
        // console.log(accessToken);
        try {
            const response = await axios.put(`${API_URL}/users`, {
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
            fireSuccess('General info is updated successfully');
            // setSuccessCount((prev) => prev + 1);
        } catch (err) {
            setLoading(false);
            const error = err as AxiosError;
            console.log(error)
            //@ts-ignore
            if (error?.response) {
                //@ts-ignore
                fireError(error.response?.data?.message);
            }
            else {
                fireError('Something wrong happened');
            }
        }
    }

    if (!hasMounted) {
        return null;
    }

    // if (loading) {
    //     return (
    //         <InfinitySpin
    //             width='200'
    //             color="white"
    //         />
    //     );
    // }

    // if (success) {
    //     //make a timer for 2 seconds
    //     fireSuccess('General Information updated successfully');
    // }
    console.log(firstName);
    console.log(levelOfExperience)
    console.log(bio)
    console.log(accessToken);

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
                                <option value="architect">Architect</option>
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
                        disabled={(loading || !firstName || !lastName || !levelOfExperience || !bio)}
                        className={styles.next}
                        type='submit'
                    >
                        {loading? 'loading':'Save'}
                    </button>
                </form>
            </div>
            {/* <Toaster /> */}
        </>
    );
}


export default GeneralInfo;
