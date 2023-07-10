import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import axios from 'axios';
import styles from '@/styles/pages/polish.module.scss';
import Skills from '@/components/Skills';

export default function EmailConfirmatioin() {

    return (
        <>
            <Head>
                <title>Pass</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.bgWrapper}>
                <main className={`container ${styles.block}`}>
                    <Skills />
                </main>
            </div>
        </>
    )
}
