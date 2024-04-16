import styled from 'styled-components';

const BREAKPOINT = {
  medium: '376px',
  large: '744px',
};

const onPC = `@media only screen and (min-width: ${BREAKPOINT.medium})`;

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
  Input: styled.input<{
    usage: 'form' | 'modal';
  }>`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 35.1rem;
    height: 5rem;
    padding: 1.5rem 1.6rem;
    border-radius: 0.8rem;
    border: 1px solid ${({ theme }) => theme.color.grayLight};
    background: ${({ theme }) => theme.color.white};

    ${onPC} {
      ${({ usage }) =>
        usage === 'form'
          ? `
              width: 52rem;
              height: 5rem;
            `
          : `
              width: 48.4rem;
              height: 4.8rem;
            `}
    }

    &::placeholder {
      color: ${({ theme }) => theme.color.gray};
      font-size: 1.6rem;
      font-weight: 400;
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
 * @param usage - 해당 Input 컴포넌트가 form에서 사용되는지, modal에서 사용되는지
 * - 사용되는 곳에 따라서 사이즈가 다름
 * @param id - label, input 연결용 id (input, title ...)
 * @param type - input 타입 (email, text ...)
 * @param placeholder - placeholder
 */
