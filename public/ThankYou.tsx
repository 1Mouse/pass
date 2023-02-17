import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import Navbar from '@/Components/common/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function ThankYOu() {
  return (
    <>
   <div className='logo'> <img src="/Frame Logo.png"  /></div>

<Navbar></Navbar>


<div className='LOGO'><img src="/LOGO (1).png" alt="" /></div>


<div>
<h1 className='ThankYouText'>Thank you! Please check your email.</h1>
<h2 className='CheckEmailText'>Please check your email, and follow the instructions to activate your PASS.IO account and book your first interview. See you soon!</h2>

</div>





    </>
  )
}