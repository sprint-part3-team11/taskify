import Image from 'next/image';
import { CardConfirmModalProps } from './CardConfirmModal';
import styled from 'styled-components';

const S = {
  SideContainer: styled.div`
    width: 20rem;
    height: 15rem;
    border: 1px solid ${({ theme }) => theme.color.grayLight};
    border-radius: 1rem;
    margin-left: 2.3rem;
  `,

  Assignee: styled.div`
    display: flex;
  `,
};

function SideBox({ cardInfoData }: CardConfirmModalProps) {
  return (
    <S.SideContainer>
      <div>담당자</div>
      <S.Assignee>
        <Image
          src={cardInfoData.assignee.profileImageUrl}
          alt={'담당자 이름'}
          width={34}
          height={34}
        />
        <div>{cardInfoData.assignee.nickname}</div>
      </S.Assignee>

      <div>마감일</div>
      <div>{cardInfoData.dueDate}</div>
    </S.SideContainer>
  );
}

export default SideBox;
