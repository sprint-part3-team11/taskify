import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const S = {
  Layout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  `,
  Label: styled.label`
    color: ${({ theme }) => theme.color.black};
    font-size: 1.6rem;
    font-weight: 400;
  `,
  Input: styled.input`
    display: flex;
    align-items: center;
    gap: 1rem;

    width: 100%;
    padding: 1.5rem 1.6rem;
    border-radius: 0.8rem;
    border: 1px solid ${({ theme }) => theme.color.grayLight};
    background: ${({ theme }) => theme.color.white};

    &::placeholder {
      color: ${({ theme }) => theme.color.gray};
      font-size: 1.6rem;
      font-weight: 400;
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.color.purple};
    }
  `,
};

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

function InputField({ label, id, ...htmlInputProps }: InputFieldProps) {
  return (
    <S.Layout>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input id={id} {...htmlInputProps} />
    </S.Layout>
  );
}

export default InputField;
/**
 * @component
 * @param label - label 이름 (이메일, 제목 ...)
 * @param id - label, input 연결용 id (input, title ...)
 * @param type - input 타입 (email, text ...)
 * @param placeholder - placeholder
 */
