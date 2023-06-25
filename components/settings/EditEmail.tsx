import styles from "./editUserName.module.scss";
import { useState, useEffect } from "react";
import { faInfoCircle, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios, { AxiosError } from "axios";
import { API_URL } from "@/lib/utils/urls";
import setCookie from "@/lib/utils/setCookie";
import omit from "@/lib/utils/omit";
import IUser from "@/lib/types/IUser";
import { EMAIL_REGEX } from '@/lib/utils/regex';

function EditEmail({ accessToken}: any) {
    const [value, setValue] = useState('');
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const [validEmail, setValidEmail] = useState(false);

    useEffect(() => {
        const validateEmail = EMAIL_REGEX.test(value);
        setValidEmail(validateEmail);
        if (!validateEmail)
            setErrMsg('Please enter a valid email');
        else
            setErrMsg('');
    }, [value]);

    const handleSubmit = async () => {
        const validateEmail = EMAIL_REGEX.test(value);
        if (!validateEmail) {
            setErrMsg('Please enter a valid email');
            return;
        }

        try {
            const response = await axios.post(`${API_URL}/users/email/`, {
                "email": value
            },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                }
            );
            console.log(JSON.stringify(response?.data));
            
            setErrMsg('');
            setSuccess(true);
        } catch (err) {
            setSuccess(false);
            const error = err as AxiosError;
            console.log(error)
            if (error?.response) {
                //@ts-ignore
                setErrMsg(error.response?.data?.message);
            }
            else {
                setErrMsg('Something went wrong');
            }
        }
    };


    return (
        <>
            <div>
                <h2 className={styles.heading}>Change Email:</h2>
                <label
                    className={styles.label}
                    htmlFor="email">Email*</label>
                <input
                    id="email"
                    className={styles.input}
                    type="text"
                    value={value}
                    placeholder="enter new email"
                    onChange={(e) => setValue(e.target.value)}
                    required
                />
                <p
                    className={
                        errMsg&&value!=='' ? styles.instructions
                            : success ?
                                styles.success :
                                styles.hidden
                    }
                >
                    <FontAwesomeIcon icon={success ? faCheck : faInfoCircle} className={styles.pwdIcon} />
                    {errMsg}{success ? "Success, check your inbox for confirmation" : ""}
                </p>
                <button className={styles.save} onClick={handleSubmit}
                    disabled={value===''||!validEmail}
                >
                    Save
                </button>
            </div>


        </>
    );
}

export default EditEmail;
