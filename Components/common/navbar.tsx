import styles from '../../styles/navbar.module.scss'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBox from './search'

const Navbarfirst = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/FrameLogo.png" alt="Interview Image" width={124.71} height={56.73} />
      </div>
      <button className={styles['menu-toggle']} onClick={toggleNav}>
        <Image src="/Hamburger.png" alt="Menu" width={20} height={20} />
      </button>
      <ul className={`${styles['nav-links']} ${navOpen ? styles['nav-links-open'] : ''}`}>
                     <li>
                 <Link href="/" passHref>
                   watch interview
                 </Link>
               </li>
               <li>
                 <Link href="/about" passHref>
                   Brawse
                 </Link>
               </li>
               <li>
                <Link href="" passHref>
                 <SearchBox/>
                 </Link>
               </li>
               <li>
                
                 <Image src="/Line1.png" alt="Logo" width={1}height={32} />
                
               </li>
               <li>
                 <Link href="/contact" passHref>
                 <Image src="/user.png" alt="Logo" width={32}height={32} />
                 </Link>
               </li>
               <li>
                 <Link href="/contact" passHref>
                 <Image src="/icon-park-outline_drop-down-list.png" alt="Logo" width={32}height={32} />
                 </Link>
               </li>
      </ul>
    </nav>
  );
};

export default Navbarfirst;



































// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '../../styles/navbar.module.scss'
// import Link from 'next/link';
// import SearchBox from './search'
// import NavButton from './button'

// function Navbarfirst() {
//   return (
//     <>
//           <nav className={styles.navbar}>
//             <div className={styles.logo}>
//               <Image src="/Frame Logo.png" alt="Logo" width={124.71}height={56.73} />
//             </div>
//             <ul className={styles.navLinks}>
//               <li>
//                 <Link href="/" passHref>
//                   watch interview
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" passHref>
//                   Brawse
//                 </Link>
//               </li>
//               <li>
//                <Link href="" passHref>
//                 <SearchBox/>
//                 </Link>
//               </li>
//               <li>
                
//                 <Image src="/Line 1.png" alt="Logo" width={1}height={32} />
                
//               </li>
//               <li>
//                 <Link href="/contact" passHref>
//                 <Image src="/user.png" alt="Logo" width={32}height={32} />
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" passHref>
//                 <Image src="/icon-park-outline_drop-down-list.png" alt="Logo" width={32}height={32} />
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//           </>
// );}
// export default Navbarfirst;










//     <nav className={styles.navbar}>
//       <ul className={styles.links}>
//         <li>
//           <a href="#">About</a>
//         </li>
//         <li>
//           <a href="#">Pricing</a>
//         </li>
//         <li>
//           <a href="#">Testimonials</a>
//         </li>
//         <li>
//           <a href="#">Contact</a>
//         </li>
//         <li>
//           <a href="#">log in</a>
//         </li>
//         <li>
//           <a href="#">join now</a>
//         </li>
        
//       </ul>
//     </nav>
//   );
// }













// const inter = Inter({ subsets: ['latin'] })




// export default function Navbar() {


//   return (
//     <>
//     <nav className={styles.Navbar}>
//       <div className={styles.logo}>
//         <img src="/Frame Logo.png" alt="Logo" />
//       </div>
//       <ul className={styles.navbar_text}>
//              <li >     <NavButton href='./WatchInterview' text="Watch interview" /></li>
//              <li >     <NavButton href="./Browse" text="Browse" /></li>
//              <li className={styles.line} >    <img src="/Line 1.png" /> </li>
//              <li className={styles.search}>     <SearchBox/></li>
//              <li className={styles.user}>    <img src="/user.png" /></li>
//              <li className={styles.park}>    <img src="/icon-park-outline_drop-down-list.png" /> </li>

//       </ul>
      
//     </nav>
  




//     </>
//   )
// }
