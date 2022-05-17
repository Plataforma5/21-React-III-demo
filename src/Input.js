import useInput from "./hooks/useInput";

export default function Input({ label, validation, errorMessage, className }) {
  const { error, ...data } = useInput("", validation);

  return (
    <label className={className}>
      {label}
      {error && <p>{errorMessage}</p>}
      <input type="text" name={label} placeholder="mail@prueba.com" {...data} />
    </label>
  );
}
