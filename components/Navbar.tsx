import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faXmark
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <nav className={`${styles.nav} container`}>
                <Link href="/" className={styles.navBrand}>
                    <Image
                        className={styles.navBrand}
                        src="assets/passLogo.svg"
                        alt=""
                        width={125}
                        height={57}
                    ></Image>
                </Link>
                <FontAwesomeIcon
                    icon={isOpen ? faXmark : faBars}
                    className={styles.navToggler}
                    onClick={(prev) => {
                        setIsOpen(prev => !prev)
                    }}
                />
                <ul className={`${styles.navList} ${styles.collapssibleContent} ${!isOpen ? styles.hidden : ''}`}>
                    <li className={styles.navItem}><Link href="#">Browse</Link></li>    
                    <li className={styles.navItem}><Link href="#">lorem</Link></li>
                    <li className={styles.navItem}><Link href="#">Profile</Link></li>
                    <li className={styles.navItem}><Link href="#" className={styles.logIn}>Log in</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;