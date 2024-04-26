import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Card from '@/components/common/Card';
import AddIconButton from '@/components/common/button/AddIconButton';
import ColumnsManageModal from '@/components/common/modal/ColumnsManageModal';
import ToDoCreateModal from '@/components/common/modal/ToDoCreateModal';
import useCardListQuery from '@/hooks/query/cards/useCardListQuery';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import columnsApi from '@/api/columns.api';
import SettingIcon from '@/public/icon/settingIcon.svg';

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

const S = {
  DashBoardWrapper: styled.div`
    display: flex;

    ${MEDIA_QUERIES.onTablet} {
      display: block;
    }
  `,
  Column: styled.div`
    height: calc(100vh - 7rem);
    min-width: 35.4rem;

    overflow-y: scroll;

    border-right: ${({ theme }) => theme.border.lightGray};
    border-bottom: ${({ theme }) => theme.border.lightGray}; // 구분선 추가

    // Chrome, Edge, Safari
    &::-webkit-scrollbar {
      display: none;
    }
    // Firefox
    scrollbar-width: none;
    // IE and Edge (Legacy)
    -ms-overflow-style: none;

    ${MEDIA_QUERIES.onTablet} {
      width: 100%;
      /* height: 45.5rem; */
      height: 100%;
    }
    ${MEDIA_QUERIES.onMobile} {
      width: 100%;
      /* height: 30rem; */
      height: 100%;
      overflow-y: auto;
    }
  `,
  ColumnTopFixedContent: styled.div`
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: ${({ theme }) => theme.color.background};
    padding: 2rem 2rem 0.8rem;
  `,
  ColumnTitleContainer: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  ColumnTitleWrapper: styled.div`
    display: flex;
  `,
  ColumnTitleIconWrapper: styled.div`
    display: flex;
    width: 1.6rem;
    height: 2rem;
    align-items: center;
  `,
  ColumnTitleDotIcon: styled.div`
    background-color: ${({ theme }) => theme.color.main};
    width: 0.8rem;
    height: 0.8rem;
    margin: 0 auto;
    border-radius: 50%;
  `,
  ColumnTitle: styled.div`
    display: flex;
    height: 2rem;
    padding-top: 0.4rem;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 700;
  `,
  ColumnTaskNumber: styled.div`
    display: flex;
    height: 2rem;

    margin-left: 1.2rem;
    padding: 0.3rem 0.6rem 0.1rem;
    background-color: ${({ theme }) => theme.color.grayLight};

    border-radius: 0.4rem;
  `,
  AddButton: styled(AddIconButton)`
    margin: 2.5rem 0rem 0rem;
    width: 100%;
  `,
  ColumnContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.8rem 0rem 2rem 0rem;
    padding: 0rem 2rem;
    gap: 1.6rem;
  `,
  Scrollbar: styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 10px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    cursor: pointer;
  `,
  SettingIcon: styled(SettingIcon)`
    cursor: pointer;
  `,
};

const Column = React.forwardRef(({ title, id, dashboardId }, ref) => {
  const [isModalOpen1, setModalOpen1] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);
  const openModal1 = () => setModalOpen1(true);
  const openModal2 = () => setModalOpen2(true);
  const closeModal1 = () => setModalOpen1(false);
  const closeModal2 = () => setModalOpen2(false);

  const [tempColumnName, setTempColumnName] = useState(title);
  const [cardList, setCardList] = useState([]);
  const { data: cards } = useCardListQuery({ columnId: id });
  // console.log(cards?.data);

  const handleChange = async (columnName: string) => {};

  const handleDelete = () => {
    // delete
  };

  return (
    <S.Column ref={ref}>
      <S.ColumnTopFixedContent>
        <S.ColumnTitleContainer>
          <S.ColumnTitleWrapper>
            <S.ColumnTitleIconWrapper>
              <S.ColumnTitleDotIcon />
            </S.ColumnTitleIconWrapper>
            <S.ColumnTitle>{title}</S.ColumnTitle>
            <S.ColumnTaskNumber>{cards?.data.totalCount}</S.ColumnTaskNumber>
          </S.ColumnTitleWrapper>
          <S.SettingIcon onClick={openModal2} />
        </S.ColumnTitleContainer>
        <S.AddButton onClick={openModal1} />
      </S.ColumnTopFixedContent>

      <ToDoCreateModal
        dashboardId={dashboardId}
        isOpen={isModalOpen1}
        onClose={closeModal1}
      />
      <ColumnsManageModal
        isOpen={isModalOpen2}
        onClose={closeModal2}
        currentColumnName={tempColumnName}
        onChange={handleChange}
        onDelete={handleDelete}
      />

      <S.ColumnContentContainer>
        {cards?.data.cards.map((card, index) => (
          <Card key={card.id} cardId={card.id} />
        ))}
      </S.ColumnContentContainer>
    </S.Column>
  );
});

export default Column;
