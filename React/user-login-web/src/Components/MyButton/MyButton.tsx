import React from "react";
import "./MyButton.css";

interface Props {
  buttonText: string;
  onClick: () => void;
}

const MyButton: React.FC<Props> = ({ buttonText, onClick }) => {
  return <button onClick={onClick}>{buttonText}</button>;
};

export default MyButton;
