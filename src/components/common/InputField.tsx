interface InputFieldProps {
  name: string;
  type: string;
  sentence: string;
}

function InputField({ name, type, sentence }: InputFieldProps) {
  return (
    <>
      <label htmlFor="input">{name}</label>
      <input type={type} id="input" placeholder={sentence} />
    </>
  );
}

export default InputField;
