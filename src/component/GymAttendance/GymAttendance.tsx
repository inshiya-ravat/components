import { useState } from "react";
import styles from "./GymAttendance.module.css";
import { generateGrid } from "./generateGrid";

const attendance = [4, 5, 6, 1, 2, 6, 7, 4, 2];
const GymAttendance = () => {
  const [startIndex, setStartIndex] = useState(0);
  const isPrevDisabled = startIndex === 0;
  const isNextDisabled = startIndex + 5 >= attendance.length;

  function handleNext() {
    const newStart = startIndex + 1;
    if (startIndex + 5 >= attendance.length) {
      return;
    }
    setStartIndex(newStart);
  }

  function handlePrev() {
    const newStart = startIndex - 1;
    if (newStart < 0) {
      return;
    }
    setStartIndex(newStart);
  }
  return (
    <>
      <div className={styles.grid}>
        <div className={styles.abc}>
          {generateGrid(attendance, startIndex, startIndex+5).result.map((row, rowIndex) => (
            <ul
              className={styles.row}
              key={rowIndex}
              style={{ backgroundColor: "black" }}
            >
              {row.map((cell, cellIndex) => (
                <li
                  key={`${rowIndex} ${cellIndex}`}
                  className={styles.cell}
                  style={{ backgroundColor: "rgb(154, 203, 245)" }}
                >
                  {undefined}
                </li>
              ))}
            </ul>
          ))}
          <div className={styles.days}>
            <button disabled={isPrevDisabled} onClick={handlePrev} className={styles.btn}>
              {"<"}
            </button>
            {generateGrid(attendance,startIndex,startIndex+5).days.map((day, index) => (
              <p className={styles.cell} key={index}>
                {day}
              </p>
            ))}
            <button disabled={isNextDisabled} onClick={handleNext} className={styles.btn}>
              {">"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GymAttendance;
