import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import NavbarList from "../Components/NavbarList";
import { Inter } from "@next/font/google";

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
        <NavbarList />
      </main>
    </>
  );
}
