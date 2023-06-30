import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

import IUserState from "@/lib/types/IUserState";
import IInfo from "@/lib/types/IInfo";

const initialTimeslots = [
    {
        day: 0,
        hours:[]
    },
    {
        day: 1,
        hours:[]
    },
    {
        day: 2,
        hours:[]
    },
    {
        day: 3,
        hours:[]
    },
    {
        day: 4,
        hours:[]
    },
    {
        day: 5,
        hours:[]
    },
    {
        day: 6,
        hours:[]
    },
]
const useUserStore = create<IUserState>()(
    devtools(
        persist(
            (set) => ({
                firstName: "",
                lastName: "",
                levelOfExperience: "",
                bio: "",
                skills: [],
                price: 0,
                priceable: false,
                interviewsHad: [],
                interviewsMade: [],
                socials: {
                    linkedin: "",
                    github: "",
                    twitter: "",
                },
                timeslots: initialTimeslots,
                setFirstName: (firstName) => set(() => ({ firstName: firstName })),
                setLastName: (lastName) => set(() => ({ lastName: lastName })),
                setLevelOfExperience: (levelOfExperience) =>
                    set(() => ({ levelOfExperience: levelOfExperience })),
                setBio: (bio) => set(() => ({ bio: bio })),
                setSkills: (skills) => set(() => ({ skills: skills })),
                setPrice: (price) => set(() => ({ price: price })),
                setPricable: (pricable) => set(() => ({ priceable: pricable })),
                setSocials:(socials)=> set(()=>({socials:socials})),
                setTimeslots:(timeslots)=> set(()=>({timeslots:timeslots})),
                updateInfo: (info: IInfo) => set(() => ({ ...info })),
            }),
            {
                name: "user",
            }
        )
    )
);

export default useUserStore;
