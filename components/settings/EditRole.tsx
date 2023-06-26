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
import { toast } from 'react-toastify'
import useAuthStore from '@/lib/zustand/stores/useAuthStore'

function EditRole({ accessToken}: any) {
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const setRole= useAuthStore(state => state.setRole);

    const [isLoading, setIsLoading] = useState(false);

    
    const handleSubmit = async () => {
        try {
            setIsLoading(true)
            const response = await axios.put(`${API_URL}/users/role/`, {},
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                }
            );
            console.log(JSON.stringify(response?.data));
            setRole(response?.data.role);
            fireSuccess('Congrats now You can host mock interviews')
            setIsLoading(false);
            setErrMsg('');
            setSuccess(true);
        } catch (err) {
            setIsLoading(false);
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

    const fireSuccess = (toastedMsg: string) => toast.success(toastedMsg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    return (
        <>
                <h2 className={styles.heading}>Do you want to offer your experience as an Interviewer?
                    <button className={styles.check}
                        onClick={handleSubmit}
                        disabled={isLoading}
                    >{isLoading ? 'loading...' : 'Start Now'}</button>
                </h2>
            {errMsg &&
                <p className={styles.instructions}>
                    <FontAwesomeIcon icon={faInfoCircle} className={styles.pwdIcon} />
                    {errMsg}
                </p>
            }
{/*             
            {success &&
                fireSuccess('Congrats now You can host mock interviews')
            } */}
            
        </>
    );
}

export default EditRole;
