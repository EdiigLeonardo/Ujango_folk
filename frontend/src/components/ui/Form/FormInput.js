import React from "react";
import "./FormInput.scss";

function FormInput(props) {
  const { label, type = "text", name, handleFormChange } = props;

  return (
    <div className="form">
      <input
        type={type}
        className="form__input  rounded form-control"
        name={name}
        onChange={handleFormChange}
        id={label}
        placeholder=" "
      />
      <label htmlFor={label} className="form__label">
        {label}
      </label>
    </div>
  );
}

export default FormInput;
