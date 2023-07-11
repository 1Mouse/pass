import styles from './paypalModal.module.scss';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { useState, useEffect } from 'react';
import { API_URL } from '@/lib/utils/urls';
import axios, { AxiosError } from 'axios';
import { fireSuccess, fireError } from '@/lib/utils/toasts';
import React from "react";
import ReactDOM from "react-dom"

import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";

// This values are the props in the UI
const amount = "2";
const currency = "USD";
const style = { layout: "vertical" };
// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner, interviewId, accessToken }: any) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);

    return (<>
        {(showSpinner && isPending) && <div className="spinner" />}
        <PayPalButtons
            style={{ layout: "vertical" }}
            disabled={false}
            forceReRender={[amount, currency]}
            fundingSource={undefined}
            createOrder={(data, actions) => {
                return fetch(`${API_URL}/payments/orders`, {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${accessToken}`
                    },
                    body: JSON.stringify({
                        interviewId: interviewId
                    })
                }).then((response) => response.json()).then((order) => order.id);
            }}

        />
    </>
    );
}

export default function PaypalModal(props: any) {
    const [show, setShow] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const handleClose = () => {
        props.setShowModal(false);
    };



    // const handleBook = async () => {
    //     let formatDate = dayjs(day!.add(4, 'hour')).toISOString().split('T')[0].concat('T', selectedTime!, ':00.000+03:00');
    //     console.log(formatDate);
    //     try {
    //         setLoading(true)
    //         const response = await axios.post(`${API_URL}/interviews/`, {
    //             "interviewer": props.interviewerId,
    //             "interviewee": props.intervieweeId,
    //             "date": formatDate
    //         },
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${props.accessToken}`,
    //                 }
    //             }
    //         );
    //         console.log(JSON.stringify(response?.data));
    //         setLoading(false);
    //         fireSuccess('Interview booked successfully');
    //         props.setShowModal(false);
    //     } catch (err) {
    //         setLoading(false);
    //         const error = err as AxiosError;
    //         console.log(error)
    //         if (error?.response) {
    //             //@ts-ignore
    //             fireError(error.response?.data?.message);
    //         }
    //         else {
    //             fireError('Something went wrong');
    //         }
    //     }
    // }




    return (
        <div >
            <Dialog open={props.showModal} onClose={handleClose}
            >
                <div className={styles.modalContainer}>

                    <h2 className={styles.modalHeading}>Pay for the mock interview</h2>
                    <div style={{ maxWidth: "750px", minHeight: "200px" }}>
                        <PayPalScriptProvider
                            options={{
                                "clientId": "AfTPCmMG-JNM7WFRoqLUzNPjrP3knNkdT_BwqdDS3ytM5Maz_uUiHWoqIkhMpKsSZqcW6dIfTYWIXZVq",
                                components: "buttons",
                                currency: "USD",
                                merchantId: 'Q5ADEKZKC7F72'
                            }}
                        >
                            <ButtonWrapper
                                interviewId={props.interviewId}
                                currency={currency}
                                showSpinner={false}
                                accessToken={props.accessToken}
                            />
                        </PayPalScriptProvider>
                    </div>

                </div>
                {/* <DialogActions>
                        <button
                            className={styles.cancel}
                            onClick={handleClose}>
                            Cancel
                        </button>
                    </DialogActions> */}
            </Dialog>
        </div>
    );
}

