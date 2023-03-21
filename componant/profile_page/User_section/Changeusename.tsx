import Head from "next/head";
import Image from "next/image";
import styles from "./changeusername.module.scss";
import { useState } from "react";

function Changeusename() {
  const [error, setError] = useState("");

  const handleClick = () => {
    const input = document.getElementById("UserName") as HTMLInputElement;
    const value = input?.value.replace(/\s+/g, "");

    if (!value) {
      setError("Invalid username");
    } else {
      console.log(value);
      setError("");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === " ") {
      event.preventDefault();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
  };

  return (
    <>
      <main>
        <div className={styles.changeuser}>
          <div className={styles.user}>
            <h4>Change Username:</h4>
            <div className={styles.labelandinput}>
              <label htmlFor="UserName">set user name*</label>
              <input
                id="UserName"
                className={styles.input}
                type="text"
                placeholder="Username"
                onKeyPress={handleKeyPress}
                onChange={handleInputChange}
                required
              />
            </div>
            {error && <div className={styles.error}>{error}</div>}
          </div>
          <button className={styles.button} onClick={handleClick}>
            save
          </button>
        </div>
      </main>
    </>
  );
}

export default Changeusename;
