import { styled } from 'styled-components';
import AddIconButton from '@/components/common/button/AddIconButton';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import MessageIcon from '@/public/icon/messageIcon.svg';

const S = {
  InvitedBoardBox: styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 40rem;
    padding: 3.2rem 2.8rem;
    border: 1px solid red;
    border-radius: 0.8rem;
    box-shadow: rgba(0, 0, 0, 0.08) 0 1.2rem 2rem 0;

    ${MEDIA_QUERIES.onMobile} {
      padding: 2.4rem 1.6rem;
    }
  `,

  Title: styled.h2`
    position: absolute;
    top: 3.2rem;
    left: 2.8rem;

    font-size: 2.4rem;
    font-weight: 700;

    ${MEDIA_QUERIES.onMobile} {
      font-size: 2rem;
    }
  `,

  NoInvitation: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;

    font-size: 1.8rem;
    color: ${({ theme }) => theme.color.gray};
  `,
};

function InitialInvitedBoard() {
  return (
    <>
      <S.InvitedBoardBox>
        <S.Title>초대받은 대시보드</S.Title>
        <S.NoInvitation>
          <MessageIcon />
          아직 초대받은 대시보드가 없어요✨
        </S.NoInvitation>
      </S.InvitedBoardBox>
    </>
  );
}

export default InitialInvitedBoard;
