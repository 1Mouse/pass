import Link from "next/link";
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'




interface NavButtonProps {
  href: string;
  text: string;
}

const NavButton = ({ href, text }: NavButtonProps) => (
  <Link href={href}>
    <button style={{ backgroundColor: "transparent" ,  border: "0",}}>{text}</button>
  </Link>
);

export default NavButton;