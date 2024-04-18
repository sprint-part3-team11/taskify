import Sidebar from '@/components/common/SideBar';

const dashboards = [
  { id: '1', color: '#FFA500', name: '대시보드 1', createdByMe: true },
  { id: '2', color: '#FF2660', name: '대시보드 2', createdByMe: true },
  { id: '3', color: '#7AC555', name: '대시보드 3', createdByMe: false },
];

function mypage() {
  return (
    <>
      <Sidebar dashboards={dashboards} />
    </>
  );
}

export default mypage;
