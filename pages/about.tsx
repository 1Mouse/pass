import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/navbarList.module.scss'
import Navbarnew from '@/Components/common/NavbarNewUser'

const inter = Inter({ subsets: ['latin'] })

export default function about() {
  return (
    <>
    <Navbarnew></Navbarnew>
    <div>about</div>
    </>
  )
}
