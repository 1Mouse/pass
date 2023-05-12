import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";
import axios,{AxiosError} from "axios";
import { API_URL } from "@/lib/utils/urls";
import IUser from "@/lib/types/IUser";
import IAuthState from "@/lib/types/IAuthState";

const useAuthStore = create<IAuthState>()(
    devtools(
        persist(
            (set, get) => ({
                user: {
                    _id: "",
                    email: "",
                    username: "",
                    confirmed: false,
                    active: false,
                    role: "",
                    imageUrl: "/assets/default_profile_photo.svg",
                    imageKey: "",
                },
                accessToken: "",
                refreshToken: "",
                setAccessToken: (accessToken) =>
                    set(() => ({ accessToken: accessToken })),
                setRefreshToken: (refreshToken) =>
                    set(() => ({ refreshToken: refreshToken })),
                setUser: (user) => set(() => ({ user: user })),
                updateAuth: (user:IUser,accessToken:string,refreshToken:string,imageUrl:string,imageKey:string) => set(() => ({ user: {...user,imageUrl,imageKey},accessToken:accessToken,refreshToken:refreshToken })),              
            }),
            {
                name: "auth",
            }
        )
    )
);

export default useAuthStore;
