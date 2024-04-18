import { styled } from 'styled-components';
import DashBoardHeader from '@/components/common/DashBoardHeader';
import Sidebar from '@/components/common/SideBar';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

const S = {
  Container: styled.div`
    position: fixed;
    width: calc(100vw - 20.75rem);
    min-height: 100%;
    margin-left: 20.75rem;
    margin-top: 7rem;
    background-color: red;
    padding: 5rem;
    border: 5px solid black;

    ${MEDIA_QUERIES.onTablet} {
      width: calc(100vw - 15rem);
      margin-left: 15rem;
      margin-top: 7rem;
    }
    ${MEDIA_QUERIES.onMobile} {
      width: calc(100vw - 7rem);
      margin-left: 7rem;
      margin-top: 6rem;
    }
  `,
};

const dashboards = [
  { id: '1', color: '#FFA500', name: '대시보드 1', createdByMe: true },
  { id: '2', color: '#FF2660', name: '대시보드 2', createdByMe: true },
  { id: '3', color: '#7AC555', name: '대시보드 3', createdByMe: false },
];
const MY_IMAGE_URL = 'https://i.ibb.co/ysRQMyj/me.jpg';
const invitedUsers = [
  'https://i.ibb.co/kgykYbx/Ellipse-40.png',
  'https://i.ibb.co/tPyNYb1/Ellipse-38.png',
  'https://i.ibb.co/VgZHtYL/Ellipse-39.png',
];

function Layout({ children }: any) {
  return (
    <>
      <Sidebar dashboards={dashboards} />
      <DashBoardHeader
        menuName={'내 대시보드'}
        profileName={'남현준'}
        profileImgURL={MY_IMAGE_URL}
        invitedUsers={invitedUsers}
      />
      <S.Container className="내가쓸거">{children}</S.Container>
    </>
  );
}

export default Layout;
