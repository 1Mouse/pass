
import { useState } from "react";
import styles from "./changePassword.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faCheck, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { PWD_REGEX } from "@/lib/utils/regex";
import axios, { AxiosError } from "axios";
import { API_URL } from "@/lib/utils/urls";


function ChangePassword({ accessToken }: { accessToken: string }) {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSave = async () => {
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
                "New password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number , and one special characher"
            );
            return;
        }

        if (newPassword !== confirmPassword) {
            setErrorMessage("New password and confirm password do not match");
            return;
        }

        try {
            setLoading(true)
            const response = await axios.put(`${API_URL}/users/password/`, {
                "oldPassword": oldPassword,
                "newPassword": newPassword,
                "confirmPassword": confirmPassword
            },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                }
            );
            console.log(JSON.stringify(response?.data));
            setLoading(false);
            setErrorMessage('');
            setSuccess(true);
        } catch (err) {
            setLoading(false);
            setSuccess(false);
            const error = err as AxiosError;
            console.log(error)
            if (error?.response) {
                //@ts-ignore
                setErrorMessage(error.response?.data?.message);
            }
            else {
                setErrorMessage('Something went wrong');
            }
        }

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
            <div>
                <h2 className={styles.heading}>Change Password:</h2>
                <div className={styles.inputContainer}>
                <label className={styles.label} htmlFor="oldpassword">set old password*</label>
                <div className={styles.inputSubContainer}>
                <input
                    className={styles.input }
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

                <div className={styles.inputContainer}>
                <label className={styles.label} 
                htmlFor="newpassword">set new password*</label>

                <div className={styles.inputSubContainer}>
                <input
                    className={styles.input}
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

                <div className={styles.inputContainer}>
                <label className={styles.label}
                htmlFor="confirmpassword">set confirm password*</label>

                <div className={styles.inputSubContainer}>
                <input
                    className={styles.input}
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
                {errorMessage &&
                    <p className={styles.instructions}>
                        <FontAwesomeIcon icon={faInfoCircle} className={styles.pwdIcon} />
                        {errorMessage}
                    </p>
                }
                {success &&
                    <p className={styles.success}>
                        <FontAwesomeIcon icon={faCheck} className={styles.pwdIcon} />
                        Success
                    </p>
                }
                <button
                    className={styles.save} onClick={handleSave}
                    disabled={loading}
                >
                    {loading ? 'loading...' : 'Save'}
                </button>
            </div>

        </>
    );
}

export default ChangePassword;
