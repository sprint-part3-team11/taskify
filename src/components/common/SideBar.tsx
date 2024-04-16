import { useRouter } from 'next/router';
import { useState } from 'react';
import CircleColor from './CircleColor';
import styled from 'styled-components';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import AddDashBoardIcon from '@/public/icon/addDashboardBox.svg';
import CreateByMe from '@/public/icon/creatByMe.svg';
import LogoIcon from '@/public/icon/logo.svg';
import LogoText from '@/public/icon/logoText.svg';

const S = {
  SidebarWrapper: styled.div`
    width: 20.75rem;
    height: 100vh;
    padding: 1.25rem 1.5rem;
    border: 1px solid ${({ theme }) => theme.color.grayLight};
    background-color: ${({ theme }) => theme.color.white};

    ${MEDIA_QUERIES.onTablet} {
      width: 15rem;
    }

    ${MEDIA_QUERIES.onMobile} {
      width: 7rem;
    }
  `,
  Logo: styled.div`
    margin-bottom: 3.75rem;
    cursor: pointer;

    ${MEDIA_QUERIES.onMobile} {
      margin-left: 0.625rem;
    }
  `,
  LogoText: styled(LogoText)`
    ${MEDIA_QUERIES.onMobile} {
      display: none;
    }
  `,
  AddDashBoard: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2.625rem;
  `,
  AddText: styled.span`
    padding-top: 3%;
    color: ${({ theme }) => theme.color.main};
    font-size: 1rem;
    font-weight: 700;
    margin-right: 9.5rem;

    ${MEDIA_QUERIES.onTablet} {
      margin-right: 3.5rem;
    }

    ${MEDIA_QUERIES.onMobile} {
      display: none;
    }
  `,
  AddDashBoardIcon: styled(AddDashBoardIcon)`
    cursor: pointer;

    ${MEDIA_QUERIES.onMobile} {
      margin-left: 0.7rem;
    }
  `,
  DashboardItemWrapper: styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    margin-top: 0.85rem;

    &:hover {
      background: var(--violet-violet-8, #f1effd);
      border-radius: 0.55rem;
    }

    ${MEDIA_QUERIES.onMobile} {
      padding: 1.25rem;
      margin-top: 0.85rem;
      margin-left: 0.2rem;
    }
  `,
  CircleColor: styled(CircleColor)``,
  DashboardItem: styled.li<{ active: boolean }>`
    cursor: pointer;
    color: ${({ theme }) => theme.color.grayDark};
    font-size: 1.425rem;
    font-weight: 500;
    ${({ active }) => active && `font-weight: bold;`}
    margin-left: 1.325rem;

    ${MEDIA_QUERIES.onMobile} {
      display: none;
    }
  `,
};

interface DashboardProps {
  id: string;
  color: string;
  name: string;
  createdByMe: boolean;
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
      <S.Logo onClick={handleLogoClick}>
        <LogoIcon />
        <S.LogoText />
      </S.Logo>
      <S.AddDashBoard>
        <S.AddText>Dash Boards</S.AddText>
        <S.AddDashBoardIcon />
      </S.AddDashBoard>
      <ul>
        {updatedDashboards.map((dashboard) => (
          <S.DashboardItemWrapper key={dashboard.id}>
            <S.CircleColor color={dashboard.color} />
            <S.DashboardItem
              active={dashboard.id === router.query.dashboardId}
              onClick={() => handleDashboardClick(dashboard.id)}
            >
              {dashboard.name} {dashboard.createdByMe && <CreateByMe />}
            </S.DashboardItem>
          </S.DashboardItemWrapper>
        ))}
      </ul>
      {/* 여기에 모달 추가 */}
    </S.SidebarWrapper>
  );
};

export default Sidebar;
