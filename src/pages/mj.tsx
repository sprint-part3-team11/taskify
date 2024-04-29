import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '@/components/common/Card';
import BackDropModal from '@/components/common/modal/BackDropModal';
import ColumnsManageModal from '@/components/common/modal/ColumnsManageModal';
import NewColumnsModal from '@/components/common/modal/NewColumnsModal';
import NewDashBoardModal from '@/components/common/modal/NewDashBoardModal';
import TeamMemberInviteModal from '@/components/common/modal/TeamMemberInviteModal';
import WarningModal from '@/components/common/modal/WarningModal';
import CardSkeleton from '@/components/dashboard/column/CardSkeleton';
import PageLayout from '@/components/template/PageLayout';

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
      <CardSkeleton />
    </PageLayout>
  );
}

export default Mj;
