import React, { useRef } from 'react';
import styled from 'styled-components';
import Card from '@/components/common/Card';
import AddIconButton from '@/components/common/button/AddIconButton';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
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
    /* height: calc(100vh - 7rem); */
    height: calc(100vh - 7rem - 1.5rem);
    min-width: 35.4rem;
    /* padding: 2rem; */
    /* background-color: aqua; */
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
      height: 45.5rem;
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
    /* padding-bottom: 0.8rem; */
    /* margin: 2rem 2rem 0rem; */

    /* ${MEDIA_QUERIES.onTablet} {
      border
    } */
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
    /* background-color: antiquewhite; */
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
    /* background-color: lightblue; */
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
};

const Column = React.forwardRef(({ title }, ref) => {
  // const containerRef = useRef(null);
  // const scrollbarRef = useRef(null);

  // const handleScrollbar = (e) => {
  //   const container = containerRef.current;
  //   const scrollbar = scrollbarRef.current;
  //   const scrollPercentage = e.clientY / container.offsetHeight;
  //   container.scrollTop = scrollPercentage * container.scrollHeight;
  // };

  return (
    <S.Column ref={ref}>
      <S.ColumnTopFixedContent>
        <S.ColumnTitleContainer>
          <S.ColumnTitleWrapper>
            <S.ColumnTitleIconWrapper>
              <S.ColumnTitleDotIcon />
            </S.ColumnTitleIconWrapper>
            <S.ColumnTitle>{title}</S.ColumnTitle>
            <S.ColumnTaskNumber>3</S.ColumnTaskNumber>
          </S.ColumnTitleWrapper>
          <SettingIcon />
        </S.ColumnTitleContainer>
        {/* 카드 데이터 추가 로직 추가 예정 */}
        {/* <S.AddButton onClick={}/> */}
        <S.AddButton />
      </S.ColumnTopFixedContent>

      {/* <S.ColumnContentContainer ref={containerRef}> */}
      <S.ColumnContentContainer>
        <Card cardInfoData={cardInfoData} />
        {/* <Card cardInfoData={cardInfoData} /> */}
        {/* <Card cardInfoData={cardInfoData} /> */}
        {/* <Card cardInfoData={cardInfoData} /> */}
        {/* <Card cardInfoData={cardInfoData} /> */}
        {/* <Card cardInfoData={cardInfoData} /> */}
        {/* <Card cardInfoData={cardInfoData} /> */}
      </S.ColumnContentContainer>
      {/* <S.Scrollbar ref={scrollbarRef} onMouseDown={handleScrollbar} /> */}
    </S.Column>
  );
});

export default Column;
