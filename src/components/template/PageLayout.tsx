import styled from 'styled-components';
import Sidebar from '@/components/common/SideBar';
import DashBoardHeader from '@/components/dashboard/DashBoardHeader';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

const S = {
  LayoutContainer: styled.div`
    overflow: auto;

    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.background};

    &::-webkit-scrollbar {
      display: none;
    }
  `,
  BodyContainer: styled.div`
    padding: 7rem 0 0 30rem;

    ${MEDIA_QUERIES.onTablet} {
      padding-left: 16rem;
    }

    ${MEDIA_QUERIES.onMobile} {
      padding: 6rem 0 0 6.7rem;
    }
  `,
};

function PageLayout({
  children,
  myPage,
  openInviteModal,
}: {
  children: React.ReactNode;
  openInviteModal?: () => void;
  myPage: boolean;
}) {
  return (
    <S.LayoutContainer>
      <Sidebar />
      <DashBoardHeader myPage={myPage} />
      <S.BodyContainer>{children}</S.BodyContainer>
    </S.LayoutContainer>
  );
}

export default PageLayout;
