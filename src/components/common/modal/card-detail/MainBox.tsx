import styled from 'styled-components';
import Comment from '@/components/common/modal/card-detail/Comment';
import ContentAndImageBox from '@/components/common/modal/card-detail/ContentAndImageBox';
import TagBox from '@/components/common/modal/card-detail/TagBox';
import useDetailCardQuery from '@/hooks/query/cards/useDetailCardQuery';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import { CardConfirmModalProps } from '@/types/CardDetail';

const S = {
  MainAndSideBox: styled.div`
    display: flex;
  `,
  MainBox: styled.div`
    display: flex;
    flex-direction: column;
    width: 45rem;

    ${MEDIA_QUERIES.onMobile} {
      width: 100%;
      word-break: break-all;
    }
  `,
};

interface MainBoxProps {
  stateTag: string;
  card_Id: number;
}
function MainBox({ stateTag, card_Id }: MainBoxProps) {
  return (
    <S.MainBox>
      <TagBox stateTag={stateTag} card_Id={card_Id} />
      <ContentAndImageBox card_Id={card_Id} />
      <Comment card_Id={card_Id} />
    </S.MainBox>
  );
}
export default MainBox;
