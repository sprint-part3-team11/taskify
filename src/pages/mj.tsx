import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddNewColumnsModal from '@/components/common/modal/AddNewColumnsModal';
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
  const [isModalOpen3, setModalOpen3] = useState(false);

  const [tempColumnName, setTempColumnName] = useState('');

  const openModal1 = () => setModalOpen1(true);
  const openModal2 = () => setModalOpen2(true);
  const openModal3 = () => setModalOpen3(true);
  const closeModal1 = () => setModalOpen1(false);
  const closeModal2 = () => setModalOpen2(false);
  const closeModal3 = () => setModalOpen3(false);

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };
  //비밀번호 확인 시 틀렸을 경우 나오게 하기 위함
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputValue !== '1234') {
      setModalOpen2(true);
    } else {
      setModalOpen2(false);
    }
  };
  //컬럼 prop으로 넘겨 받아서 사용할 때 사용할 예정
  const handleCreate = (columnName: string) => {
    setTempColumnName(columnName);
    setModalOpen2(false);
  };

  //새 column 생성시 작동하는지 확인
  useEffect(() => {
    if (tempColumnName) {
      console.log(tempColumnName);
    }
  }, [tempColumnName]);

  return (
    <div>
      <S.Button onClick={openModal1}>1번 모달(기본)</S.Button>
      <S.Button onClick={openModal2}>2번 모달(비밀번호 틀림)</S.Button>
      <S.Button onClick={openModal3}>3번 모달(add column)</S.Button>

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

      <AddNewColumnsModal
        isOpen={isModalOpen3}
        onClose={closeModal3}
        onCreate={handleCreate}
      />
    </div>
  );
}

export default mj;
