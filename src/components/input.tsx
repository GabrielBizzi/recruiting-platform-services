import input_style from "./../styles/components/input.module.scss";
import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <>
      <div className={input_style.inputGroup}>
        <label htmlFor={name}>{label}</label>
        <input id={name} type="text" {...rest} />
      </div>
    </>
  );
};

export default Input;
