import { Fragment, useEffect, useRef, useState } from "react";
import { countTotalBoxes } from "./util";
import "./GreenLight.css";

interface GreenLightProp {
  shapeArray: Array<boolean[]>;
}
const GreenLight = ({ shapeArray }: GreenLightProp) => {
  const totalBoxes = countTotalBoxes(shapeArray);
  const [allMarked, setAllMarked] = useState(false); //remove state
  const buttonRef = useRef<HTMLButtonElement[]>([]);
  const clickSequence = useRef<HTMLButtonElement[]>([]);
  const [clickedBoxes, setClickedBoxes] = useState(0);
  function handleClick(index: number) {
    if (clickedBoxes === totalBoxes - 1) {
      setAllMarked(true);
    }
    setClickedBoxes((prev) => prev + 1);
    const buttonEl = buttonRef.current[index];
    buttonEl.style.backgroundColor = "green";
    buttonEl.disabled = true; //dont mutate DOM
    clickSequence.current.push(buttonEl);
  }
  useEffect(() => {
    if (allMarked && clickedBoxes > 0) {
      setTimeout(() => {
        setClickedBoxes((prev) => {
          const leftBoxes = prev - 1;
          clickSequence.current[leftBoxes].style.backgroundColor = "#f5f5dc";
          return leftBoxes;
        });
      }, 1000);
    }
  }, [allMarked, clickedBoxes]);
  return (
    <div className="grid">
      {shapeArray.map((row, rowIndex) => (
        <Fragment key={rowIndex}>
          {row.map((box, colIndex) => (
            <button
              onClick={() => handleClick(rowIndex + colIndex + 3 * rowIndex)}
              ref={(refer) => {
                if (refer) {
                  buttonRef.current.push(refer);
                }
              }} // remove ref
              key={rowIndex + colIndex + 3 * rowIndex}
              className={box ? "box" : "empty"}
              disabled={box ? false : true}
            >
              {undefined}
            </button>
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default GreenLight;
