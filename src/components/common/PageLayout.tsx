import DashBoardHeader from './DashBoardHeader';
import Sidebar from './SideBar';
import styled from 'styled-components';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

const dashboards = [
  { id: '1', color: '#FFA500', name: '대시보드 1', createdByMe: true },
  { id: '2', color: '#FF2660', name: '대시보드 2', createdByMe: true },
  { id: '3', color: '#7AC555', name: '대시보드 3', createdByMe: false },
];

const S = {};
function PageLayout() {
  const MY_IMAGE_URL = 'https://i.ibb.co/ysRQMyj/me.jpg';
  const invitedUsers = [
    {
      id: 1,
      profileImageUrl: 'https://i.ibb.co/kgykYbx/Ellipse-40.png',
    },
    {
      id: 2,
      profileImageUrl: 'https://i.ibb.co/tPyNYb1/Ellipse-38.png',
    },
    {
      id: 3,
      profileImageUrl: 'https://i.ibb.co/VgZHtYL/Ellipse-39.png',
    },
  ];

  return (
    <div>
      <Sidebar dashboards={dashboards} />
      <DashBoardHeader
        menuName="내 대시보드"
        profileName="남현준"
        profileImgURL={MY_IMAGE_URL}
        invitedUsers={invitedUsers}
      />
    </div>
  );
}

export default PageLayout;
