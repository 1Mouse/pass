import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.scss'
import NavbarNewUser from '@/Components/common/NavbarNewUser'
import NavButton from '@/Components/common/button'
import styles from '../styles/landing.module.scss'


















const inter = Inter({ subsets: ['latin'] })

export default function Landing() {
  return (
    <>
<div className={styles.landing_page}>
{/* logo+navbar */}
<div className={styles.landing_head}>
    <NavbarNewUser></NavbarNewUser>
</div>

    {/* right side */}
    <div className={styles.langing_page_right}>
      <img src='LandingPage.png'></img>
    </div>

    {/* left side */}
    <div className={styles.langing_page_left}>
           <div className={styles.landing_page_left_contant}>
            <div className={styles.landing_page_text}>
             <div>Best</div> 
               <div> PlatForm To interviews with</div>
                <div>engineers </div>
               <div> from Amazon, Google, Facebook,</div> 
               <div>and other top companies.</div>
                
                <div className={styles.algorithmic}>Get better at algorithmic and systems design problems, and get detailed feedback on exactly what you need to work on.</div>
                
                <div className= {styles.GetStarted} >    <NavButton href='' text="Get started" /></div>
                </div>
              
           </div> 
    </div>
            

</div>
    </>
  )
}
