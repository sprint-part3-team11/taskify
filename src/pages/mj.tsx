import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '@/components/common/Card';
import PageLayout from '@/components/common/PageLayout';
import BackDropModal from '@/components/common/modal/BackDropModal';
import ColumnsManageModal from '@/components/common/modal/ColumnsManageModal';
import NewColumnsModal from '@/components/common/modal/NewColumnsModal';
import NewDashBoardModal from '@/components/common/modal/NewDashBoardModal';
import TeamMemberInviteModal from '@/components/common/modal/TeamMemberInviteModal';
import WarningModal from '@/components/common/modal/WarningModal';

const S = {
  Button: styled.button`
    border: 1px solid black;
    background-color: yellow;
    padding: 30px;
  `,
};

const cardInfoData = {
  id: 0,
  title: '새로운 일정 관리 Taskify',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus nibh arcu, quis consequat ante cursus eget. Cras mattis, nulla non laoreet porttitor, diam justo laoreet eros, vel aliquet diam elit at leo.',
  tags: ['To Do', 'onProgress', 'Done'],
  dueDate: '2022.12.30 19:00',
  assignee: {
    profileImageUrl: 'https://i.ibb.co/ysRQMyj/me.jpg',
    nickname: 'jun',
    id: 0,
  },
  imageUrl: 'https://i.ibb.co/5WsrwJY/Group-751.png',
  teamId: '3',
  columnId: 0,
  createdAt: '2024-04-17T07:10:28.745Z',
  updatedAt: '2024-04-17T07:10:28.745Z',
};

// modal 사용 설명서
function Mj() {
  const [inputValue, setInputValue] = useState('');

  const [isModalOpen1, setModalOpen1] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);
  const [isModalOpen3, setModalOpen3] = useState(false);
  const [isModalOpen4, setModalOpen4] = useState(false);
  const [isModalOpen5, setModalOpen5] = useState(false);
  const [isModalOpen6, setModalOpen6] = useState(false);

  const [tempColumnName, setTempColumnName] = useState('');
  const [tempDashBoardName, setTempDashBoardName] = useState(['', '']);

  const openModal1 = () => setModalOpen1(true);
  const openModal2 = () => setModalOpen2(true);
  const openModal3 = () => setModalOpen3(true);
  const openModal4 = () => setModalOpen4(true);
  const openModal5 = () => setModalOpen5(true);
  const openModal6 = () => setModalOpen6(true);
  const closeModal1 = () => setModalOpen1(false);
  const closeModal2 = () => setModalOpen2(false);
  const closeModal3 = () => setModalOpen3(false);
  const closeModal4 = () => setModalOpen4(false);
  const closeModal5 = () => setModalOpen5(false);
  const closeModal6 = () => setModalOpen6(false);

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };
  // 비밀번호 확인 시 틀렸을 경우 나오게 하기 위함
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputValue !== '1234') {
      setModalOpen2(true);
    } else {
      setModalOpen2(false);
    }
  };
  // 컬럼 prop으로 넘겨 받아서 사용할 때 사용할 예정
  const handleCreate = (columnName: string) => {
    // api에 post로 보내는 로직 추가해서 사용
    setTempColumnName(columnName);
    setModalOpen2(false);
  };

  // 컬럼 prop으로 넘겨 받아서 사용할 때 사용할 예정
  const handleChange = (columnName: string) => {
    // api에 post로 보내는 로직 추가해서 사용
    setTempColumnName(columnName);
    setModalOpen4(false);
  };

  // 컬럼 삭제 로직
  const handleDelete = () => {
    // delete
  };

  // 이메일 보내기 로직
  const handleEmail = (email: string) => {
    // post
  };

  // 새 column 생성시 작동하는지 확인
  useEffect(() => {
    if (tempColumnName) {
      console.log(tempColumnName);
    }
  }, [tempColumnName]);

  // 대시보드 생성(이름, 색깔)
  const createdDashBoard = (name: string, color: string) => {
    setTempDashBoardName([name, color]);
    setModalOpen6(false);
  };

  // 대시보드 생성 확인용
  useEffect(() => {
    console.log(tempDashBoardName);
  }, [tempDashBoardName]);

  return (
    <PageLayout>
      <div style={{ backgroundColor: 'gray', height: '10000px' }}>
        <S.Button onClick={openModal1}>1번 모달(기본)</S.Button>
        <S.Button onClick={openModal2}>2번 모달(비밀번호 틀림)</S.Button>
        <S.Button onClick={openModal3}>3번 모달(add column)</S.Button>
        <S.Button onClick={openModal4}>4번 모달(manage column)</S.Button>
        <S.Button onClick={openModal5}>5번 모달(invite member)</S.Button>
        <S.Button onClick={openModal6}>5번 모달(add dashboard+color)</S.Button>

        {/* 비밀번호 입력 실패 시 사용되는 형식 */}
        <form action="" onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button type="submit">1234입력(틀리면 모달나옴)</button>
        </form>

        {/* 기본 백드롭 모달 */}
        <BackDropModal isOpen={isModalOpen1} onClose={closeModal1}>
          <h1>내가 모달이다</h1>
          <p>나도 모달이다~~~~~~</p>
          <button type="button" onClick={closeModal1}>
            모달 닫기
          </button>
        </BackDropModal>

        {/* 기본 경고(비밀번호 틀리게 입력, 로그인 성공, 이미 사용중인 아이디)에 사용 */}
        {/* type에 PASSWORD, SUCCESS, ALREADY_USED 중 하나 선택 */}
        <WarningModal
          isOpen={isModalOpen2}
          onClose={closeModal2}
          type="PASSWORD"
        />

        {/* 새 컬럼 추가에 사용되는 모달 형식 */}
        <NewColumnsModal
          isOpen={isModalOpen3}
          onClose={closeModal3}
          onCreate={handleCreate}
        />

        {/* 기존의 컬럼을 수정 또는 삭제에 사용되는 모달 형식 */}
        <ColumnsManageModal
          isOpen={isModalOpen4}
          onClose={closeModal4}
          currentColumnName={tempColumnName}
          onChange={handleChange}
          onDelete={handleDelete}
        />

        {/* 팀원 초대 모달 */}
        <TeamMemberInviteModal
          isOpen={isModalOpen5}
          onClose={closeModal5}
          onCreate={handleEmail}
        />

        {/* 대시보드 생성 모달 */}
        <NewDashBoardModal
          isOpen={isModalOpen6}
          onClose={closeModal6}
          onCreate={createdDashBoard}
        />

        <Card cardInfoData={cardInfoData} />
      </div>
    </PageLayout>
  );
}

export default Mj;
