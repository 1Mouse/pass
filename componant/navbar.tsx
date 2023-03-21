// import React, { useState, useEffect } from 'react';
// import styles from '../styles/navbar.module.scss';

// const Navbar = () => {
//   const [showLinks, setShowLinks] = useState(true);
//   const [showCenteredLinks, setShowCenteredLinks] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       if (
//         (windowWidth <= 769 && window.innerWidth > 769) ||
//         (windowWidth > 769 && window.innerWidth <= 769)
//       ) {
//         setShowLinks(true);
//         setShowCenteredLinks(false);
//       }
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, [windowWidth]);

//   const handleToggleClick = () => {
//     if (window.innerWidth > 769) {
//       setShowLinks(!showLinks);
//     }
//     setShowCenteredLinks(!showCenteredLinks);
//   };

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.logo}>Logo</div>
//       <div className={styles.right}>
//         {showLinks && (
//           <ul className={styles.links}>
//             <li>Link 1</li>
//             <li>Link 2</li>
//             <li>Link 3</li>
//           </ul>
//         )}
//         <button onClick={handleToggleClick}>Toggle</button>
//       </div>
//       {showCenteredLinks && (
//         <ul className={styles.centeredLinks}>
//           <li>Centered Link 1</li>
//           <li>Centered Link 2</li>
//           <li>Centered Link 3</li>
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;





























































// import { useState, useEffect, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import styles from "../styles/navbar.module.scss";
// import Link from "next/link";

// const Navbar = () => {
//   const [showLinks, setShowLinks] = useState(false);
//   const navbarRef = useRef(null);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 768) {
//         setShowLinks(false);
//       } else {
//         setShowLinks(true);
//       }
//     };
//     handleResize(); // set initial state on mount
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (window.innerWidth <= 768 && navbarRef.current && !navbarRef.current.contains(event.target)) {
//         setShowLinks(false);
//       }
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, [navbarRef]);

//   const handleToggle = () => {
//     setShowLinks(!showLinks);
//   };

//   return (
//     <>
//       <div className={styles.nav} ref={navbarRef}>
//         <div className={styles.logo}>logo</div>
//         <div className={styles.rightside}>
//           <div
//             className={styles.links}
//             style={{ display: showLinks ? "flex" : "none" }}
//           >
//             <Link href="/" className={styles.link}>
//               Home
//             </Link>
//             <Link href="/about" className={styles.link}>
//               About
//             </Link>
//             <Link href="/contact" className={styles.link}>
//               Contact
//             </Link>
//           </div>
//           <div className={styles.toggle} onClick={handleToggle}>
//             <FontAwesomeIcon icon={faBars} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;







// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import styles from "../styles/navbar.module.scss"
// import Link from "next/link";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className={styles.navBar}>
//       <div className={styles.container}>

//           <div className={styles.logo}>
//             logo
//           </div>

//         <div className={styles.hiddenOnDesktop}>
//           <button
//             onClick={handleToggle}
//             className={styles.toggleButton}
//           >
//             <FontAwesomeIcon icon={faBars} />
//           </button>
//           {isOpen && (
//         <div className={styles.mobileLinksContainer}>
//           <Link href="#" className={styles.activeLink}>
//             Dashboard
//           </Link>

//           <Link href="#" className={styles.link}>
//             Team
//           </Link>

//           <Link href="#" className={styles.link}>
//             Projects
//           </Link>

//           <Link href="#" className={styles.link}>
//             Calendar
//           </Link>
//         </div>
//       )}
//         </div>
//       </div>

//     </nav>
//   );
// };

// export default Navbar;

// import styles from '../styles/navbar.module.scss'
// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const Navbarnew = () => {
//   const [navOpen, setNavOpen] = useState(false);

//   const toggleNav = () => {
//     setNavOpen(!navOpen);
//   };

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.logo}>
//         <Image src="/FrameLogo.svg" alt="Interview Image" width={124.71} height={56.73} />
//       </div>
//       <button className={styles['menu-toggle']} onClick={toggleNav}>
//         <Image src="/icon-park-outline_drop-down-list.svg" alt="Menu" width={20} height={20} />
//       </button>
//       <ul className={`${styles['nav-links']} ${navOpen ? styles['nav-links-open'] : ''}`}>
//         <li>
//           <Link href="/about">
//             <span className={styles['nav-link']} onClick={toggleNav}>About</span>
//           </Link>
//         </li>
//         <hr className={styles.linebetween}></hr>
//         <li>
//           <Link href="/pricing">
//             <span className={styles['nav-link']} onClick={toggleNav}>Pricing</span>
//           </Link>
//         </li>
//         <hr className={styles.linebetween}></hr>

//         <li>
//           <Link href="/testimonials">
//             <span className={styles['nav-link']} onClick={toggleNav}>Testimonials</span>
//           </Link>
//         </li>
//         <hr className={styles.linebetween}></hr>

//         <li>
//           <Link href="/contact">
//             <span className={styles['nav-link']} onClick={toggleNav}>Contact</span>
//           </Link>
//         </li>
//         <hr className={styles.linebetween}></hr>

//         <li>
//           <Link href="/login">
//             <span className={styles['nav-link']} onClick={toggleNav}>Log In</span>
//           </Link>
//         </li>
//         <hr className={styles.linebetween}></hr>

//         <li>
//           <Link href="/joinnow">
//             <span className={`${styles['nav-link']} ${styles['nav-link-unique']}`} onClick={toggleNav}>Join Now</span>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbarnew;
