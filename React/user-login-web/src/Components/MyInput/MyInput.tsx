import React from "react";
import "./MyInput.css";

interface Props {
  placeholder: string;
  type: "text" | "password";
  onChange: (text: string) => void;
}

const MyInput: React.FC<Props> = ({ placeholder, type, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <div>
      <input type={type} placeholder={placeholder} onChange={handleChange} />
    </div>
  );
};

export default MyInput;
