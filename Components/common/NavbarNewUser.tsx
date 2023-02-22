// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '../../styles/navbarNewUser.module.scss'
// import Link from 'next/link';
// import NavButton from './button'




// type Props ={}
// const NavbarNewUser =(props: Props) =>{
//   return(
//     <div className={styles.nav}>
//       <div className={styles.logo}>
//       <img src="/Frame Logo.png" alt="Logo" />
//       </div>
//       <ul className={styles.ul}>
//        <li >    <NavButton href='./about' text="About" /></li>
//               <li >    <NavButton href='./pricing' text="Pricing" /></li>
//               <li >    <NavButton href='./testimoials' text="Testimoials" /></li>
//              <li >    <NavButton href='./contact' text="Contact" /></li>
//               <li >    <NavButton href='./login' text="Log in" /></li>
//               <li className={styles.JoinNow}>    <NavButton href='./JoinNow' text="Join now" /></li>
//        </ul>







//     </div>
//   )
// } 
// export default NavbarNewUser;



























const inter = Inter({ subsets: ['latin'] })

function NavbarNewUser() {
  return (
   <div className={styles.navbarhead}>
      <div className={styles.navbarlogo}><img src="/Frame Logo.png" alt="Logo" /></div>
      <div className={styles.navbartext}>
      <ul>
        <div >    <NavButton href='./about' text="About" /></div>
              <div >    <NavButton href='./pricing' text="Pricing" /></div>
              <div >    <NavButton href='./testimoials' text="Testimoials" /></div>
             <div >    <NavButton href='./contact' text="Contact" /></div>
              <div >    <NavButton href='./login' text="Log in" /></div>
              <div className={styles.JoinNow}>    <NavButton href='./JoinNow' text="Join now" /></div>
       </ul>
      </div>


   </div>
  );
}

export default NavbarNewUser;
