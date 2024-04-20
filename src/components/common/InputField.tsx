import React from 'react';
import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const S = {
  Layout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1.6rem;
  `,
  Label: styled.label`
    color: ${({ theme }) => theme.color.body};
    font-size: 1.6rem;
  `,
  Input: styled.input<{ error?: boolean }>`
    display: flex;
    align-items: center;
    margin: 0.8rem 0;
    gap: 1rem;

    width: 100%;
    padding: 1.5rem 1.6rem;
    border-radius: 0.8rem;
    border: 1px solid
      ${({ error, theme }) => (error ? theme.color.red : theme.color.grayLight)};
    background: ${({ theme }) => theme.color.white};

    &::placeholder {
      color: ${({ theme }) => theme.color.gray};
      font-size: 1.6rem;
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.color.purple};
    }
  `,
};

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: boolean;
}

/**
 * @component
 * @param label - label 이름 (이메일, 제목 ...)
 * @param id - label, input 연결용 id (input, title ...)
 * @param type - input 타입 (email, text ...)
 * @param placeholder - placeholder
 */

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, id, error, ...htmlInputProps }, ref) => {
    return (
      <S.Layout>
        <S.Label htmlFor={id}>{label}</S.Label>
        <S.Input ref={ref} id={id} error={error} {...htmlInputProps} />
      </S.Layout>
    );
  },
);

// InputField.displayName = 'InputField'; // 디버깅을 위해 displayName 설정

export default InputField;
