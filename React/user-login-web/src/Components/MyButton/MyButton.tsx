import React from "react";
import "./MyButton.css";

interface Props {
  buttonText: string;
  onClick: () => void;
  disabled: boolean;
}

const MyButton: React.FC<Props> = ({ buttonText, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {buttonText}
    </button>
  );
};

export default MyButton;
