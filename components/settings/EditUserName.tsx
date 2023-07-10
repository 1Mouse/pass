import styles from "./editUserName.module.scss";
import { useState } from "react";
import { faInfoCircle, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios, { AxiosError } from "axios";
import { API_URL } from "@/lib/utils/urls";
import setCookie from "@/lib/utils/setCookie";
import omit from "@/lib/utils/omit";
import IUser from "@/lib/types/IUser";


function EditUserName({accessToken, setUser}:any) {
    const [value, setValue] = useState('');
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    console.log("right", accessToken)

    const handleSubmit = async() => {
        const spacesRemoved=value.replace(/\s+/g, '');
        try {
            const response = await axios.put(`${API_URL}/users/username/`, {
                "username": spacesRemoved
            },
            {
                headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
            }
            );
            console.log(JSON.stringify(response?.data));
            let u = omit(['password', 'info'], response?.data) as IUser;
            console.log(u);
            setUser(u);


            setCookie('username', u.username, 365);
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
                <h2 className={styles.heading}>Change Username:</h2>
                <label
                    className={styles.label}
                    htmlFor="userName">set user name*</label>
                <input
                    id="userName"
                    className={styles.input}
                    type="text"
                    value={value}
                    placeholder="username"
                    onChange={(e) => setValue(e.target.value)}
                    required
                />
                <p
                    className={
                        errMsg ? styles.instructions
                            : success ?
                                styles.success :
                                styles.hidden
                    }
                >
                    <FontAwesomeIcon icon={success?faCheck:faInfoCircle} className={styles.pwdIcon} />
                    {errMsg}{success ? "username is updated successfully" : ""}
                </p>
                <button className={styles.save} onClick={handleSubmit}>
                    Save
                </button>
            </div>


        </>
    );
}

export default EditUserName;
