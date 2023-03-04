import Head from "next/head";
import Image from "next/image";
import styles from "./container1.module.scss";

function Container1() {
  return (
    <>
      <main>
        <div className={styles.general_info}>
          <div className={styles.parentText}>
            <h4 className={styles.text}>General Information</h4>
          </div>
          <div className={styles.general_info_contant}>
            <div className={styles.bio}>
              <form action="" className={styles.form}>
                <div className={styles.formFirstSection}>
                  <div className={styles.inputName}>
                    <label htmlFor="FirstName">First Name *</label>
                    <input
                      id="FirstName"
                      type="text"
                      placeholder="First name"
                    />
                  </div>
                  <div className={styles.inputName}>
                    <label htmlFor="">Last Name *</label>
                    <input id="LastName" type="text" placeholder="Last name" />
                  </div>
                  <div className={styles.level}>
                    <h4>Level of experience *</h4>
                    <select name="level" id="level">
                      <option value="junior">Junior</option>
                      <option value="senior">Senior</option>
                    </select>
                  </div>
                </div>
                <div className={styles.textarea}>
                  <label htmlFor="bio">Bio *</label>
                  <textarea
                    placeholder="Bio..."
                    id="bio"
                    cols={30}
                    rows={7}
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Container1;
