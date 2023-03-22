import {create} from 'zustand';

import { devtools, persist } from 'zustand/middleware';

interface UserState {
    _id: string;
    username: string;
    email: string;
    password: string;
    confirmed: boolean;
    active: boolean;
    role: string;
    firstName: string;
    lastName: string;
    bio: string;
    price: number;
    priceable: boolean;
    skills: any;
    socials: {
        linkedin: string;
        github: string;
        twitter: string;
    };
    timeslots: {
        day: number;
        hours: any;
    };
    // setId: (id: string) => void;
    // setUsername: (username: string) => void;
    // setEmail: (email: string) => void;
    // setPassword: (password: string) => void;
    // setConfirmed: (confirmed: boolean) => void;
    // setActive: (active: boolean) => void;
    // setRole: (role: "interviewer" | "interviewee") => void;
    // setFirstName: (firstName: string) => void;
    // setLastName: (lastName: string) => void;
    // setBio: (bio: string) => void;
    // setPrice: (price: number) => void;
    // setPriceable: (priceable: boolean) => void;
    // setSkills: (skills: string[]) => void;
    // setSocials: (socials: {
    //     linkedin?: string;
    //     github?: string;
    //     twitter?: string;
    // }) => void;
    // setTimeslots: (timeslots: {
    //     day: number;
    //     hours: string[];
    // }) => void;
}

const userStore = () => ({
    _id: "",
    username: "",
    email: "",
    password: "",
    confirmed: false,
    active: false,
    role: "interviewer",
    firstName: "",  
    lastName: "",
    bio: "",
    price: 0,
    priceable: false,
    skills: [],
    socials: {
        linkedin: "",
        github: "",
        twitter: "",
    },
    timeslots: {    
        day: 0,
        hours: [],
    },  
})

const useUserStore = create<UserState,any>(
    devtools(
        persist(userStore, {
            name: "user",
        })
    )
);


export default useUserStore;