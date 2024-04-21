import NoInvitation from './NoInvitation';
import SearchBar from './SearchBar';
import { styled } from 'styled-components';
import Button from '@/components/common/button/Button';
import { BUTTON_TYPE } from '@/constants/BUTTON_TYPE';
import { INVITATION_INFO_TABS } from '@/constants/LIST_INFO';
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

  InvitationHeader: styled.div`
    padding: 2.4rem;
    border-bottom: 1px solid red;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  `,

  InvitationInfoTabs: styled.ul`
    display: flex;
    justify-content: space-between;
    max-width: 73.8rem;

    ${MEDIA_QUERIES.onMobile} {
      display: none;
    }
  `,

  Tab: styled.li`
    color: ${({ theme }) => theme.color.gray};
  `,

  Invitation: styled.ul`
    padding: 2.7rem 2.4rem;
    border-bottom: ${({ theme }) => theme.border.lightGray};
  `,

  InnerWrap: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 85.6rem;
  `,

  ButtonContainer: styled.div`
    display: flex;
    gap: 1rem;
  `,
};

function InvitedDashBoardList() {
  const isInvitation = false;

  return (
    <S.Container>
      <S.Title>초대받은 대시보드</S.Title>
      {!!isInvitation ? (
        <NoInvitation />
      ) : (
        <>
          <S.InvitationHeader>
            <SearchBar placeholder="검색" />
            <S.InvitationInfoTabs>
              {INVITATION_INFO_TABS.map((tab) => (
                <S.Tab>{tab}</S.Tab>
              ))}
            </S.InvitationInfoTabs>
          </S.InvitationHeader>
          <S.Invitation>
            <S.InnerWrap>
              <div>코드잇</div>
              <div>11팀</div>
              <S.ButtonContainer>
                <Button size="S">수락</Button>
                <Button size="S" styleType={BUTTON_TYPE.SECONDARY}>
                  거절
                </Button>
              </S.ButtonContainer>
            </S.InnerWrap>
          </S.Invitation>
          <S.Invitation>
            <S.InnerWrap>
              <div>코드잇</div>
              <div>11팀</div>
              <S.ButtonContainer>
                <Button size="S">수락</Button>
                <Button size="S" styleType={BUTTON_TYPE.SECONDARY}>
                  거절
                </Button>
              </S.ButtonContainer>
            </S.InnerWrap>
          </S.Invitation>
          <S.Invitation>
            <S.InnerWrap>
              <div>코드잇</div>
              <div>11팀</div>
              <S.ButtonContainer>
                <Button size="S">수락</Button>
                <Button size="S" styleType={BUTTON_TYPE.SECONDARY}>
                  거절
                </Button>
              </S.ButtonContainer>
            </S.InnerWrap>
          </S.Invitation>
          <S.Invitation>
            <S.InnerWrap>
              <div>코드잇</div>
              <div>11팀</div>
              <S.ButtonContainer>
                <Button size="S">수락</Button>
                <Button size="S" styleType={BUTTON_TYPE.SECONDARY}>
                  거절
                </Button>
              </S.ButtonContainer>
            </S.InnerWrap>
          </S.Invitation>
        </>
      )}
    </S.Container>
  );
}

export default InvitedDashBoardList;
