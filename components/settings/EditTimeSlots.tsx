import { useState } from "react";

import styles from "./editTimeSlots.module.scss";
import moreStyles from './editUserName.module.scss';

function EditTimeSlots() {
    const [selectedDay, setSelectedDay] = useState<number | null>(null);
    const [selectedTimes, setSelectedTimes] = useState<Record<number, number[]>>({});

    console.log('selectedDay',selectedDay);
    console.log('selectedDay',selectedDay);

    const handleDayClick = (dayIndex: number) => {
        setSelectedDay(selectedDay === dayIndex ? null : dayIndex);
    };

    const handleTimeClick = (dayIndex: number, time: number) => {
        const dayTimes = selectedTimes[dayIndex] || [];
        if (dayTimes.includes(time)) {
            const updatedTimes = dayTimes.filter((t: number) => t !== time);
            setSelectedTimes({ ...selectedTimes, [dayIndex]: updatedTimes });
        } else {
            const updatedTimes = [...dayTimes, time];
            setSelectedTimes({ ...selectedTimes, [dayIndex]: updatedTimes });
        }
    };

    const handleSaveClick = () => {
        for (const day of Object.keys(selectedTimes)) {
            const selectedDayTimes = selectedTimes[day as unknown as number];
            if (selectedDayTimes.length > 0) {
                console.log(`day:${day}, hours:${selectedDayTimes.map(formatTimeForConsole).join(", ")}`);
            }
        }
    };

    const formatTime = (time: number) => {
        const hour = (time + 11) % 12 + 1;
        const amPm = time >= 12 ? "PM" : "AM";
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = "00";
        return `${formattedHour}:${formattedMinute} ${amPm}`;
    };

    const formatTimeForConsole = (time: number) => {
        const formattedHour = time.toString().padStart(2, "0");
        const formattedMinute = "00";
        return `${formattedHour}:${formattedMinute}`;
    };

    const days = [
        { name: "Sunday", index: 0 },
        { name: "Monday", index: 1 },
        { name: "Tuesday", index: 2 },
        { name: "Wednesday", index: 3 },
        { name: "Thursday", index: 4 },
        { name: "Friday", index: 5 },
        { name: "Saturday", index: 6 },
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
                                {[...Array(24)].map((_, index) => {
                                    const isSelected = selectedDay !== null && Array.isArray(selectedTimes[selectedDay]) && selectedTimes[selectedDay].includes(index);
                                    return (
                                        <button
                                            key={index}
                                            className={`${styles.optionButton} ${isSelected ? styles.selected : ""}`}
                                            onClick={() => handleTimeClick(selectedDay as number, index)}
                                        >
                                            {formatTime(index)}
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                        <button className={styles.saveButton} onClick={handleSaveClick}>
                            Save
                        </button>
                    </div>
                </div>
        </>
    );
}

export default EditTimeSlots;
