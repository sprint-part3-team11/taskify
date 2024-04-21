import { styled } from 'styled-components';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import MessageIcon from '@/public/icon/messageIcon.svg';

const S = {
  InvitedBoardBox: styled.div`
    min-height: 40rem;
    margin-top: 4rem;
    border-radius: 0.8rem;
    box-shadow: rgba(0, 0, 0, 0.08) 0 1.2rem 2rem 0;
    background-color: ${({ theme }) => theme.color.white};

    ${MEDIA_QUERIES.onMobile} {
      margin-top: 2.4rem;
    }
  `,

  Title: styled.h2`
    padding: 3.2rem 2.8rem 0;
    border-bottom: 1px solid black;

    font-size: 2.4rem;
    font-weight: 700;

    ${MEDIA_QUERIES.onMobile} {
      padding: 2.4rem 1.6rem;
      font-size: 2rem;
    }
  `,

  NoInvitation: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    margin-top: 6.7rem;

    font-size: 1.8rem;
    color: ${({ theme }) => theme.color.gray};

    ${MEDIA_QUERIES.onMobile} {
      font-size: 1.4rem;
    }
  `,
};

function InvitedDashBoardList() {
  const isInvitation = false;

  return (
    <S.InvitedBoardBox>
      <S.Title>초대받은 대시보드</S.Title>
      {/* 검색바 조건부로 들어가기 */}
      {!!isInvitation ? (
        <S.NoInvitation>
          <MessageIcon />
          아직 초대받은 대시보드가 없어요✨
        </S.NoInvitation>
      ) : (
        <div>sdfdsf</div>
      )}
    </S.InvitedBoardBox>
  );
}

export default InvitedDashBoardList;
