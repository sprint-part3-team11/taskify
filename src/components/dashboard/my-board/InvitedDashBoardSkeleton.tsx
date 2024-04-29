import { styled } from 'styled-components';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import { Shimmer } from '@/styles/CommonStyle';

const S = {
  Invitation: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2.6rem 6rem;
    border-bottom: ${({ theme }) => theme.border.lightGray};

    ${MEDIA_QUERIES.onTablet} {
      gap: 4rem;
    }
    ${MEDIA_QUERIES.onMobile} {
      flex-direction: column;
      justify-content: initial;
      align-items: initial;
      gap: 1rem;
      padding: 1.6rem;
    }
  `,

  TitleAndInviter: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 6rem;
    font-size: 1.6rem;

    ${MEDIA_QUERIES.onMobile} {
      flex-direction: column;
      justify-content: initial;
      align-items: initial;
      gap: 1rem;

      font-size: 1.4rem;
    }
  `,

  BoardTitle: styled.div`
    min-width: 14rem;
    height: 2.5rem;
    background-color: ${({ theme }) => theme.color.skeleton};
    overflow: hidden;
    border-radius: 0.4rem;

    ${MEDIA_QUERIES.onMobile} {
      max-width: 2rem;
      height: 2.3rem;
    }
  `,

  Inviter: styled.div`
    width: 7rem;
    height: 2.5rem;
    padding-right: 1rem;

    background-color: ${({ theme }) => theme.color.skeleton};
    overflow: hidden;
    border-radius: 0.4rem;

    ${MEDIA_QUERIES.onMobile} {
      width: 14rem;
      height: 2.3rem;
    }
  `,

  ButtonContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    width: 17rem;

    .btn {
      width: 100%;
      height: 3rem;
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
      border-radius: 0.4rem;
    }

    ${MEDIA_QUERIES.onMobile} {
      justify-content: space-between;
      width: 100%;

      .btn {
        width: 100%;
        height: 2.8rem;
      }
    }
  `,
};

function InvitedDashBoardSkeleton() {
  return (
    <S.Invitation>
      <S.TitleAndInviter>
        <S.BoardTitle>
          <Shimmer />
        </S.BoardTitle>
        <S.Inviter>
          <Shimmer />
        </S.Inviter>
      </S.TitleAndInviter>
      <S.ButtonContainer>
        <div className="btn">
          <Shimmer />
        </div>
        <div className="btn">
          <Shimmer />
        </div>
      </S.ButtonContainer>
    </S.Invitation>
  );
}

export default InvitedDashBoardSkeleton;
