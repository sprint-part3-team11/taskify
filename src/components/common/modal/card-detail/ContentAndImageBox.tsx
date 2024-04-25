import Image from 'next/image';
import styled from 'styled-components';
import useDetailCardQuery from '@/hooks/query/cards/useDetailCardQuery';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import { CardConfirmModalProps } from '@/types/CardDetail';

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 37rem;
    word-break: break-all;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.color.mainLight};
      border-radius: 10px;
      background-clip: padding-box;
      border: 2px solid transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.color.white};
      border-radius: 10px;
      box-shadow: inset 0px 0px 5px white;
    }

    ${MEDIA_QUERIES.onMobile} {
      width: 100%;
      height: 30rem;
      word-break: break-all;
    }
  `,
  ContentBox: styled.div`
    width: 100%;

    margin-bottom: 2.5rem;
    line-height: 2rem;

    ${MEDIA_QUERIES.onMobile} {
      line-height: 1.5rem;
      font-size: 1.2rem;
    }
  `,
  Image: styled(Image)`
    ${MEDIA_QUERIES.onMobile} {
      width: 100%;
      height: 16rem;
    }
  `,
};
function ContentAndImageBox() {
  const { data } = useDetailCardQuery({
    cardId: 4975,
  });
  const description = data && data.description;
  const imageUrl = data && data.imageUrl;
  return (
    <S.Container>
      <S.ContentBox>{description}</S.ContentBox>
      <S.Image src={imageUrl} width={430} height={260} alt="상세 이미지" />
    </S.Container>
  );
}

export default ContentAndImageBox;
