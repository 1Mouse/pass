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
import useUserStore from '@/lib/zustand/stores/useUserStore';
import useHasMounted from "@/lib/hooks/useHasMounted";
import { FRONT_URL } from "@/lib/utils/urls";
import { useRouter } from 'next/router';
import useTrackStore from '@/lib/zustand/stores/useTrackStore';
import setCookie from "@/lib/utils/setCookie";

const Navbar = () => {
    const hasMounted = useHasMounted();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const accessToken: string | undefined = useAuthStore((state) => state.accessToken);
    const username = useAuthStore(state => state.user.username);
    console.log(accessToken);
    const isAuth = (accessToken && accessToken !== '') ? true : false;

    const clearAuth = useAuthStore(state => state.clearAuth)
    const clearInfo = useUserStore(state => state.clearInfo)
    const [setVisitedHomeAfterLogin] = useTrackStore(state => [state.setVisitedHomeAfterLogin])
    // const [loading,setLoading]=useState<boolean>(false);

    if (!hasMounted) return null;

    function deleteCookie(name: string) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

    const logout = () => {
        // setLoading(true);
        console.log('logout')
        clearAuth();
        clearInfo();
        setVisitedHomeAfterLogin(false);
        deleteCookie('username')
        deleteCookie('info')
        deleteCookie('skills')
        // setCookie('loggedOut','true' , 365);
        // setLoading(false);   
        // delay(500);
        window.location.href=`${FRONT_URL}/login`;
        // router.push(`${FRONT_URL}/login`);
    }

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
                        `${FRONT_URL}/manage-interviews` :
                        `${FRONT_URL}/login`
                    }>My Interviews</Link></li>
                    <li className={styles.navItem}><Link href={
                        (isAuth) ?
                            `${FRONT_URL}/users/${username}` :
                            `${FRONT_URL}/login`
                    }>Profile</Link></li>
                    <li className={styles.navItem}><Link href={
                        (isAuth) ?
                            `${FRONT_URL}/users/settings` :
                            `${FRONT_URL}/login`
                    }>Settings</Link></li>

                    {!isAuth && <li className={styles.navItem}><Link href={`${FRONT_URL}/login`} className={styles.logIn}>Log in</Link></li>}
                    {isAuth && <li className={styles.navItem}><button className={styles.logIn} onClick={
                        logout
                    }>Log out</button></li>}
                </ul>
            </nav>
        </>
    )
}

export default Navbar;