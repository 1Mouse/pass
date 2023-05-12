import React from "react";
import Image from "next/image";
import styles from "./settings.module.scss";
import GeneralInfo from './settings/GeneralInfo'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Line from '@/components/common/Line'
import TransparentLine from './common/TransparentLine';
import { API_URL } from '@/lib/utils/urls';
import axios, { AxiosError } from 'axios';
import useAuthStore from "@/lib/zustand/stores/useAuthStore";
import useUserStore from "@/lib/zustand/stores/useUserStore";
import useHasMounted from "@/lib/hooks/useHasMounted";
import omit from "@/lib/utils/omit";
import IUser from "@/lib/types/IUser";

const fullName = "John Doe";
const userName = "johndoe123";
const role = "Developer";
const rating = 4;
// const price =30;
const levelOfExperience = "Intermediate";
const skills = ["JavaScript", "React", "CSS", "HTML"];
const bio = "We are alwayes ready to face any challenging projects.";



const Settings: React.FC = () => {
    const hasMounted = useHasMounted();

    const [accessToken, deleteImage, updateAuth] = useAuthStore(state => [state.accessToken, state.deleteImage, state.updateAuth]);
    const imageUrl = useAuthStore(state => state.user.imageUrl);

    const image = (imageUrl && imageUrl !== '') ? imageUrl : '/assets/default_profile_photo.svg';

    console.log("final", image);
    console.log("state", imageUrl);

    if (!hasMounted) return null;

    const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const formData = new FormData();
        console.log(e.target.files[0]);
        formData.append("image", e.target.files[0]);
        // setLoading(true);
        // console.log(accessToken);
        console.log(formData);
        try {
            const response = await axios.post(`${API_URL}/users/image`, formData,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                }
            );
            console.log(JSON.stringify(response?.data));
            const u = omit(['password', 'info'], response?.data?.user) as IUser;
            updateAuth(u, response?.data?.accessToken, response?.data?.refreshToken,response?.data?.user?.imageUrl,response?.data?.user?.imageKey);
            // setFirstName(response?.data?.info.firstName);
            // setLastName(response?.data?.info.lastName);
            // setLevelOfExperience(response?.data?.info.levelOfExperience);
            // setBio(response?.data?.info.bio)
            // setLoading(false)

            // setSuccess(true);
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
    }

    return (
        <div className={styles.contentBox}>
            <h1 className={styles.mainHeading}>Settings</h1>
            <h2 className={styles.heading}>Edit photo</h2>
            <section className={styles.photoSection}>
                <div className={styles.imageContainer}>
                    <Image
                        src={image}
                        alt=""
                        width={200}
                        height={200}
                    // className={styles.image}
                    />
                </div>
                <div className={styles.actions}>
                    <input type="file" id="upload" hidden
                        onChange={(e) => uploadImage(e)}
                    />
                    <label
                        htmlFor="upload"
                        className={styles.upload

                        }>Upload</label>

                    <button
                        className={styles.delete}
                        onClick={deleteImage}
                    >
                        Delete
                    </button>
                </div>
            </section>
            <TransparentLine />
            <GeneralInfo />
            <TransparentLine />


        </div>
    );
};

export default Settings;
