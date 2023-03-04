import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/profile.module.scss";
import Skill from "./skills";

function Dateandtime() {
  return (
    <>
      <main>
        <div>
          <h4>Select date and time:</h4>
          <input
            style={{
              borderRadius: "8px",
              padding: "10px 10px",
              borderColor: "rgba(0, 225, 255, 0.316)",
            }}
            type="date"
            id="start"
            name="trip-start"
            min="2018-01-01"
            max="2023-12-31"
          />
        </div>
        <div>
          <button>save</button>
        </div>
      </main>
    </>
  );
}

export default Dateandtime;
