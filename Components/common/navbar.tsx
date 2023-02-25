import styles from '../../styles/navbarNewUser.module.scss'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbarnew = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/FrameLogo.svg" alt="Interview Image" width={124.71} height={56.73} />
      </div>
      <button className={styles['menu-toggle']} onClick={toggleNav}>
        <Image src="/icon-park-outline_drop-down-list.svg" alt="Menu" width={20} height={20} />
      </button>
      <ul className={`${styles['nav-links']} ${navOpen ? styles['nav-links-open'] : ''}`}>
        <li>
          <Link href="/about">
            <span className={styles['nav-link']} onClick={toggleNav}>About</span>
          </Link>
        </li>
        <hr className={styles.linebetween}></hr>
        <li>
          <Link href="/pricing">
            <span className={styles['nav-link']} onClick={toggleNav}>Pricing</span>
          </Link>
        </li>
        <hr className={styles.linebetween}></hr>

        <li>
          <Link href="/testimonials">
            <span className={styles['nav-link']} onClick={toggleNav}>Testimonials</span>
          </Link>
        </li>
        <hr className={styles.linebetween}></hr>

        <li>
          <Link href="/contact">
            <span className={styles['nav-link']} onClick={toggleNav}>Contact</span>
          </Link>
        </li>
        <hr className={styles.linebetween}></hr>

        <li>
          <Link href="/login">
            <span className={styles['nav-link']} onClick={toggleNav}>Log In</span>
          </Link>
        </li>
        <hr className={styles.linebetween}></hr>

        <li>
          <Link href="/joinnow">
            <span className={`${styles['nav-link']} ${styles['nav-link-unique']}`} onClick={toggleNav}>Join Now</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbarnew;













// import styles from '../../styles/navbar.module.scss'
// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import SearchBox from './search'

// const Navbarfirst = () => {
//   const [navOpen, setNavOpen] = useState(false);

//   const toggleNav = () => {
//     setNavOpen(!navOpen);
//   };

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.logo}>
//         <Image src="/FrameLogo.png" alt="Interview Image" width={124.71} height={56.73} />
//       </div>
//       <button className={styles['menu-toggle']} onClick={toggleNav}>
//         <Image src="/Hamburger.png" alt="Menu" width={20} height={20} />
//       </button>
//       <ul className={`${styles['nav-links']} ${navOpen ? styles['nav-links-open'] : ''}`}>
//                      <li>
//                  <Link href="/" passHref>
//                    watch interview
//                  </Link>
//                </li>
//                <li>
//                  <Link href="/about" passHref>
//                    Brawse
//                  </Link>
//                </li>
//                <li>
//                 <Link href="" passHref>
//                  <SearchBox/>
//                  </Link>
//                </li>
//                <li>
                
//                  <Image src="/Line1.png" alt="Logo" width={1}height={32} />
                
//                </li>
//                <li>
//                  <Link href="/contact" passHref>
//                  <Image src="/user.png" alt="Logo" width={32}height={32} />
//                  </Link>
//                </li>
//                <li>
//                  <Link href="/contact" passHref>
//                  <Image src="/icon-park-outline_drop-down-list.png" alt="Logo" width={32}height={32} />
//                  </Link>
//                </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbarfirst;






































// import styles from '../../styles/navbar.module.scss'
// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import SearchBox from './search'

// const Navbarfirst = () => {
//   const [navOpen, setNavOpen] = useState(false);

//   const toggleNav = () => {
//     setNavOpen(!navOpen);
//   };

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.logo}>
//         <Image src="/FrameLogo.png" alt="Interview Image" width={124.71} height={56.73} />
//       </div>
//       <button className={styles['menu-toggle']} onClick={toggleNav}>
//         <Image src="/Hamburger.png" alt="Menu" width={20} height={20} />
//       </button>
//       <ul className={`${styles['nav-links']} ${navOpen ? styles['nav-links-open'] : ''}`}>
//                      <li>
//                  <Link href="/" passHref>
//                    watch interview
//                  </Link>
//                </li>
//                <li>
//                  <Link href="/about" passHref>
//                    Brawse
//                  </Link>
//                </li>
//                <li>
//                 <Link href="" passHref>
//                  <SearchBox/>
//                  </Link>
//                </li>
//                <li>
                
//                  <Image src="/Line1.png" alt="Logo" width={1}height={32} />
                
//                </li>
//                <li>
//                  <Link href="/contact" passHref>
//                  <Image src="/user.png" alt="Logo" width={32}height={32} />
//                  </Link>
//                </li>
//                <li>
//                  <Link href="/contact" passHref>
//                  <Image src="/icon-park-outline_drop-down-list.png" alt="Logo" width={32}height={32} />
//                  </Link>
//                </li>
//       </ul>
//     </nav>
//   );
// };
// export default Navbarfirst;