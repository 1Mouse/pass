import { useRef, useState,useLayoutEffect } from "react";
import styles from "./skills.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import useAuthStore from "@/lib/zustand/stores/useAuthStore";
import useUserStore from "@/lib/zustand/stores/useUserStore";
import { InfinitySpin } from "react-loader-spinner";
import useHasMounted from "@/lib/hooks/useHasMounted";
import Error from "../common/Error";
import { toast } from 'react-toastify'

import { API_URL } from "@/lib/utils/urls";
import SKILL_OPTIONS from "@/lib/constants/skillOptions";


function Skills() {
    const hasMounted = useHasMounted();

    const router = useRouter();

    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const accessToken = useAuthStore(state => state.accessToken);
    const skills = useUserStore(state => state.skills);
    const setSkills = useUserStore(state => state.setSkills);

    const username = useAuthStore(state => state.user.username);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [errorCount, setErrorCount] = useState(0);
    const [successCount, setSuccessCount] = useState(0);

    const firstUpdate = useRef(true);
    const secondUpdate = useRef(true);
    const thirdUpdate = useRef(true);
    const forthUpdate = useRef(true);

    const fireSuccess = (toastedMsg: string) => toast.success(toastedMsg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const fireError = (toastedMsg: string) => toast.error(toastedMsg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    console.log("intial", successCount);
    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        if (secondUpdate.current) {
            secondUpdate.current = false;
            return;
        }
        if (thirdUpdate.current) {
            thirdUpdate.current = false;
            return;
        }
        if (forthUpdate.current) {
            forthUpdate.current = false;
            return;
        }
        fireSuccess('Skills Updated Successfully');
    }, [successCount])

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        if (secondUpdate.current) {
            secondUpdate.current = false;
            return;
        }
        if (thirdUpdate.current) {
            thirdUpdate.current = false;
            return;
        }
        if (forthUpdate.current) {
            forthUpdate.current = false;
            return;
        }
        fireError(error || "Something went wrong");
    }, [errorCount])

    const handleOptionClick = (option: string) => {
        setSelectedOptions((prevSelected) => {
            if (prevSelected.includes(option)) {
                return prevSelected.filter((selected) => selected !== option);
            } else {
                return [...prevSelected, option];
            }
        });
    };

    const handleSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setLoading(true);
        console.log(e);
        console.log(selectedOptions);
        console.log(accessToken);
        try {
            const response = await axios.put(`${API_URL}/users/skills`, {
                "skills": selectedOptions,
            },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                }
            );
            console.log(JSON.stringify(response?.data));
            // console.log(u);

            setSkills(response?.data?.info.skills);
            setLoading(false)
            setSuccessCount((prev) => prev + 1);
        } catch (err) {
            const error = err as AxiosError;
            console.log(error)
            setErrorCount((prev) => prev + 1);
            //@ts-ignore
            setError(error.response?.data?.message || "Something went wrong");
            // if (error?.response) {
            //     //@ts-ignore
            //     setErrMsg(error.response?.data?.message);
            // }
            // else {
            //     setErrMsg('Log in failed');
            // }
        }
    }

    if (!hasMounted) return null;

    // if (error) {
    //     return (
    //         <Error errMsg={error} />
    //     )
    // }

    // if (loading) {
    //     return (
    //         <InfinitySpin
    //             width='200'
    //             color="white"
    //         />
    //     );
    // }

    // if (success) {
    //     const redirectToProfile = `/users/${username}`;
    //     router.push(redirectToProfile);
    // }

        return (
            <><div className={styles.wrapper}>

                <div className={styles['skills']}>
                    {SKILL_OPTIONS.map((option) => (
                        <button
                            key={option}
                            className={`${styles['option']} ${selectedOptions.includes(option) ? styles['selectedOption'] : ''}`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                <button type="submit" className={styles.save} onClick={(e) => handleSave(e)}>Save</button>
            </div>
            </>
        );
    }

export default Skills;
