import { useState } from 'react';
import styled from 'styled-components';
import BackDropModal from '@/components/common/Modal/BackDropModal';

const S = {
  Text: styled.p`
    color: var(--black-black_333236, #333236);
    text-align: center;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `,
  Button: styled.button`
    display: flex;
    width: 12rem;
    height: 4.8rem;
    padding: 1.4rem 4.6rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;
    border-radius: 0.8rem;
    background: var(--violet-violet_5534DA, #5534da);

    color: var(--white-white_FFFFFF, #fff);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `,
};

function PasswordWarnModal({ isOpen, onClose }: any) {
  return (
    <BackDropModal isOpen={isOpen} onClose={onClose}>
      <S.Text>비밀번호가 일치하지 않습니다.</S.Text>
      <S.Button onClick={onClose}>취소</S.Button>
    </BackDropModal>
  );
}

export default PasswordWarnModal;
