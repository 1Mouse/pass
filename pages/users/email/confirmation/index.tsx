import Head from 'next/head'
import styles from '@/styles/pages/pleaseConfirmEmail.module.scss';
import Image from 'next/image';
import Navbar from '@/components/Navbar';



export default function Thankyou() {
    return (
        <>
            <Head>
                <title>Pass</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Navbar />
                <section className={styles.block}>
                    <div className={`container ${styles.center}`}>
                        <div className={styles.imageContainer}>
                            <Image className={styles.image} src="/assets/magnifier.svg" alt="pass logo" fill />
                        </div>
                            <p className={styles.text}>Thank you! Please confirm your email to activate your account</p>
                    </div>
                </section>
            </main>
        </>
    );
}