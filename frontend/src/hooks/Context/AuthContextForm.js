import React from "react";

const FormContext = React.createContext({
  form: {},
  handleFormChange: () => {},
});

export default FormContext;
