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
                    imageUrl: "",
                    imageKey: "",
                },
                accessToken: "",
                refreshToken: "",
                setAccessToken: (accessToken) =>
                    set(() => ({ accessToken: accessToken })),
                setRefreshToken: (refreshToken) =>
                    set(() => ({ refreshToken: refreshToken })),
                setUser: (user) => set(() => ({ user: user })),
                deleteImage: async() =>{
                    try {
                        const response = await axios.delete(`${API_URL}/users/image`,
                            {
                                headers: {
                                    Authorization: `Bearer ${get().accessToken}`,
                                }
                            }
                        );
                        console.log(JSON.stringify(response?.data));
                        set(() => ({
                            user: {
                                ...get().user,
                                imageUrl: "",
                                imageKey: "",
                            },
                        }))
                    } catch (err) {
                        const error = err as AxiosError;
                        console.log(error)
                        //@ts-ignore
                        // setError(error.response.data.message || "Something went wrong");
                        // if (error?.response) {
                        //     //@ts-ignore
                        //     setErrMsg(error.response?.data?.message);
                        // }
                        // else {
                        //     setErrMsg('Log in failed');
                        // }
                    }
                    
                },
                updateAuth: (user:IUser,accessToken:string,refreshToken:string,imageUrl:string,imageKey:string) => set(() => ({ user: {...user,imageUrl,imageKey},accessToken:accessToken,refreshToken:refreshToken })),              
            }),
            {
                name: "auth",
            }
        )
    )
);

export default useAuthStore;
