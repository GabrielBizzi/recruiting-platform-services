import React, { InputHTMLAttributes } from "react";
import checkbox_style from "../styles/components/checkbox.module.scss";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const CheckBox: React.FC<CheckboxProps> = ({ name, ...rest }) => {
  return (
    <>
      <input
        className={checkbox_style.inpCbx}
        id={name}
        type="checkbox"
        style={{ display: "none" }}
      />
      <label className={checkbox_style.cbx} htmlFor={name}>
        <span>
          <svg width="12px" height="10px" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
      </label>
    </>
  );
};

export default CheckBox;
