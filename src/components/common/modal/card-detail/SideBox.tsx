import Image from 'next/image';
import styled from 'styled-components';
import useDetailCardQuery from '@/hooks/query/cards/useDetailCardQuery';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import { CardConfirmModalProps } from '@/types/CardDetail';

const S = {
  SideContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 20rem;
    height: 15rem;
    border: 1px solid ${({ theme }) => theme.color.grayLight};
    border-radius: 1rem;
    margin-left: 2.3rem;
    padding: 1.5rem 1.5rem 2.5rem 1.5rem;

    ${MEDIA_QUERIES.onMobile} {
      display: flex;
      flex-direction: row;
      width: 28rem;
      height: 6.7rem;
      margin-left: 0;
      padding: 0;
    }
  `,

  AssigneeBox: styled.div`
    display: flex;
    flex-direction: column;
    ${MEDIA_QUERIES.onMobile} {
      justify-content: center;
      gap: 0.4rem;
    }
  `,

  Label: styled.div`
    margin: 1rem 0;
    font-size: 1.2rem;
    font-weight: 600;

    ${MEDIA_QUERIES.onMobile} {
      margin: 0;
      font-size: 1rem;
    }
  `,
  Assignee: styled.div`
    display: flex;
    align-items: center;
    ${MEDIA_QUERIES.onMobile} {
      font-size: 1.2rem;
    }
  `,

  NickName: styled.div`
    margin-left: 0.8rem;
  `,
  DueDateBox: styled.div`
    display: flex;
    flex-direction: column;

    ${MEDIA_QUERIES.onMobile} {
      justify-content: center;
      gap: 0.4rem;
    }
  `,
  DueDate: styled.div`
    font-size: 1.4rem;
    ${MEDIA_QUERIES.onMobile} {
      font-size: 1.2rem;
    }
  `,
};

function SideBox() {
  const { data } = useDetailCardQuery({
    cardId: 4914,
  });

  const { nickname, profileImageUrl } =
    data && data.assignee
      ? data.assignee
      : { nickname: '', profileImageUrl: '' };

  const dueDate = data && data.dueDate;

  return (
    <S.SideContainer>
      <S.AssigneeBox>
        <S.Label>담당자</S.Label>
        <S.Assignee>
          {profileImageUrl && (
            <Image
              src={profileImageUrl}
              alt="담당자 이름"
              width={34}
              height={34}
            />
          )}
          <S.NickName>{nickname}</S.NickName>
        </S.Assignee>
      </S.AssigneeBox>
      <S.DueDateBox>
        <S.Label>마감일</S.Label>
        <S.DueDate>{dueDate}</S.DueDate>
      </S.DueDateBox>
    </S.SideContainer>
  );
}

export default SideBox;
