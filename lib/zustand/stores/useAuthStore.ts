import { create } from 'zustand';

import { devtools, persist } from 'zustand/middleware';

import IUser from '@/lib/types/IUser';
import IAuthState from '@/lib/types/IAuthState';


const useAuthStore = create<IAuthState>()(
    devtools(
        persist(
            (set) => (
                {
                    user: {
                        _id: "",
                        email: "",
                        username: "",
                        confirmed: false,
                        active: false,
                        role: ""
                    },
                    accessToken: "",
                    refreshToken: "",
                    setAccessToken: (accessToken) => set(() => ({ accessToken: accessToken })),
                    setRefreshToken: (refreshToken) => set(() => ({ refreshToken: refreshToken })),
                    setUser: (user) => set(() => ({ user: user })),
                }
            ),
            {
                name: "auth",
            }
        )
    )
)


export default useAuthStore;