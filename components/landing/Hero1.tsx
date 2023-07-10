import styles from './hero1.module.scss'
import {useRouter} from 'next/router';

const Hero1 = () => {
  const router=useRouter();
    return (
        <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>Get detailed, actionable feedback from experts</h1>
          <p className={styles.subtitle}>Each session ends with an in-depth rundown of what you did well on and how you can improve—all from a senior engineer who has made hiring decisions at FAANG..</p>
        <button onClick={()=>router.push('/signup')} className={styles.btn}>Get Started</button>
        <div className={styles.blob}></div>
        </div>
      </div>
      
    )
}

export default Hero1;