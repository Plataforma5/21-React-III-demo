import React from "react";

export function useInput(validate, name) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);

  function onChange({ target }) {
    setValue(target.value);
  }

  function onBlur() {
    const isValid = validate(value);
    setError(!isValid);
  }

  function onFocus() {
    setError(false);
  }

  return { value, onChange, error, onBlur, onFocus, name };
}
