import Image from 'next/image';
import { CardConfirmModalProps } from './CardConfirmModal';
import styled from 'styled-components';

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  ContentBox: styled.div`
    width: 100%;
    margin-bottom: 2.5rem;
  `,
};
function ContentAndImageBox({ cardInfoData }: CardConfirmModalProps) {
  return (
    <S.Container>
      <S.ContentBox>{cardInfoData.description}</S.ContentBox>
      <Image
        src={cardInfoData.imageUrl}
        width={450}
        height={260}
        alt="상세 이미지"
      />
    </S.Container>
  );
}

export default ContentAndImageBox;
