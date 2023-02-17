import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.scss'
import Navbar from '@/Components/common/navbar'
const inter = Inter({ subsets: ['latin'] })
import styles from '../styles/Polish.module.scss'

export default function Polish() {
  return (
    <>
    <div className={styles.polich_page}>

      <div className={styles.polish_head}>
         <Navbar></Navbar>
      </div>
<div className={styles.polish_contant}>

<div className={styles.successfullyActivated}>
<div>Your account has successfully activated</div>
</div>


<div className={styles.activeImage}>
  <img src="/group Signuo Done Image.png"  />

</div>



<div>
<div className={styles.polish_text}>let's polish your profile to stand out between your peers</div>

</div>


<button className={styles.polish_buttom}> Let's go</button>



</div>
</div>

    </>
  )
}