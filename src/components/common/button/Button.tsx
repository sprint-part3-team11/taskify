import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { BUTTON_TYPE } from '@/constants/BUTTON_TYPE';
import { buttonStyleBySize, buttonStyleByType } from '@/styles/buttonStyle';

const S = {
  Container: styled.button<{
    size: ButtonSize;
    $styleType: ButtonType;
  }>`
    padding: 0.5rem 1rem;
    white-space: nowrap;

    ${({ size }) => buttonStyleBySize[size]}
    ${({ $styleType }) => buttonStyleByType[$styleType]}

    &:disabled {
      background-color: ${({ theme }) => theme.color.gray};
      cursor: not-allowed;
    }
  `,
};

type ButtonType = keyof typeof BUTTON_TYPE;
type ButtonSize = 'S' | 'M' | 'L';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: ButtonSize;
  styleType?: ButtonType;
}

/**
 * Button(공통 버튼 컴포넌트)
 *  - S(모달 외), M(모달 내), L(로그인/회원가입용) size별로 다른 스타일
 *  - PRIMARY(주요, 일반), SECONDARY(취소, 거절 등 부가적인 것), DESTRUCTIVE(삭제) type별 다른 스타일
 *  - 그 외, htmlButtonProps를 두어 기타 버튼 props를 받도록 적용된 버튼 컴포넌트
 */

function Button({
  children,
  styleType = BUTTON_TYPE.PRIMARY,
  size = 'M',
  ...htmlButtonProps
}: ButtonProps) {
  return (
    <S.Container {...htmlButtonProps} size={size} $styleType={styleType}>
      {children}
    </S.Container>
  );
}

export default Button;
