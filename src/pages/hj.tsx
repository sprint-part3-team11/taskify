import styled from 'styled-components';
import SideBar from '@/components/common/DashBoardHeader/SideBar';
import DashBoardHeader from '@/components/common/DashBoardHeader/index';
import CardConfirmModal from '@/components/common/Modal/card-confirm/CardConfirmModal';
import HashTag from '@/components/common/tag/HashTag';
import StateTag from '@/components/common/tag/StateTag';
import '@/styles/GlobalStyle';

function hj() {
  const stateTags = ['To Do', 'On Progress', 'Done'];
  const isMobile = false;
  const hashTag = ['프로젝트', '프론트엔드', '어려워'];
  const MY_IMAGE_URL = 'https://i.ibb.co/ysRQMyj/me.jpg';
  const invitedUsers = [
    'https://i.ibb.co/kgykYbx/Ellipse-40.png',
    'https://i.ibb.co/tPyNYb1/Ellipse-38.png',
    'https://i.ibb.co/VgZHtYL/Ellipse-39.png',
  ];
  const cardInfoData = {
    id: 0,
    title: '새로운 일정 관리 Taskify',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus nibh arcu, quis consequat ante cursus eget. Cras mattis, nulla non laoreet porttitor, diam justo laoreet eros, vel aliquet diam elit at leo.',
    tags: ['To Do'],
    dueDate: '2022.12.30 19:00',
    assignee: {
      profileImageUrl: 'https://i.ibb.co/ysRQMyj/me.jpg',
      nickname: 'jun',
      id: 0,
    },
    imageUrl: 'https://placehold.co/450x260',
    teamId: '3',
    columnId: 0,
    createdAt: '2024-04-17T07:10:28.745Z',
    updatedAt: '2024-04-17T07:10:28.745Z',
  };

  const S = {
    Container: styled.div`
      position: relative;
    `,
  };
  return (
    <S.Container>
      {/* <DashBoardHeader
        menuName={'내 대시보드'}
        profileName={'남현준'}
        profileImgURL={MY_IMAGE_URL}
        invitedUsers={invitedUsers}
      /> */}
      {/* <div>
        {stateTags.map((tag, index) => (
          <StateTag isMobile={isMobile}>{tag}</StateTag>
        ))}
        {hashTag.map((tag, index) => (
          <HashTag index={index} isMobile={isMobile}>
            {tag}
          </HashTag>
        ))}
      </div> */}
      {/* <SideBar /> */}
      <CardConfirmModal cardInfoData={cardInfoData} />
    </S.Container>
  );
}

export default hj;
