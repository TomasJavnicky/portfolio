import React from "react";
import "./MyInput.css";

interface Props {
  onChange: (text: string) => void;
}

const MyInput: React.FC<Props> = ({ onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <input
        className="input"
        type="text"
        placeholder="Add thing to do..."
        onChange={handleChange}
      />
    </div>
  );
};

export default MyInput;
