import styled from 'styled-components';
import Sidebar from '@/components/common/SideBar';
import BackButton from '@/components/my-page/BackButton';
import PasswordChange from '@/components/my-page/PasswordChange';
import ProfileChange from '@/components/my-page/ProfileChange';
import PageLayout from '@/components/template/PageLayout';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

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
        <S.ContentContainer>
          <S.ContentBox>
            <BackButton />
            <ProfileChange />
            <PasswordChange />
          </S.ContentBox>
        </S.ContentContainer>
      </S.Container>
    </PageLayout>
  );
}

export default mypage;
