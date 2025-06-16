import { useRef } from "react";
import styles from "./Otp.module.css";

interface Props {
  length: number;
}
const Otp = ({ length }: Props) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const arr = Array.from({ length });
  function handleChange(index: number) {
    if (index+1 >= length) {
      return;
    } else {
      inputRefs.current[index + 1].focus();
    }
  }
  function handleKeyDown(e:React.KeyboardEvent<HTMLInputElement>,index:number){
    if(e.key === "Backspace"){
      if (index-1 < 0) {
       return;
      } else {
        e.preventDefault();
        inputRefs.current[index].value = "";
        inputRefs.current[index-1].focus();
      }
    }
  }
  function handlePaste(e:React.ClipboardEvent<HTMLInputElement>){
    e.preventDefault();
    const otpString = (e.clipboardData || window.Clipboard).getData("text");
    const otpArray = otpString.split("");
    for(let i=0;i<otpArray.length;i++){
      inputRefs.current[i].value = otpArray[i];
    }
  }
  return (
    <>
      {arr.map((inputEl, index) => (
        <input
          className={styles.inputField}
          autoFocus={index === 0}
          ref={(refer) => {
            if (refer) {
              inputRefs.current[index] = refer;
            }
          }}
          key={index}
          onPaste={handlePaste}
          onChange={() => handleChange(index)}
          onKeyDown={(e)=>handleKeyDown(e,index)}
        />
      ))}
    </>
  );
};

export default Otp;
