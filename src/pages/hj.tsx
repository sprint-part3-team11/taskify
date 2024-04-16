import styled from 'styled-components';
import SideBar from '@/components/common/DashBoardHeader/SideBar';
import DashBoardHeader from '@/components/common/DashBoardHeader/index';
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
  const S = {
    Container: styled.div`
      position: relative;
    `,
  };
  return (
    <S.Container>
      <DashBoardHeader
        menuName={'내 대시보드'}
        profileName={'남현준'}
        profileImgURL={MY_IMAGE_URL}
        invitedUsers={invitedUsers}
      />
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
      <SideBar />
    </S.Container>
  );
}

export default hj;
