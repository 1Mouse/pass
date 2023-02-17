import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import Navbar from '@/Components/common/navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Polish() {
  return (
    <>
    <div className='polich_page'>

      <div className="polish_head">
        <div className='logo'> <img src="/Frame Logo.png"  /></div>
         <Navbar></Navbar>
      </div>
<div className='polish_contant'>

<div className='successfullyActivated '>
<h1>Your account has successfully activated</h1>
</div>


<div className='activeImage'>
  <img src="/group Signuo Done Image.png"  />

</div>



<div>
<h1 className="polish_text">let's polish your profile to stand out between your peers</h1>

</div>


<button className='polish_buttom'> Let's go</button>



</div>
</div>

    </>
  )
}