import React, { useState } from 'react';
import { ColorSelector } from '../common/ColorSelector';
import InputField from '../common/InputField';
import Button from '../common/button/Button';
import styled from 'styled-components';

const dashboardData = {
  id: 0,
  title: '프로젝트',
  color: 'red',
  createdAt: '2024-04-20T06:58:07.454Z',
  updatedAt: '2024-04-20T06:58:07.454Z',
  createdByMe: true,
  userId: 0,
};

const S = {
  ContentBox: styled.div`
    width: 62rem;
    height: 25.6rem;
    background-color: ${({ theme }) => theme.color.white};
  `,

  DashboardName: styled.div``,

  TitleInput: styled(InputField)``,
};

function NameAndColorChangeBox() {
  const [dashboardName, setDashboardName] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDashboardName(e.target.value);
  };

  return (
    <S.ContentBox>
      <S.DashboardName>{dashboardData.title}</S.DashboardName>
      <ColorSelector />
      <S.TitleInput
        label="대시보드 이름"
        id="dashboardName"
        placeholder="대시보드 이름을 입력하세요."
        value={dashboardName}
        onChange={handleInputChange}
      />
      <Button size="S">변경</Button>
    </S.ContentBox>
  );
}
export default NameAndColorChangeBox;
