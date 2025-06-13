import { useRef } from "react";

interface Props {
  length: number;
}
const Otp = ({ length }: Props) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const arr = Array.from({ length });
  function handleChange(index: number) {
    if (index+1 >= length) {
      alert('wrong otp!!!!')
    } else {
      inputRefs.current[index + 1].focus();
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
              console.log(inputRefs.current);
            }
          }}
          key={index}
          onChange={() => handleChange(index)}
        />
      ))}
    </>
  );
};

export default Otp;
