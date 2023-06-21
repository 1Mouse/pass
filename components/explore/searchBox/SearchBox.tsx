import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from './searchBox.module.scss'

import Select, { SelectInstance } from 'react-select';
import makeAnimated from 'react-select/animated';
import selectSkillOptions from "@/lib/constants/selectSkillOptions";
import axios from 'axios';
import { API_URL } from '@/lib/utils/urls'

const animatedComponents = makeAnimated();

export default function SearchBox() {
    const selectRef = useRef<SelectInstance>(null);
    const [filterOptions, setFilterOptions] = useState<string[]>([]);
    const [searchInput, setSearchInput] = useState<string>("");

    const handleChange = (options: any) => {
        //@ts-ignore
        const syncFilterValues = options.map((option) => (option.value));
        setFilterOptions(syncFilterValues);
    }

    const handleSearch = async () => {
        console.log(searchInput);
        console.log(filterOptions);
        // try {
        //     const response = await axios.put(`${API_URL}/users/search?fullTextSearch=Netflix&info.skills=c++,dsa`, {
        //         "firstName": firstName,
        //         "lastName": lastName,
        //         "levelOfExperience": levelOfExperience,
        //         "bio": bio
        //     }
        //     );
        //     console.log(JSON.stringify(response?.data));



        // } catch (err) {
        //     // const error = err as AxiosError;
        //     // console.log(error)
        //     // setErrorCount((prev) => prev + 1);
        //     // //@ts-ignore
        //     // setError(error.response?.data?.message || "Something went wrong");
        //     // // if (error?.response) {
        //     // //     //@ts-ignore
        //     // //     setErrMsg(error.response?.data?.message);
        //     // // }
        //     // // else {
        //     // //     setErrMsg('Log in failed');
        //     // // }
        // }
    }

    return (
        <>
            <div className={styles.inputGroup}>
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type="text"
                    className={styles.input}
                    placeholder="Enter a person's name or a company's..."
                />
                <button onClick={handleSearch} className={styles.searchButton}>
                    <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
                    search
                </button>
            </div>

            <div className={styles.selectWrapper}>
                <Select
                    onChange={handleChange}
                    ref={selectRef}
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={selectSkillOptions}
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? 'dodgerblue' : 'dimgray',
                            borderWidth: '3px',
                            borderRadius: '10px',
                        }),
                        multiValueLabel: (base) => ({
                            ...base,
                            backgroundColor: '#313638',
                            color: '#E8E9EB',
                        }),
                        multiValue: (base) => ({
                            ...base,
                        }),
                    }}

                />
                <button onClick={handleSearch} className={styles.applyFiltersbutton}>
                    apply filters
                </button>
            </div>

        </>
    );
}

