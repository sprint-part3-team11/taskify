interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
}

function InputField({ label, id, ...rest }: InputFieldProps) {
  return (
    <S.Layout>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input id={id} {...rest} />
    </S.Layout>
  );
}

export default InputField;
