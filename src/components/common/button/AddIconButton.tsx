import { ButtonHTMLAttributes } from 'react';
import { styled } from 'styled-components';
import AddIcon from '@/public/icon/addIcon.svg';

const S = {
  Button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;

    min-width: 24rem;
    padding: 0.6rem 1rem;
    border: 1px solid ${({ theme }) => theme.color.grayLight};
    border-radius: 0.8rem;

    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.body};
    font-weight: 1.6rem;
    font-weight: 600;
  `,

  Icon: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.3rem;
    border-radius: 0.4rem;
    background-color: #f1effd;
  `,
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

/**
 * AddIconButton(공통 추가아이콘 버튼)
 *  - 플러스 모양 아이콘이 기본적으로 들어가고, 이외 라벨같은 추가적인 요소가 들어가는 아이콘 버튼
 *  - 사용하는 곳에서 필요한 스타일을 명시하여 동적으로 조정 가능
 */

function AddIconButton({ children, ...htmlButtonProps }: ButtonProps) {
  return (
    <S.Button {...htmlButtonProps}>
      {children}
      <S.Icon>
        <AddIcon />
      </S.Icon>
    </S.Button>
  );
}

export default AddIconButton;
