import Head from 'next/head'
import Image from 'next/image'
import styles from '../Profile_top_section/Profile_top_section.module.scss'
 function Profiletop() {
    return (
      <>
        
        <main>
        <div className={styles.profile_head}>
            <h1 className={styles.text}>Public Profile</h1>
              <hr></hr>           
            <div className={styles.profile_head_contant}>
              
              <div className={styles.profileimage}>
                <Image src={"Ellipse.svg"} alt={""} width={100} height={100}></Image>
              </div>
              <div className={styles.button}>
                <button>hi</button>
                <button>hii</button>
          </div>
          </div>
          </div>

        </main>
      </>
    )
  }

  export default Profiletop;