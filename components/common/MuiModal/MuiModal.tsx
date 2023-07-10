import styles from './muiModal.module.scss';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';


import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Select from 'react-select';
import { API_URL } from '@/lib/utils/urls';
import axios, { AxiosError } from 'axios';
import { fireSuccess, fireError } from '@/lib/utils/toasts'

export default function MuiModal(props: any) {
    console.log("props in MuiModal", props.timeslots);
    const [day, setDay] = useState<Dayjs | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [timesPool, setTimesPool] = useState<{ value: string, label: string }[]>();
    const [show, setShow] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    console.log("selectedDate", day);
    console.log("selectedTime", selectedTime);

    const handleClose = () => {
        props.setShowModal(false);
    };

    const handleDaySelection = (d: Dayjs | null) => {
        console.log('changed', d)
        if (d === null) {
            setDay(null);
            setTimesPool([]);
            setSelectedTime(null);
            setShow(false);
            return;
        }

        const decodeDay = d.day();
        console.log("decodeDay", decodeDay)
        const t = props.timeslots[decodeDay].hours.map((hour: string) => ({ value: hour, label: hour }));;
        console.log("timesPool", t);
        setDay(d);
        setTimesPool(t);
        setSelectedTime(null);
        setShow(true);
    }

    const handleTimeSelection = (option: { value: string, label: string }) => {
        setSelectedTime(option.value);
    }

    const handleBook = async () => {
        let formatDate = dayjs(day!.add(4, 'hour')).toISOString().split('T')[0].concat('T', selectedTime!, ':00.000+03:00');
        console.log(formatDate);
        try {
            setLoading(true)
            const response = await axios.post(`${API_URL}/interviews/`, {
                "interviewer": props.interviewerId,
                "interviewee": props.intervieweeId,
                "date": formatDate
            },
                {
                    headers: {
                        Authorization: `Bearer ${props.accessToken}`,
                    }
                }
            );
            console.log(JSON.stringify(response?.data));
            setLoading(false);
            fireSuccess('Interview booked successfully');
            props.setShowModal(false);
        } catch (err) {
            setLoading(false);
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
    }
    return (
        <div >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Dialog open={props.showModal} onClose={handleClose}
                >
                    <div className={styles.modalContainer}>

                        <h2 className={styles.modalHeading}>Book a mock interview</h2>
                        <div className={styles.inputsContainer}>
                        <DatePicker
                            label="Select Day"
                            value={day}
                            disablePast
                            onChange={(newValue) => handleDaySelection(newValue)}
                        />

                        <div className={`${styles.selectWrapper} ${!show ? styles.hidden : ''}`}>
                        <Select
                            instanceId={'time'}
                            placeholder="Select Time"
                            //@ts-ignore
                            onChange={handleTimeSelection}
                            closeMenuOnSelect={true}
                            options={timesPool}
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    borderColor: state.isFocused ? 'dodgerblue' : 'gainsboro',
                                    borderWidth: '2px',
                                    borderRadius: '4px',
                                    marginTop:'2rem'
                                }),
                            }}
                        />
                        </div>
                        </div>
                    </div>
                    <DialogActions>
                        <button
                        className={styles.cancel}
                         onClick={handleClose}>
                            Cancel
                            </button>
                        <button 
                        className={styles.book}
                        onClick={handleBook} 
                        disabled={(loading || selectedTime === null || day === null)}>
                            {loading ? "loading..." : "Book"}
                        </button>
                    </DialogActions>
                </Dialog>
            </LocalizationProvider>
        </div>
    );
}


            // <Dialog open={props.showModal} onClose={handleClose}>
            //     <DialogTitle>Book a mock interview</DialogTitle>
            //     <DialogContent>
            //         <DialogContentText>

            //         </DialogContentText>
            //         <TextField
            //             autoFocus
            //             margin="dense"
            //             id="name"
            //             label="Email Address"
            //             type="email"
            //             fullWidth
            //             variant="standard"
            //         />
            //     </DialogContent>
            //     <DialogActions>
            //         <Button onClick={handleClose}>Cancel</Button>
            //         <Button onClick={handleClose}>Subscribe</Button>
            //     </DialogActions>
            // </Dialog>