import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

const appearModal = keyframes`
  0%{opacity:0.2;transform: scale(0.5);}

  100%{opacity:1;transform: scale(1);}
`;
const S = {
  ModalBackground: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  `,
  ModalContainer: styled.div`
    position: relative;

    padding: 3.2rem 2rem 2rem;
    background: ${({ theme }) => theme.color.white};
    border-radius: 0.8rem;

    animation: ${appearModal} 0.7s ease-in-out;
  `,
};

interface BackDropModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

/**
 * 백드롭 모달(기본형) - 모달이 열려있는지 확인하고, 내부 내용을 표시하고, onClose 함수를 사용하여 모달을 닫습니다.
 * @component
 * @param isOpen - 모달이 열려있는지 확인
 * @param children - 모달 내부 내용
 * @param onClose - 모달을 닫을 때 사용할 함수
 *
 */

function BackDropModal({ isOpen, children, onClose }: BackDropModalProps) {
  const [modalRoot, setModalRoot] = useState<Element | null>(null);

  useEffect(() => {
    setModalRoot(document.getElementById('modal-root'));
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return isOpen && modalRoot
    ? ReactDOM.createPortal(
        <S.ModalBackground onClick={onClose}>
          <S.ModalContainer onClick={(e) => e.stopPropagation()}>
            {children}
          </S.ModalContainer>
        </S.ModalBackground>,
        modalRoot,
      )
    : null;
}

export default BackDropModal;
