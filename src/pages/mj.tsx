import React, { useState } from 'react';
import styled from 'styled-components';
import BackDropModal from '@/components/common/modal/BackDropModal';
import PasswordWarnModal from '@/components/common/modal/PasswordWarnModal';

const S = {
  Button: styled.button`
    border: 1px solid black;
    background-color: yellow;
    padding: 30px;
  `,
};

function mj() {
  const [inputValue, setInputValue] = useState('');

  const [isModalOpen1, setModalOpen1] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);

  const openModal1 = () => setModalOpen1(true);
  const openModal2 = () => setModalOpen2(true);
  const closeModal1 = () => setModalOpen1(false);
  const closeModal2 = () => setModalOpen2(false);

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputValue !== '1234') {
      setModalOpen2(true);
    } else {
      setModalOpen2(false);
    }
  };

  return (
    <div>
      <S.Button onClick={openModal1}>1번 모달</S.Button>
      <S.Button onClick={openModal2}>2번 모달</S.Button>

      <BackDropModal isOpen={isModalOpen1} onClose={closeModal1}>
        <h1>내가 모달이다</h1>
        <p>나도 모달이다~~~~~~</p>
        <button onClick={closeModal1}>모달 닫기</button>
      </BackDropModal>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">1234입력(틀리면 모달나옴)</button>
      </form>

      <PasswordWarnModal isOpen={isModalOpen2} onClose={closeModal2} />
    </div>
  );
}

export default mj;
