import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faXmark
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useAuthStore from "@/lib/zustand/stores/useAuthStore";
import useHasMounted from "@/lib/hooks/useHasMounted";
import { FRONT_URL } from "@/lib/utils/urls";

const Navbar = () => {
    const hasMounted = useHasMounted();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const accessToken: string | undefined = useAuthStore((state) => state.accessToken);
    const username=useAuthStore(state=>state.user.username);
    console.log(accessToken);
    const isAuth = (accessToken && accessToken !== '') ? true : false;

    if (!hasMounted) return null;

    return (
        <>
            <nav
                className={`${styles.nav} container`}>
                <Link href="/" className={styles.navBrand}>
                    <Image
                        className={styles.navBrand}
                        src="/assets/passLogo.svg"
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
                    <li className={styles.navItem}><Link href={`${FRONT_URL}/explore`}>Explore</Link></li>
                    <li className={styles.navItem}><Link href={(isAuth) ?
                        `${FRONT_URL}/manage-interviews`:
                        `${FRONT_URL}/login`
                        }>My Interviews</Link></li>
                    <li className={styles.navItem}><Link href={
                        (isAuth)?
                        `${FRONT_URL}/users/${username}`:
                        `${FRONT_URL}/login`
                        }>Profile</Link></li>
                    <li className={styles.navItem}><Link href={
                        (isAuth) ?
                            `${FRONT_URL}/users/settings` :
                            `${FRONT_URL}/login`
                    }>Settings</Link></li>

                    {!isAuth && <li className={styles.navItem}><Link href={`${FRONT_URL}/login`} className={styles.logIn}>Log in</Link></li>}
                </ul>
            </nav>
        </>
    )
}

export default Navbar;