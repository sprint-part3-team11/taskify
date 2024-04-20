import { styled } from 'styled-components';
import AddIconButton from '@/components/common/button/AddIconButton';
import InitialInvitedBoard from '@/components/dashboard/my-board/InitialInvitedBoard';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

const S = {
  Container: styled.div`
    padding: 4rem;
    height: 100vh;

    ${MEDIA_QUERIES.onMobile} {
      padding: 2.4rem;
    }
  `,

  InnerWrap: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    max-width: 102rem;

    background-color: ${({ theme }) => theme.color.white};
  `,
};

function mydashboard() {
  return (
    <S.Container>
      <S.InnerWrap>
        <div style={{ display: 'flex' }}>
          <AddIconButton style={{ maxWidth: '33rem', height: '7rem' }}>
            새로운 대시보드
          </AddIconButton>
          <AddIconButton style={{ maxWidth: '33rem', height: '7rem' }}>
            새로운 대시보드
          </AddIconButton>
          <AddIconButton style={{ maxWidth: '33rem', height: '7rem' }}>
            새로운 대시보드
          </AddIconButton>
        </div>

        <InitialInvitedBoard />
      </S.InnerWrap>
    </S.Container>
  );
}

export default mydashboard;
