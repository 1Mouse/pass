import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.scss'
import Navbar from '@/Components/common/navbar'
import styles from '../styles/ThankYou.module.scss'


const inter = Inter({ subsets: ['latin'] })

export default function ThankYOu() {
  return (
    <>

<Navbar></Navbar>


<div className={styles.LOGO}><img src="/LOGO (1).png" alt="" /></div>


<div className={styles.thankYouText}>
<div className={styles.ThankYouText}>Thank you! Please check your email.</div>
<div className={styles.CheckEmailText}>Please check your email, and follow the instructions to activate your PASS.IO account and book your first interview. See you soon!</div>

</div>





    </>
  )
}