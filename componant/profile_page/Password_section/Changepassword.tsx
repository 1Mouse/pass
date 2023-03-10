
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./changepassword.module.scss";
import Link from "next/link";
import { validatePassword, validateConfirmPassword } from "../../validation/validation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Changepassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSave = () => {
    if (!validatePassword(newPassword)) {
      setErrorMessage(
        "New password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
      );
      return;
    }

    if (!validateConfirmPassword(newPassword, confirmPassword)) {
      setErrorMessage("New password and confirm password do not match");
      return;
    }

    // TODO: make API request to update password
    console.log({
      oldPassword,
      newPassword,
      confirmPassword,
    });
    setErrorMessage("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "oldPassword":
        setOldPassword(event.target.value);
        break;
      case "newPassword":
        setNewPassword(event.target.value);
        break;
      case "confirmPassword":
        setConfirmPassword(event.target.value);
        break;
      default:
        break;
    }
    setErrorMessage("");
  };

  const toggleOldPasswordVisibility = () => {
    setShowOldPassword(!showOldPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <main>
        <div className={styles.changepassword}>
          <h4>Pass Word:</h4>
          <div className={styles.inputsendbutton}>
            <div className={styles.inputs}>
              <div className={styles.input}>
                <label>set old password*</label>
                <div className={styles.passwordInput}>
                  <input
                    type={showOldPassword ? "text" : "password"}
                    placeholder="old password"
                    name="oldPassword"
                    value={oldPassword}
                    onChange={handleInputChange}
                  />
                  <FontAwesomeIcon
                    icon={showOldPassword ? faEyeSlash : faEye}
                    onClick={toggleOldPasswordVisibility}
                    className={styles.eyeIcon}
                  />
                </div>
              </div>
              <div className={styles.input}>
                <label>set new password*</label>
                <div className={styles.passwordInput}>
                  <input
                    type={showNewPassword ? "text" : "password"}
                    placeholder="new password"
                    name="newPassword"
                    value={newPassword}
                    onChange={handleInputChange}
                  />
                  <FontAwesomeIcon
                    icon={showNewPassword ? faEyeSlash : faEye}
                    onClick={toggleNewPasswordVisibility}
                    className={styles.eyeIcon}
                  />
                </div>
              </div>
              <div className={styles.input}>
                <label>set confirm password*</label>
                <div className={styles.passwordInput}>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="confirm password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleInputChange}
                  />
                  <FontAwesomeIcon
                    icon={showConfirmPassword ? faEyeSlash : faEye}
                    onClick={toggleConfirmPasswordVisibility}
                    className={styles.eyeIcon}
                  />
                </div>
              </div>
            </div>
            <button className={styles.button} onClick={handleSave}>
              save
            </button>
          </div>
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          <Link
            className={styles.forget}
            href=""
            style={{ textDecoration: "none", color: "#0C84DF" }}
          >
            Forgot password?
          </Link>
        </div>
      </main>
    </>
  );
}

export default Changepassword;





//without eye

// import { useState } from "react";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "./changepassword.module.scss";
// // import Skill from "../choose/Choose";
// import Link from "next/link";
// import {
//   validatePassword,
//   validateConfirmPassword,
// } from "../../validation/validation";

// function Changepassword() {
//   const [oldPassword, setOldPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSave = () => {
//     if (!validatePassword(newPassword)) {
//       setErrorMessage(
//         "New password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
//       );
//       return;
//     }

//     if (!validateConfirmPassword(newPassword, confirmPassword)) {
//       setErrorMessage("New password and confirm password do not match");
//       return;
//     }

//     // TODO: make API request to update password
//     console.log({
//       oldPassword,
//       newPassword,
//       confirmPassword,
//     });
//     setErrorMessage("");
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     switch (event.target.name) {
//       case "oldPassword":
//         setOldPassword(event.target.value);
//         break;
//       case "newPassword":
//         setNewPassword(event.target.value);
//         break;
//       case "confirmPassword":
//         setConfirmPassword(event.target.value);
//         break;
//       default:
//         break;
//     }
//     setErrorMessage("");
//   };

//   return (
//     <>
//       <main>
//         <div className={styles.changepassword}>
//           <h4>Pass Word:</h4>
//           <div className={styles.inputsendbutton}>
//             <div className={styles.inputs}>
//               <div className={styles.input}>
//               <label>set old pass word*</label>
//                 <input
//                   type="password"
//                   placeholder="old password"
//                   name="oldPassword"
//                   value={oldPassword}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className={styles.input}>
//               <label>set new pass word*</label>
//                 <input
//                   type="password"
//                   placeholder="new password"
//                   name="newPassword"
//                   value={newPassword}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className={styles.input}>
//               <label>set confirm pass word*</label>
//                 <input
//                   type="password"
//                   placeholder="confirm password"
//                   name="confirmPassword"
//                   value={confirmPassword}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </div>
//             <button className={styles.button} onClick={handleSave}>
//               save
//             </button>
//           </div>
//           {errorMessage && <p className={styles.error}>{errorMessage}</p>}
//           <Link
//             className={styles.forget}
//             href=""
//             style={{ textDecoration: "none", color: "#0C84DF" }}
//           >
//             Forgot password?
//           </Link>
//         </div>
//       </main>
//     </>
//   );
// }

// export default Changepassword;


