import styles from "./editUserName.module.scss";
import { useState, useEffect } from "react";
import { faInfoCircle, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios, { AxiosError } from "axios";
import { API_URL } from "@/lib/utils/urls";

import { fireError, fireSuccess } from "@/lib/utils/toasts";
import {useRouter} from 'next/router';
import useUserStore from '@/lib/zustand/stores/useUserStore'



function EditPrice({ accessToken, setPrice, setPricable, priceable,price }: any) {
    const router=useRouter();
    const [value, setValue] = useState(price?price:0);
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const [validPrice, setValidPrice] = useState(false);

    const [elligabilityMsg, setElligabilityMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const validatePrice = value >= 5;
    const [url,setUrl]=useState('')
    const [gotUrl,setGotUrl]=useState(false);
    const merchantId=useUserStore(state=>state.merchantId)

    console.log('==========================================')
    console.log(priceable)
    console.log(price)
    console.log('==========================================')
    useEffect(() => {
        setValidPrice(validatePrice);
        if (!validatePrice)
            setErrMsg('Price can\'t be less than 5');
        else
            setErrMsg('');
    }, [value]);


    const updatePricable = async () => {
        try {
            setIsLoading(true)
            console.log("request", accessToken)
            const response = await axios.post(`${API_URL}/users/pricing/`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                }
            );
            console.log(JSON.stringify(response?.data));
            const isPricable: boolean = response?.data.info.priceable;
            console.log('after Request',isPricable)
            setIsLoading(false);
            setPricable(isPricable);
            setElligabilityMsg('');
        } catch (err) {
            setIsLoading(false);
            const error = err as AxiosError;
            console.log(error)
            if (error?.response) {
                //@ts-ignore
                setElligabilityMsg(error.response?.data?.message);
            }
            else {
                setElligabilityMsg('Something went wrong');
            }
        }
    };

    const handleSubmit = async () => {
        if (!validatePrice) {
            setErrMsg('Price can\'t be less than 5');
            return;
        }

        try {
            setIsLoading(true)
            const response = await axios.put(`${API_URL}/users/price/`, {
                "price": value
            },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                }
            );
            console.log(JSON.stringify(response?.data));
            setPrice(response?.data.info.price);
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

    const handleOnboarding = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get(`${API_URL}/payments/onboard`, 
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                }
            );
            console.log(JSON.stringify(response?.data));
            setUrl(response?.data.links[1].href);

            setGotUrl(true)
            setIsLoading(false);
            // fireSuccess("Onboarding successful");
        } catch (err) {
            setIsLoading(false);
            const error = err as AxiosError;
            console.log(error)
            if (error?.response) {
                //@ts-ignore
                fireError(error.response?.data?.message);
            }
            else {
                fireError('Something went wrong');
            }
        }
    };

    if(gotUrl){
        console.log(url);
        router.push(url)
        return null;
    }

    return (
        <>  
            {
            !priceable &&
                <h2 className={styles.heading}>Do you want to check elligability for pricing?
                <button className={styles.check}
                    onClick={updatePricable}
                    disabled={isLoading}
                    >{isLoading?'loading...':'Check Now'}</button>
                </h2>
            }
            {elligabilityMsg &&
                <p className={styles.instructions}>
                    <FontAwesomeIcon icon={faInfoCircle} className={styles.pwdIcon} />
                    {elligabilityMsg}
                </p>
            }
            {priceable&&!merchantId&&
            <h2 className={styles.heading}>now you can start onboarding with paypal?<button onClick={handleOnboarding} className={styles.check} disabled={isLoading}>{isLoading?'loading':'onboard'}</button>
                            </h2>}
            { priceable&&merchantId &&
                <div>
                    <h2 className={styles.subHeading}>Change price:</h2>
                    <label
                        className={styles.label}
                        htmlFor="price">price*</label>
                    <input
                        id="price"
                        className={styles.input}
                        type="number"
                        value={value}
                        placeholder=""
                        onChange={(e) => {
                            setValue(+e.target.value)
                            setSuccess(false);
                        }}
                        required
                    />
                    <p
                        className={
                            errMsg && value !== 0 ? styles.instructions
                                : success ?
                                    styles.success :
                                    styles.hidden
                        }
                    >
                        <FontAwesomeIcon icon={(success&&!errMsg)  ? faCheck : faInfoCircle} className={styles.pwdIcon} />
                        {errMsg}{(success&&!errMsg) ? "Success" : ""}
                    </p>
                    <button className={styles.save} onClick={handleSubmit}
                        disabled={value === 0 || !validatePrice || isLoading}
                    >
                        {isLoading?'loading...'
                        :'Save'}                    
                        </button>
                </div>
            }
            </>
    );
}

export default EditPrice;
