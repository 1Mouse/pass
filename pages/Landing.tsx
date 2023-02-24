import Link from 'next/link';
import styles from '../styles/landing.module.scss';
import Image from 'next/image'
import Navbarnew from '@/Components/common/NavbarNewUser'


export default function Landing() {
  return (
    <div className={styles.landingpage}>
    <Navbarnew />
    <div className={styles.main}>
      <div className={styles['left-side']}>
        <div className={styles.text}>
          <div>
        Practice mock interviews with FAANG engineers
        </div>
          <span className={styles.span}>
          Get better at algorithmic and systems design problems, and get
          detailed feedback on exactly what you need to work on.
        </span>
        <div>
        <button className={styles.getstarted}>Get started</button>
        </div>
        </div>
        
      </div>
      <div className={styles['right-side']}>
        <Image
          src="/LandingPage.png"
          alt="Interview Image"
          width={600}
          height={400}
        />
      </div>
    </div>
  </div>
  );
}









// import Link from 'next/link';
// import styles from '../styles/landing.module.scss';
// import Image from 'next/image'
// import Navbarnew from '@/Components/common/NavbarNewUser'


// export default function Landing() {
//   return (
//     <div className={styles.landingpage}>
//     <Navbarnew />
//     <div className={styles.main}>
//       <div className={styles['left-side']}>
//         <div className={styles.text}>
//           <div>Best</div> 
//           <div>Platform To interviews with</div>
//           <div>engineers</div>
//           <div>from Amazon, Google, Facebook,</div> 
//           <div>and other top companies.</div>
//           <span className={styles.span}>
//           Get better at algorithmic and systems design problems, and get
//           detailed feedback on exactly what you need to work on.
//         </span>
//         <div>
//         <button className={styles.getstarted}>Get started</button>
//         </div>
//         </div>
        
//       </div>
//       <div className={styles['right-side']}>
//         <Image
//           src="/LandingPage.png"
//           alt="Interview Image"
//           width={600}
//           height={400}
//         />
//       </div>
//     </div>
//   </div>
//   );
// }