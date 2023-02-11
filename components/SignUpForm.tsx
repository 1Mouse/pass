import Link from "next/link";
import Image from "next/image";
import { useState } from "react"
import styles from './signUpForm.module.scss'
type FormProps = {

}

const SignUpForm = (props: FormProps) => {
    const [data, setData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    return (
        <div className={`grid grid--1x2 ${styles.pageNoScroll}`}>
            <div className={styles.signupLeft}>
                <div className={styles.stikyNavbar}>
                    <div>
                        <Link href='/'>
                            <Image className={styles.navBrand} src="assets/passLogo.svg" alt='' width={125} height={57}></Image>
                        </Link>
                    </div>
                </div>
                <div className={styles.form}>
                    <h1 className={styles.title}>Sign Up</h1>
                    <p>
                        already a member? <span><Link className='link--underlined' href='/login'>Log In</Link></span>
                        </p>
                    <form  action="#">
                        <div className="btn--big--gray">
                            <Link href='/'><Image className="icon" src="assets/googleLogo.svg" alt='' width={32} height={32}></Image>Sign Up with Google</Link>
                        </div>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
            </div>
            <div className={styles.signupRight}>
                <div className={styles.imageContainer}>
                    <Image 
                     src="/assets/Signup-Image-1.5x.png" 
                     alt='' 
                     fill
                     className={styles.image}
                     />
                     
                </div>
            </div>
        </div>
    )
}










export default SignUpForm