import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./dateandtime.module.scss";
import MultipleSelect from "../choose/Choose";
import _ from "lodash";

function Dateandtime() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedTimes, setSelectedTimes] = useState<Record<string, string[]>>({});

  const handleDayClick = (day: string) => {
    setSelectedDay(selectedDay === day ? null : day);
  };

  const handleTimeClick = (day: string, time: string) => {
    const dayTimes = selectedTimes[day] || [];
    if (dayTimes.includes(time)) {
      const updatedTimes = dayTimes.filter((t: string) => t !== time);
      setSelectedTimes({ ...selectedTimes, [day]: updatedTimes });
    } else {
      const updatedTimes = [...dayTimes, time];
      setSelectedTimes({ ...selectedTimes, [day]: updatedTimes });
    }
  };

  const handleSaveClick = () => {
    console.log(selectedTimes);
  };

  return (
    <>
      <main>
        <div className={styles.selectContainer}>
          <label className={styles.selectLabel}>Select date and time:</label>
          <div className={styles.selectWrapper}>
            <div className={styles.weekDaysContainer}>
              {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
                <button
                  key={day}
                  className={`${styles.weekDayButton} ${selectedDay === day ? styles.selected : ""}`}
                  onClick={() => handleDayClick(day)}
                >
                  {day}
                </button>
              ))}
            </div>
            {selectedDay && (
              <div className={styles.optionsContainer}>
                {[...Array(24)].map((_, index) => {
                  const hour = index === 0 ? 12 : index > 12 ? index - 12 : index;
                  const amPm = index >= 12 ? "pm" : "am";
                  const formattedTime = `${hour}:00 ${amPm}`;
                  const isSelected = selectedDay && Array.isArray(selectedTimes[selectedDay]) && selectedTimes[selectedDay].includes(formattedTime);
                  return (
                    <button
                      key={index}
                      className={`${styles.optionButton} ${isSelected ? styles.selected : ""}`}
                      onClick={() => handleTimeClick(selectedDay, formattedTime)}
                    >
                      {formattedTime}
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
      </main>
    </>
  );
}

export default Dateandtime;
