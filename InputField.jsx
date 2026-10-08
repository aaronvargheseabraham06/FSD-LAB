function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error
}) {
  return (
    <div className="form-group">
      <label>{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default InputField;