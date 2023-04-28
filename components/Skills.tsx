import { useRef, useState } from "react";
import styles from "./skills.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import axios, { AxiosError } from "axios";
import config from "../config.json";
import { useRouter } from "next/router";

const API_ENDPOINT = config.apiEndpoint;

const options = [
    "Front-End",
    "Back-End",
    "IOS",
    "Android",
    "Data Science",
    "DevOps",
    "Flutter",
    "Linux",
    "Security",
    "AI",
    "Big Data",
    "Unit testing"
];

function Skills() {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleOptionClick = (option: string) => {
        setSelectedOptions((prevSelected) => {
            if (prevSelected.includes(option)) {
                return prevSelected.filter((selected) => selected !== option);
            } else {
                return [...prevSelected, option];
            }
        });
    };

    const handleSave = () => {
        console.log(selectedOptions);
    }


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
                <button className={styles.finish} onClick={handleSave}>Save</button>
        </div>
        </>
    );

}

export default Skills;
