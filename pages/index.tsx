import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import NavbarList from "../Components/NavbarList";
import Landing from "../Components/Landing";
import SignUpDone from "../Components/SignUpDone2";
import { Inter } from "@next/font/google";
import ProfileButtons from "@/Components/ProfileButtons";
import ResetPassword1 from "../Components/ResetPassword1";
import ResetPassword2 from "../Components/ResetPassword2";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Pass</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ResetPassword2 />
      </main>
    </>
  );
}
