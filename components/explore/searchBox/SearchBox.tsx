import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";
import styles from './searchBox.module.scss'

import { useRouter } from "next/router";
import Select, { SelectInstance } from 'react-select';
import makeAnimated from 'react-select/animated';
import selectSkillOptions from "@/lib/constants/selectSkillOptions";
import axios from 'axios';
import { API_URL } from '@/lib/utils/urls'

const animatedComponents = makeAnimated();

export default function SearchBox({fetchCards}:any) {
    const router=useRouter();
    const selectRef = useRef<SelectInstance>(null);
    const [filterOptions, setFilterOptions] = useState<string[]>([]);
    const [searchInput, setSearchInput] = useState<string>("");
    // console.log('router in search box',router)
    console.log(filterOptions)
    console.log(searchInput)
    useEffect(()=>{
        const text=router.query.fullTextSearch;
        // TODO: query.skills could be a string[]
        // @ts-ignore
        let skills = router.query.skills?.split(', ').filter(element => element !== '');
        console.log(skills);
        setSearchInput(text?.toString() || '');
        setFilterOptions(skills||[]);
    },[]);

    const [toggle, setToggle] = useState(false);

    const handleChange = (options: any) => {
        //@ts-ignore
        const syncFilterValues = options.map((option) => (option.value));
        setFilterOptions(syncFilterValues);
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
                    onKeyDown={
                        (e)=>{
                        if(e.key==='Enter')
                        fetchCards(searchInput)
                    }
                }
                />
                <button onClick={()=>fetchCards(searchInput)} className={styles.searchButton}>
                    <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
                    search
                </button>
            </div>
            <div className={styles.showFilters}>
                <span className={`${styles.filterIcon}`} onClick={() => setToggle(!toggle)}>
                    <FontAwesomeIcon icon={faArrowDownWideShort} /> Filters</span>
            </div>
                <div className={`${styles.selectWrapper} ${!toggle? styles.hidden:''}`}>
                    <Select
                        instanceId={'skills'}
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
                                fontSize: '1.2rem',
                            }),
                            multiValue: (base) => ({
                                ...base,
                            }),
                        }}

                    />
                    <button onClick={()=>fetchCards(searchInput,filterOptions)} className={styles.applyFiltersbutton}>
                        apply filters
                    </button>
                </div>
        </>
    );
}

