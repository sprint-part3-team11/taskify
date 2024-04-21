import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Button from '@/components/common/button/Button';
import NoInvitation from '@/components/dashboard/my-board/NoInvitation';
import SearchBar from '@/components/dashboard/my-board/SearchBar';
import { BUTTON_TYPE } from '@/constants/BUTTON_TYPE';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

const S = {
  Container: styled.div`
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
    font-size: 2.4rem;
    font-weight: 700;

    ${MEDIA_QUERIES.onMobile} {
      padding: 2.4rem 1.6rem 0;
      font-size: 2rem;
    }
  `,

  SearchBarWrapper: styled.div`
    padding: 2.4rem;
  `,

  Invitations: styled.ul``,

  InvitationTabBar: styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 6rem 0.4rem 5rem;
    color: ${({ theme }) => theme.color.gray};

    ${MEDIA_QUERIES.onMobile} {
      display: none;
    }
  `,

  Invitation: styled.li`
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

    ${MEDIA_QUERIES.onMobile} {
      &::before {
        content: '이름';
        padding-right: 1rem;
        color: ${({ theme }) => theme.color.gray};
      }
    }
  `,

  Inviter: styled.div`
    white-space: nowrap;
    padding-right: 1rem;

    ${MEDIA_QUERIES.onMobile} {
      &::before {
        content: '초대자';
        padding-right: 1rem;
        color: ${({ theme }) => theme.color.gray};
      }
    }
  `,

  ButtonContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    ${MEDIA_QUERIES.onMobile} {
      justify-content: space-between;
      width: 100%;

      button {
        width: 100%;
      }
    }
  `,
};

const invitations = [
  {
    id: 1,
    inviter: {
      nickname: '공주',
      email: 'test@test.com',
      id: 1,
    },
    teamId: '1',
    dashboard: {
      title: '공주들 화이팅이다다',
      id: 1,
    },
    invitee: {
      nickname: '11팀',
      email: 'test1@test.com',
      id: 1,
    },
    inviteAccepted: false,
    createdAt: '2024-04-21T12:08:17.124Z',
    updatedAt: '2024-04-21T12:08:17.124Z',
  },
  {
    id: 2,
    inviter: {
      nickname: '왕자',
      email: 'test@test.com',
      id: 2,
    },
    teamId: '1',
    dashboard: {
      title: '왕자도화이팅',
      id: 1,
    },
    invitee: {
      nickname: '11팀',
      email: 'test1@test.com',
      id: 1,
    },
    inviteAccepted: false,
    createdAt: '2024-04-21T12:08:17.124Z',
    updatedAt: '2024-04-21T12:08:17.124Z',
  },
  {
    id: 3,
    inviter: {
      nickname: '퀸퀸아머퀸',
      email: 'test@test.com',
      id: 1,
    },
    teamId: '1',
    dashboard: {
      title: '퀸이될게',
      id: 1,
    },
    invitee: {
      nickname: '11팀',
      email: 'test1@test.com',
      id: 1,
    },
    inviteAccepted: false,
    createdAt: '2024-04-21T12:08:17.124Z',
    updatedAt: '2024-04-21T12:08:17.124Z',
  },
  {
    id: 4,
    inviter: {
      nickname: '이게 무슨일이야',
      email: 'test@test.com',
      id: 3,
    },
    teamId: '1',
    dashboard: {
      title: '이제 어떻게 되려나',
      id: 1,
    },
    invitee: {
      nickname: '11팀',
      email: 'test1@test.com',
      id: 1,
    },
    inviteAccepted: false,
    createdAt: '2024-04-21T12:08:17.124Z',
    updatedAt: '2024-04-21T12:08:17.124Z',
  },
];

function InvitedDashBoardList() {
  const searchParams = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get('keyword'));
  const isInvitation = false;

  useEffect(() => {
    setKeyword(searchParams.get('keyword'));
  }, [searchParams]);

  return (
    <S.Container>
      <S.Title>초대받은 대시보드</S.Title>
      {!!isInvitation ? (
        <NoInvitation />
      ) : (
        <>
          <S.SearchBarWrapper>
            <SearchBar placeholder="검색" />
          </S.SearchBarWrapper>

          <S.Invitations>
            <S.InvitationTabBar>
              <S.TitleAndInviter>
                <S.BoardTitle>이름</S.BoardTitle>
                <S.Inviter>초대한 사람</S.Inviter>
              </S.TitleAndInviter>
              <div style={{ width: '17.5rem' }}>수락 여부</div>
            </S.InvitationTabBar>

            {invitations.map((invitation) => (
              <S.Invitation>
                <S.TitleAndInviter>
                  <S.BoardTitle>{invitation.dashboard.title}</S.BoardTitle>
                  <S.Inviter>{invitation.inviter.nickname}</S.Inviter>
                </S.TitleAndInviter>
                <S.ButtonContainer>
                  <Button size="S">수락</Button>
                  <Button size="S" styleType={BUTTON_TYPE.SECONDARY}>
                    거절
                  </Button>
                </S.ButtonContainer>
              </S.Invitation>
            ))}
          </S.Invitations>
        </>
      )}
    </S.Container>
  );
}

export default InvitedDashBoardList;
