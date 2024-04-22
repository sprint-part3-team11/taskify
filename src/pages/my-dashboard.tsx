import { styled } from 'styled-components';
import DashBoardList from '@/components/dashboard/my-board/DashBoardList';
import InvitedDashBoardList from '@/components/dashboard/my-board/InvitedDashBoardList';
import PageLayout from '@/components/template/PageLayout';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

const S = {
  Container: styled.div`
    padding: 4rem;
    /* height: 100%; */

    ${MEDIA_QUERIES.onMobile} {
      padding: 2.4rem;
    }
  `,

  InnerWrap: styled.div`
    max-width: 102rem;
  `,
};

function mydashboard() {
  return (
    <PageLayout>
      <S.Container>
        <S.InnerWrap>
          <DashBoardList />
          <InvitedDashBoardList />
        </S.InnerWrap>
      </S.Container>
    </PageLayout>
  );
}

export default mydashboard;
