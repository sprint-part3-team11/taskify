import Image from 'next/image';
import { CardConfirmModalProps } from './CardConfirmModal';
import styled from 'styled-components';

const S = {
  SideContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20rem;
    height: 15rem;
    border: 1px solid ${({ theme }) => theme.color.grayLight};
    border-radius: 1rem;
    margin-left: 2.3rem;
    padding: 1.5rem 1.5rem 2.5rem 1.5rem;
  `,

  AssigneeBox: styled.div`
    display: flex;
    flex-direction: column;
  `,

  Label: styled.div`
    margin: 1rem 0;
    font-size: 1.2rem;
    font-weight: 600;
  `,
  Assignee: styled.div`
    display: flex;
    align-items: center;
  `,

  NickName: styled.div`
    margin-left: 1rem;
  `,
  DueDate: styled.div`
    font-size: 1.4rem;
  `,
};

function SideBox({ cardInfoData }: CardConfirmModalProps) {
  return (
    <S.SideContainer>
      <S.AssigneeBox>
        <S.Label>담당자</S.Label>
        <S.Assignee>
          <Image
            src={cardInfoData.assignee.profileImageUrl}
            alt={'담당자 이름'}
            width={34}
            height={34}
          />
          <S.NickName>{cardInfoData.assignee.nickname}</S.NickName>
        </S.Assignee>
      </S.AssigneeBox>

      <S.Label>마감일</S.Label>
      <S.DueDate>{cardInfoData.dueDate}</S.DueDate>
    </S.SideContainer>
  );
}

export default SideBox;
