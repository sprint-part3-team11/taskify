import styled from 'styled-components';
import Comment from '@/components/common/modal/card-detail/Comment';
import ContentAndImageBox from '@/components/common/modal/card-detail/ContentAndImageBox';
import TagBox from '@/components/common/modal/card-detail/TagBox';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import { CardInfoProps } from '@/types/CardDetail';

const S = {
  MainAndSideBox: styled.div`
    display: flex;
  `,
  MainBox: styled.div`
    display: flex;
    flex-direction: column;
    width: 45rem;
    flex: 1;

    ${MEDIA_QUERIES.onMobile} {
      width: 100%;
      word-break: break-all;
    }
  `,
};

interface MainBoxProps {
  stateTag: string;
  cardDetailData: CardInfoProps;
}
function MainBox({ stateTag, cardDetailData }: MainBoxProps) {
  return (
    <S.MainBox>
      <TagBox stateTag={stateTag} cardDetailData={cardDetailData} />
      <ContentAndImageBox cardDetailData={cardDetailData} />
      <Comment cardDetailData={cardDetailData} />
    </S.MainBox>
  );
}
export default MainBox;
