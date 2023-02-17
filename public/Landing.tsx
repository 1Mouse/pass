import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.scss'
import NavbarNewUser from '@/Components/common/NavbarNewUser'
import NavButton from '@/Components/common/button'
import styles from '../styles/landing_page.module.scss'




const inter = Inter({ subsets: ['latin'] })

export default function Landing() {
  return (
    <>
<div className='stylanding_page'>
{/* logo+navbar */}
<div className='landing_head'>
    <div className='logo'><img src='/Frame Logo.png'  />      </div>
    <NavbarNewUser></NavbarNewUser>
</div>


{/* main page */}
<div className='landing_page_contant'>
   {/* <div className='rectangle'><img src='/Rectangle.png'></img></div> */}
    {/* right side */}
    <div className='langing_page_right_contant'>
      <img src='LandingPage.png'></img>
    </div>

    {/* left side */}
    <div className='langing_page_left'>
           <div className='landing_page_left_contant'>
            <div className='landing_page_text'>
             <h1>Best</h1> 
               <h1> PlatForm To interviews with</h1>
                <h1>engineers </h1>
               <h1> from Amazon, Google, Facebook,</h1> 
               <h1>and other top companies.</h1>
                
                <h5 className='algorithmic'>Get better at algorithmic and systems design problems, and get detailed feedback on exactly what you need to work on.</h5>
                <div className='GetStarted' >    <NavButton href='' text="Get started" /></div>
                
                </div>
              
           </div> 
    </div>
            
</div>
</div>
    </>
  )
}
