import React from "react";
import { useState } from "react";
import "./Form.css";
import FormContext from "../../../hooks/Context/AuthContextForm";

function Form(props) {
  const { formInitialValues } = props;
  const [form, setForm] = useState(formInitialValues);

  const handleFormChange = (event) => {
    // Get the name of the field that caused this change event
    // Get the new value of this field
    const { name, value } = event.target;

    // Assign new value to the appropriate form field
    const updatedForm = {
      ...form,
      [name]: value,
    };

    console.log("Form changed: ", updatedForm);

    // Update state
    setForm(updatedForm);
    console.log(updatedForm);
  };

  return (
    <FormContext.Provider
      value={{
        form,
        handleFormChange,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
}

export default Form;
