import { create } from 'zustand';

import { devtools, persist } from 'zustand/middleware';

import IUserState from '@/lib/types/IUserState';
import IInfo from '@/lib/types/IInfo'

const useUserStore = create<IUserState>()(
    devtools(
        persist(
            (set) => (
                {
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
                    timeslots: [],
                    setFirstName: (firstName) => set(() => ({ firstName: firstName })),
                    setLastName: (lastName) => set(() => ({ lastName: lastName })),
                    setLevelOfExperience: (levelOfExperience) => set(() => ({ levelOfExperience: levelOfExperience })),
                    setBio: (bio) => set(() => ({ bio: bio })),
                    setSkills: (skills) => set(() => ({ skills: skills })),

                    updateInfo: (info: IInfo) => set(() => ({ ...info })),
                }
            ),
            {
                name: "user",
            }
        )
    )
)


export default useUserStore;