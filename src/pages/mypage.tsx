import styled from 'styled-components';
import PageLayout from '@/components/common/PageLayout';
import Sidebar from '@/components/common/SideBar';
import BackButton from '@/components/my-page/BackButton';
import MypageHeader from '@/components/my-page/MypageHeader';
import PasswordChange from '@/components/my-page/PasswordChange';
import ProfileChange from '@/components/my-page/ProfileChange';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

// 테스트용 배열
const dashboards = [
  { id: '1', color: '#FFA500', name: '대시보드 1', createdByMe: true },
  { id: '2', color: '#FF2660', name: '대시보드 2', createdByMe: true },
  { id: '3', color: '#7AC555', name: '대시보드 3', createdByMe: false },
];

const S = {
  Container: styled.div`
    display: flex;
  `,
  Side: styled(Sidebar)`
    flex: 0 0 auto;
  `,
  ContentContainer: styled.div`
    flex: 1;
  `,
  ContentBox: styled.div`
    height: 101rem;
    padding: 2rem 0 0 2rem;
    background-color: ${({ theme }) => theme.color.background};

    ${MEDIA_QUERIES.onTablet} {
      height: 111rem;
    }
  `,
};

function mypage() {
  return (
    <PageLayout myPage>
      <S.Container>
        {/* <S.Side dashboards={dashboards} /> */}
        <S.ContentContainer>
          {/* <MypageHeader name="공주들" /> */}
          <S.ContentBox>
            <BackButton />
            <ProfileChange name="공주들" />
            <PasswordChange />
          </S.ContentBox>
        </S.ContentContainer>
      </S.Container>
    </PageLayout>
  );
}

export default mypage;
