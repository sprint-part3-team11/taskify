import styled from 'styled-components';
import Card from '@/components/common/Card';
import PageLayout from '@/components/common/PageLayout';
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
// 테스트용 배열
const dashboards = [
  { id: '1', color: '#FFA500', name: '대시보드 1', createdByMe: true },
  { id: '2', color: '#FF2660', name: '대시보드 2', createdByMe: true },
  { id: '3', color: '#7AC555', name: '대시보드 3', createdByMe: false },
];

const S = {
  Column: styled.div`
    height: calc(100vh - 7rem);
    width: 35.4rem;
    background-color: aqua;
    overflow-y: scroll;

    // Chrome, Edge, Safari
    &::-webkit-scrollbar {
      display: none;
    }
    // Firefox
    scrollbar-width: none;
    // IE and Edge (Legacy)
    -ms-overflow-style: none;
  `,
  ColumnTitleContainer: styled.div`
    display: flex;
    margin: 2rem 2rem 0rem;
  `,
  ColumnTitleWrapper: styled.div`
    display: flex;
  `,
  ColumnTitleIconWrapper: styled.div`
    display: flex;
    width: 1.6rem;
    height: 2rem;
    background-color: antiquewhite;
    align-items: center;
  `,
  ColumnTitleDotIcon: styled.div`
    /* fill: var(--violet-violet_5534DA, #5534da); */
    background-color: ${({ theme }) => theme.color.main};
    width: 0.8rem;
    height: 0.8rem;
    margin: 0 auto;
    border-radius: 50%;
    /* justify-content: center; */

    /* flex-shrink: 0; */
  `,
  ColumnTitle: styled.div`
    display: flex;
    height: 2rem;
    padding-top: 0.4rem;
    background-color: lightblue;
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
  `,
  ColumnContentBox: styled.div`
    display: flex;
    flex-direction: column;
    margin: 1.6rem 2rem 2rem;
    gap: 1.6rem;
  `,
};

export default function DashBoard() {
  return (
    <PageLayout>
      <S.Column>
        <S.ColumnTitleContainer>
          <S.ColumnTitleWrapper>
            <S.ColumnTitleIconWrapper>
              <S.ColumnTitleDotIcon />
            </S.ColumnTitleIconWrapper>
            <S.ColumnTitle>TO DO</S.ColumnTitle>
            <S.ColumnTaskNumber>3</S.ColumnTaskNumber>
          </S.ColumnTitleWrapper>
          <SettingIcon />
        </S.ColumnTitleContainer>

        <S.ColumnContentBox>
          <Card cardInfoData={cardInfoData} />
          <Card cardInfoData={cardInfoData} />
          <Card cardInfoData={cardInfoData} />
          <Card cardInfoData={cardInfoData} />
          <Card cardInfoData={cardInfoData} />
          <Card cardInfoData={cardInfoData} />
          <Card cardInfoData={cardInfoData} />
        </S.ColumnContentBox>
      </S.Column>
      {/* <Card cardInfoData={cardInfoData} /> */}
    </PageLayout>
    // <Sidebar dashboards={dashboards} />
  );
}
