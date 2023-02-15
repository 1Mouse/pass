import Link from "next/link";
import Image from "next/image";
import { useState } from "react"
import styles from './signUpForm.module.scss'
import OrLine from "./common/OrLine";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faEyeSlash,faEye } from '@fortawesome/free-solid-svg-icons'
type FormProps = {

}

const SignUpForm = (props: FormProps) => {
    const [data, setData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [showPassword,setShowPassword]=useState(false);



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
                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>Sign Up</h1>
                        <p>
                            already a member? <span><Link href='/login'>Log In</Link></span>
                        </p>
                    </div>
                    <button type="button" className={styles.btnGoogle} >
                        Sign in with Google
                    </button>
                    <OrLine/>
                    <form action="#" className={styles.formItself}>
                        <div className={styles.inputContainer}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                            <input required type="email" placeholder="Email" />
                        </div>
                        <div className={styles.inputContainer}>
                            <FontAwesomeIcon icon={faLock} className={styles.icon} />
                        <input type={showPassword? 'text':'password'} placeholder="Password"
                                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                        />
                        <div className={styles.eye}>
                            <FontAwesomeIcon    icon={showPassword? faEye:faEyeSlash}  onClick={()=>setShowPassword(prev=>!prev)}/>
                        </div>
                        </div>

                        <button className={styles.btnPrimary}>Sign Up</button>
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