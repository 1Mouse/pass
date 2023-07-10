import { useState } from "react";

import styles from "./editTimeSlots.module.scss";
import moreStyles from './editUserName.module.scss';
import useUserStore from '@/lib/zustand/stores/useUserStore';
import ITimeSlot from '@/lib/types/ITimeSlot'

import { API_URL } from "@/lib/utils/urls";
import axios, { AxiosError } from "axios";
import { fireError, fireSuccess } from "@/lib/utils/toasts";

function EditTimeSlots({ accessToken }: any) {
    const [timeslots, setTimeslots] = useUserStore(state => [state.timeslots, state.setTimeslots]);
    const [selectedDay, setSelectedDay] = useState<number | null>(null);
    const [selectedTimes, setSelectedTimes] = useState<ITimeSlot[]>(timeslots ? timeslots : []);

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);


    console.log('selectedDay', selectedDay);
    console.log('selectedTimes', selectedTimes);

    const handleDayClick = (dayIndex: number) => {
        setSelectedDay(selectedDay === dayIndex ? null : dayIndex);
    };

    // {
    //     day: number
    //     hours: string[]
    // }
    const handleTimeClick = (dayIndex: number, time: string) => {
        let updatedTimes = [...selectedTimes];
        for (let i = 0; i < updatedTimes.length; i++) {
            if (i === dayIndex) {
                if (updatedTimes[i].hours.includes(time)) {
                    updatedTimes[i] = { ...updatedTimes[i], hours: updatedTimes[i].hours.filter(t => t !== time) }
                    setSelectedTimes(updatedTimes);
                    return;
                }
                else {
                    updatedTimes[i] = { ...updatedTimes[i], hours: [...updatedTimes[i].hours, time] }
                    updatedTimes[i].hours.sort();
                    setSelectedTimes(updatedTimes);
                    return;
                }
            }
        }
    };

    const handleSaveClick = async () => {
        try {
            setLoading(true)
            const response = await axios.put(`${API_URL}/users/timeslots/`, {
                'timeslots': selectedTimes,
            },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                }
            );
            console.log(JSON.stringify(response?.data));

            setTimeslots(response?.data?.info.timeslots);
            fireSuccess('Time slots is updated successfully');
            setLoading(false);
            setSuccess(true);
        } catch (err) {
            setLoading(false);
            setSuccess(false);
            fireError('Something wrong happend');
            const error = err as AxiosError;
            console.log(error)
        }
    };

    const formatTime = (time: number) => {
        const hour = (time + 11) % 12 + 1;
        const amPm = time >= 12 ? "PM" : "AM";
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = "00";
        return `${formattedHour}:${formattedMinute} ${amPm}`;
    };

    // const formatTimeForConsole = (time: number) => {
    //     const formattedHour = time.toString().padStart(2, "0");
    //     const formattedMinute = "00";
    //     return `${formattedHour}:${formattedMinute}`;
    // };

    const days = [
        { name: "Sunday", index: 0 },
        { name: "Monday", index: 1 },
        { name: "Tuesday", index: 2 },
        { name: "Wednesday", index: 3 },
        { name: "Thursday", index: 4 },
        { name: "Friday", index: 5 },
        { name: "Saturday", index: 6 },
    ];

    const TIMES = [
        '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00',
        '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',
        '20:00', '21:00', '22:00', '23:00'
    ];

    return (
        <>
            <div className={styles.selectContainer}>
                <label className={styles.selectLabel}>Select your Weekely Availability:</label>
                <div className={styles.selectWrapper}>
                    <div className={styles.weekDaysContainer}>
                        {days.map((day) => (
                            <button
                                key={day.index}
                                className={`${styles.weekDayButton} ${selectedDay === day.index ? styles.selected : ""}`}
                                onClick={() => handleDayClick(day.index)}
                            >
                                {day.name}
                            </button>
                        ))}
                    </div>
                    {selectedDay !== null && (
                        <div className={styles.optionsContainer}>
                            {TIMES.map((time, index) => {
                                const isSelected = selectedDay !== null && selectedTimes[selectedDay].hours.includes(time)
                                return (
                                    <button
                                        key={index}
                                        className={`${styles.optionButton} ${isSelected ? styles.selected : ""}`}
                                        onClick={() => handleTimeClick(selectedDay, time)}
                                    >
                                        {formatTime(index)}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>
                <button className={styles.save} onClick={handleSaveClick} disabled={loading}>
                    {loading ? 'loading...' : 'Save'}
                </button>
            </div>
        </>
    );
}

export default EditTimeSlots;