import React from "react";
import { ErrorMessage, useField } from "formik";
import PropTypes from "prop-types";

export const TextField = ({ label, hint, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label>{label}</label>
      <input
        className={`form-control rounded-pill shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <div className="hint">{hint}</div>
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
};
