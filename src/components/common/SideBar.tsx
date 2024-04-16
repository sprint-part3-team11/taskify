import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

const S = {
  SidebarWrapper: styled.div`
    background-color: #f0f0f0;
    width: 200px;
    height: 100vh;
    padding: 20px;
  `,
  Logo: styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    cursor: pointer;
  `,
  DashboardItem: styled.li<{ active: boolean }>`
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 16px;
    ${({ active }) => active && `font-weight: bold;`}
  `,
};

interface DashboardProps {
  id: string;
  name: string;
}

interface SidebarProps {
  dashboards: DashboardProps[];
}

const Sidebar: React.FC<SidebarProps> = ({ dashboards }) => {
  const router = useRouter();
  const [updatedDashboards, setUpdatedDashboards] =
    useState<DashboardProps[]>(dashboards);

  const handleLogoClick = () => {
    router.push('/');
  };

  const handleDashboardClick = (dashboardId: string) => {
    router.push(`/dashboard/${dashboardId}`);
  };

  return (
    <S.SidebarWrapper>
      <S.Logo onClick={handleLogoClick}>로고</S.Logo>
      <ul>
        {updatedDashboards.map((dashboard) => (
          <S.DashboardItem
            key={dashboard.id}
            active={dashboard.id === router.query.dashboardId}
            onClick={() => handleDashboardClick(dashboard.id)}
          >
            {dashboard.name} {dashboard.id === router.query.dashboardId && '👑'}
          </S.DashboardItem>
        ))}
      </ul>
      {/* 여기에 모달 추가  */}
    </S.SidebarWrapper>
  );
};

export default Sidebar;
