import Link from 'next/link';
import styles from '../styles/landing.module.scss';
import Image from 'next/image'
export default function Navbar() {
  return (
    <>
    <nav className={styles.navbar}>
      <div className={styles.logo}><Image
    src="/Frame Logo.png"
    alt="Interview Image"
    width={124.71}
    height={56.73}
  /></div>
      <ul className={styles['nav-links']}>
        <li>
          <Link href="/">
            About
          </Link>
        </li>
        <li>
          <Link href="/about">
            Pricing
          </Link>
        </li>
        <li>
          <Link href="/services">
          Testimonials
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/signup">
            log in
          </Link>
        </li>
        <li>
          <Link href="/login">
            join
          </Link>
        </li>
      </ul>
    </nav>

<div className={styles.main}>
<div className={styles['left-side']}>
  <h1>
  <div>Best</div> 
  <div>PlatForm To interviews with</div>
  <div>engineers</div>
  <div> from Amazon, Google, Facebook,</div> 
  <div>and other top companies.</div>
  </h1>
  <p>
    Get better at algorithmic and systems design problems, and get
    detailed feedback on exactly what you need to work on.
  </p>
  <button>Get started</button>
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
</>
  );
}





















// import React from 'react';
// import styles from '../styles/landing.module.scss';
// import Image from 'next/image'
// function Landing() {
//   return (
//     <div>
//       <div className={styles.navbar}>
//         <div className={styles.navbarLogo}><img src="/Frame Logo.png"  /></div>
//         <ul className={styles.navbarLinks}>
//           <a href='./about' className={styles.navbarLink}>About</a>
//           <a href='./pricing' className={styles.navbarLink}>Pricing</a>
//           <a href='./testimonials' className={styles.navbarLink}>Testimonials</a>
//           <a href='./contact' className={styles.navbarLink}>Contact</a>
//           <a href='./login' className={styles.navbarLink}>Log in</a>
//           <a href='./joinnow' className={styles.navbarLink}>Join now</a>

//         </ul>
//       </div>

//       <div className={styles.content}>
//         <div className={styles.text}>
//           <h2 className={styles.heading}>
//             <div>Best</div> 
//                <div> PlatForm To interviews with</div>
//                 <div>engineers </div>
//                <div> from Amazon, Google, Facebook,</div> 
//                <div>and other top companies.</div>
//           </h2>
//           <p className={styles.paragraph}>Get better at algorithmic and systems design problems, and get detailed feedback on exactly what you need to work on.</p>
//           <button className={styles.button}>Get started</button>
//         </div>
//         <div className={styles.image}>
//           <img src="LandingPage.png"  />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Landing;
