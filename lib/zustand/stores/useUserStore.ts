import { create } from 'zustand';

import { devtools, persist } from 'zustand/middleware';

import IUserState from '@/lib/types/IUserState';


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
                    setFirstName: (firstName) => set(() => ({ firstName: firstName })),
                    setLastName: (lastName) => set(() => ({ lastName: lastName })),
                    setLevelOfExperience: (levelOfExperience) => set(() => ({ levelOfExperience: levelOfExperience })),
                    setBio: (bio) => set(() => ({ bio: bio })),
                    setSkills: (skills) => set(() => ({ skills: skills })),
                }
            ),
            {
                name: "user",
            }
        )
    )
)


export default useUserStore;