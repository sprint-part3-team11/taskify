import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CircleColor from '@/components/common/CircleColor';
import NewDashBoardModal from '@/components/common/modal/NewDashBoardModal';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import dashboardsApi from '@/api/dashboards.api';
import testApi from '@/api/test.api';
import AddDashBoardIcon from '@/public/icon/addDashboardBox.svg';
import CreateByMe from '@/public/icon/creatByMe.svg';
import LogoIcon from '@/public/icon/logo.svg';
import LogoText from '@/public/icon/logoText.svg';

const S = {
  SidebarWrapper: styled.div`
    position: fixed;
    top: 0;
    z-index: 99;

    width: 30rem;
    height: 100vh;
    padding: 1.25rem 1.5rem;
    border-right: 1px solid ${({ theme }) => theme.color.grayLight};
    border-top: none;

    background-color: ${({ theme }) => theme.color.white};

    ${MEDIA_QUERIES.onTablet} {
      width: 16rem;
    }

    ${MEDIA_QUERIES.onMobile} {
      width: 6.7rem;
    }
  `,
  Logo: styled.div`
    display: flex;
    align-items: center;
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
    color: ${({ theme }) => theme.color.gray};
    margin-right: 9.5rem;
    margin-left: 0.7rem;
    font-size: 1.2rem;
    font-weight: 700;

    ${MEDIA_QUERIES.onTablet} {
      margin-right: 3.5rem;
      margin-top: 0.45rem;
    }

    ${MEDIA_QUERIES.onMobile} {
      display: none;
    }
  `,
  AddDashBoardIcon: styled(AddDashBoardIcon)`
    cursor: pointer;
    margin: 0.2rem 0 0 6rem;

    ${MEDIA_QUERIES.onTablet} {
      margin: 0.2rem 0 0 -0.2rem;
    }

    ${MEDIA_QUERIES.onMobile} {
      margin-left: 0.85rem;
    }
  `,
  DashboardItemWrapper: styled.div`
    height: 3.85rem;
    display: flex;
    align-items: center;
    margin-top: 0.85rem;
    padding: 10px;
    cursor: pointer;

    &:hover {
      border-radius: 0.55rem;
      background: var(--violet-violet-8, #f1effd);
      transition: all 0.1s ease-in-out;
    }
  `,
  DashboardItem: styled.li<{ $active: boolean }>`
    overflow: hidden;
    margin-left: 1.325rem;
    color: ${({ theme }) => theme.color.grayDark};
    font-size: 1.425rem;
    font-weight: 500;
    ${({ $active }) => $active && `font-weight: bold;`}
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;

    ${MEDIA_QUERIES.onMobile} {
      display: none;
    }
  `,
};

interface DashboardProps {
  id: string;
  color: string;
  title: string;
  createdByMe: boolean;
}

async function fetchData() {
  try {
    const response = await testApi.postSignIn({
      email: 'test@test.com',
      password: '123qwe!!!',
    });
  } catch (error) {
    console.error('로그인 에러:', error.response.data.message);
  }
}

fetchData();

function Sidebar() {
  const [dashboardData, setDashboardData] = useState<DashboardProps[]>([]);
  const [isModalOpen6, setModalOpen6] = useState(false);
  const [tempDashBoardName, setTempDashBoardName] = useState(['', '']);
  const openModal6 = () => setModalOpen6(true);
  const closeModal6 = () => setModalOpen6(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const response = await dashboardsApi.getDashboardList({
          navigationMethod: 'infiniteScroll',
          page: 1,
          size: 30,
        });
        console.log('데이터:', response.data.dashboards);
        setDashboardData(response.data.dashboards);
      } catch (error) {
        console.error('에러:', error.response.data.message);
        setDashboardData([]);
      }
    };
    fetchData2();
  }, []);

  const createdDashBoard = (name: string, color: string) => {
    setTempDashBoardName([name, color]);
    setModalOpen6(false);
  };

  useEffect(() => {}, [tempDashBoardName]);

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
        <S.AddDashBoardIcon onClick={openModal6} />
      </S.AddDashBoard>
      <ul>
        {dashboardData.map((dashboard) => (
          <S.DashboardItemWrapper
            key={dashboard.id}
            onClick={() => handleDashboardClick(dashboard.id)}
          >
            <CircleColor color={dashboard.color} />
            <S.DashboardItem
              $active={dashboard.id === router.query.dashboardId}
            >
              {dashboard.title} {dashboard.createdByMe && <CreateByMe />}
            </S.DashboardItem>
          </S.DashboardItemWrapper>
        ))}
        <NewDashBoardModal
          isOpen={isModalOpen6}
          onClose={closeModal6}
          onCreate={createdDashBoard}
        />
      </ul>
    </S.SidebarWrapper>
  );
}

export default Sidebar;
