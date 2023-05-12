import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { useState } from "react";
// import styles from "@/styles/pages/pleaseConfirmEmail.module.scss";
import styles from "@/styles/pages/profile.module.scss"

import axios, { AxiosError } from "axios";
import { API_URL } from "@/lib/utils/urls";

import {
    InferGetServerSidePropsType,
    GetServerSideProps,
    GetServerSidePropsContext,
} from "next";
import { ParsedUrlQuery } from "querystring";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSquareCheck,
    faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";

import IUser from '@/lib/types/IUser';
import ProfileContent from "@/components/ProfileContent";
import ProfilePic from "@/components/ProfilePic";


type Props = {
    userData?: IUser|null;
};
interface IParams extends ParsedUrlQuery {
    username: string;
}

export default function Profile(
    props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
    const router = useRouter();
    const [msg, setMsg] = useState<string>("");
    // console.log('router here', router);
    // console.log('context here', props.first);

    console.log(props.userData);

    return (
        <>
            <Head>
                <title>Pass</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <Navbar />
            <div className={styles.bgWrapper}>
                <main className={`container ${styles.block}`}>
                    <ProfileContent/>
            </main>
            </div>
        </>
    );
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
    const { username } = ctx.params as IParams;
    let userData;
    let errorMsg:string|null=null;

    try {
        const response = await axios.get(
            `${API_URL}/users/${username}`
        );
        console.log(JSON.stringify(response?.data));
        userData = response?.data as IUser;
    } catch (err) {
        const e=err as AxiosError;
        console.log(e);
        // errMsg=(e.response)?e.response?.data?.message:e.message;
    }
    return {
        props: {
            userData: userData||null,
        },
    };
};
