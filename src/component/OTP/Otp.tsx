import { useEffect, useRef, useState } from "react";
import styles from "./Otp.module.css";

interface Props {
  length: number;
  prefilled?: string;
}
const Otp = ({ length, prefilled }: Props) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [values, setValues] = useState("");
  const arr = Array.from({ length });
  useEffect(() => {
    if (prefilled) {
      setValues(prefilled);
      inputRefs.current[inputRefs.current.length-1].focus();
    }
  }, [prefilled]);
  function handleChange(index: number) {
    if (index + 1 >= length) {
      setValues((prevVal) => {
        return prevVal.concat(inputRefs.current[index].value);
      });
      console.log("out front")
      return;
    } else {
      setValues((prevVal) => {
        return prevVal.concat(inputRefs.current[index].value);
      });
      inputRefs.current[index + 1].focus();
      inputRefs.current[index + 1].select();
    }
  }
  
  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) {
    if (e.key === "Backspace") {
      if (index-1 < 0) {
        setValues((prevVal) => {
          return prevVal.substring(0, prevVal.length - 1);
        });
        console.log("out back")
        return;
      } else {
        e.preventDefault();
        setValues((prevVal) => {
          return prevVal.substring(0, prevVal.length - 1);
        });
        inputRefs.current[index - 1].focus();
        inputRefs.current[index - 1].select();
      }
    }
  }
  function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
    e.preventDefault();
    const otpString = (e.clipboardData || window.Clipboard).getData("text");
    setValues(otpString);
  }
  const otpValue = values.split("");
  return (
    <>
      {arr.map((inputEl, index) => (
        <input
          maxLength={1}
          className={styles.inputField}
          autoFocus={index === 0}
          ref={(refer) => {
            if (refer) {
              inputRefs.current[index] = refer;
            }
          }}
          key={index}
          value={index < otpValue.length ? otpValue[index]: ""}
          onPaste={handlePaste}
          onChange={() => handleChange(index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
      <p>{values}</p>
    </>
  );
};

export default Otp;
