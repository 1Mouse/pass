import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    return (
        <>
            <nav className={`${styles.nav} ${styles.collapsible} container`}>
                <Link href="/" className={styles.navBrand}>
                    <Image
                        className={styles.navBrand}
                        src="assets/passLogo.svg"
                        alt=""
                        width={125}
                        height={57}
                    ></Image>
                </Link>
                <FontAwesomeIcon icon={faBars} className={styles.navToggler} />
                <ul className={`${styles.navList} ${styles.collapssibleContent}`}>
                    <li className={styles.navItem}><Link href="#">Browse</Link></li>
                    <li className={styles.navItem}><Link href="#">Watch Interviews</Link></li>
                    <li className={styles.navItem}><Link href="#">Profile</Link></li>
                    <li className={styles.navItem}><Link href="#" className={styles.joinNow}>Join now</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;