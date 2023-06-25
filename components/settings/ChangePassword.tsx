
import { useState } from "react";
import styles from "./changePassword.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { PWD_REGEX } from "@/lib/utils/regex";

function ChangePassword({accessToken}:{accessToken:string}) {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading]=useState(false);

    const handleSave = () => {
        if (!oldPassword) {
            setErrorMessage("Old password cannot be empty");
            return;
        }

        if (!newPassword) {
            setErrorMessage("New password cannot be empty");
            return;
        }

        if (PWD_REGEX.test(newPassword)) {
            setErrorMessage(
                "New password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
            );
            return;
        }

        if (newPassword!==confirmPassword) {
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
                <div className={styles.changepassword}>
                    <h2 className={styles.heading}>Change Password:</h2>
                    <div className={styles.inputsendbutton}>
                        <div className={styles.inputs}>
                            <div className={styles.input}>
                                <label htmlFor="oldpassword">set old password*</label>
                                <div className={styles.passwordInput}>
                                    <input
                                        id="oldpassword"
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
                                <label htmlFor="newpassword">set new password*</label>
                                <div className={styles.passwordInput}>
                                    <input
                                        id="newpassword"
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
                                <label htmlFor="confirmpassword">set confirm password*</label>
                                <div className={styles.passwordInput}>
                                    <input
                                        id="confirmpassword"
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

                </div>
        </>
    );
}

export default ChangePassword;
