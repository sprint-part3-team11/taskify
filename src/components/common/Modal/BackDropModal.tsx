import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const S = {
  ModalBackground: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  `,
  ModalContent: styled.div`
    padding: 20px;
    background: ${({ theme }) => theme.color.white};
    border-radius: 8px;
    z-index: 1000;
  `,
};

interface BackDropModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

export const BackDropModal: React.FC<BackDropModalProps> = ({
  isOpen,
  children,
  onClose,
}) => {
  return <div>modal</div>;
};
