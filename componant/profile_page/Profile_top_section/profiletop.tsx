import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import styles from "../Profile_top_section/Profile_top_section.module.scss";

function Profiletop() {
  return (
    <>
      <main>
        <div className={styles.profile_head}>
          <div className={styles.text1}>
            <h1 className={styles.text}>Public Profile</h1>
          </div>
          <div className={styles.profile_head_contant}>
            <div className={styles.profileimage}>
              <Image
                src={"Ellipse.svg"}
                alt={""}
                width={100}
                height={100}
              ></Image>
            </div>
            <div className={styles.button}>
              <button className={styles.Upload}>
                Upload
              </button>
              <button className={styles.Delete}>
                <FontAwesomeIcon
                  icon={faTrash}
                  className={styles.button__icon}
                />
                Delete Photo
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Profiletop;
