import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/profile.module.scss'

 function Container1() {
    return (
      <>
        
        <main>
        <div className={styles.general_info}>
            <h4 className={styles.text}>General Information</h4>
            <div className={styles.general_info_contant}>
              
              <div className={styles.bio}>
              <form action="" className={styles.form}>
             <div className={styles.formFirstSection}>
               <input type="text" placeholder="First name" />
               <input type="text" placeholder="Last name" />
               <div className={styles.level}>
                 <h4>Level of experience</h4>
                 <select name="level" id="level">
                   <option value="junior">Junior</option>
                   <option value="senior">Senior</option>
                 </select>
               </div>
             </div>
             
             <textarea placeholder="Bio..." id="" cols={30} rows={7}></textarea>
             <div>
                <button className={styles.save}>save</button>
             </div>
            </form>
             </div>
             </div>
             </div>
             

        </main>
      </>
   )
   }

  export default Container1;