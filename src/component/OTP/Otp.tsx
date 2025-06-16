import { useRef } from "react";

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
  return (
    <>
      {arr.map((inputEl, index) => (
        <input
          autoFocus={index === 0}
          ref={(refer) => {
            if (refer) {
              inputRefs.current[index] = refer;
            }
          }}
          key={index}
          onChange={() => handleChange(index)}
          onKeyDown={(e)=>handleKeyDown(e,index)}
        />
      ))}
    </>
  );
};

export default Otp;
