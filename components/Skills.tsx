import { useRef, useState } from "react";
import styles from "./skills.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import axios, { AxiosError } from "axios";
import config from "../config.json";
import { useRouter } from "next/router";
import useAuthStore from "../lib/zustand/stores/useAuthStore";
import useUserStore from "@/lib/zustand/stores/useUserStore";
import { InfinitySpin } from "react-loader-spinner";
import useHasMounted from "@/lib/hooks/useHasMounted";
import Error from "./common/Error";

const API_ENDPOINT = config.apiEndpoint;

const options = [
    "Frontend",
    "Backend",
    "IOS",
    "Android",
    "Data Science",
    "DevOps",
    "Flutter",
    "DSA",
    "Security",
    "AI",
    "Big Data",
    "System Design"
];

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
    const [success, setSuccess] = useState(false);

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
            const response = await axios.put(`${API_ENDPOINT}/users/skills`, {
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
            setSuccess(true);
        } catch (err) {
            const error = err as AxiosError;
            console.log(error)
            //@ts-ignore
            setError(error.response.data.message);
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
        const redirectToProfile = `/users/${username}`;
        router.push(redirectToProfile);
    }

    if (!success) {
        return (
            <><div className={styles.wrapper}>

                <div className={styles['skills']}>
                    {options.map((option) => (
                        <button
                            key={option}
                            className={`${styles['option']} ${selectedOptions.includes(option) ? styles['selectedOption'] : ''}`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                <button type="submit" className={styles.finish} onClick={(e) => handleSave(e)}>Finish</button>
            </div>
            </>
        );
    }
    return null;
}

export default Skills;
