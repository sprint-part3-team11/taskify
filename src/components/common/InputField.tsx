import styled from 'styled-components';
import theme from '@/styles/theme';

const onMobile = `@media only screen and (max-width: 375px)`;

const S = {
  Layout: styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  `,
  Label: styled.label`
    color: ${theme.color.black};
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  Input: styled.input`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 52rem;
    height: 5rem;
    padding: 1.5rem 1.6rem;
    border-radius: 0.8rem;
    border: 1px solid ${theme.color.grayLight};
    background: ${theme.color.white};

    ${onMobile} {
      width: 28.7rem;
      height: 4.2rem;
    }

    &::placeholder {
      color: ${theme.color.gray};
      font-family: Pretendard;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  `,
};

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
