import styled from 'styled-components';
import Comment from '@/components/common/modal/card-detail/Comment';
import ContentAndImageBox from '@/components/common/modal/card-detail/ContentAndImageBox';
import TagBox from '@/components/common/modal/card-detail/TagBox';
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

function MainBox({ cardInfoData }: CardConfirmModalProps) {
  return (
    <S.MainBox>
      <TagBox cardInfoData={cardInfoData} />
      <ContentAndImageBox cardInfoData={cardInfoData} />
      <Comment />
    </S.MainBox>
  );
}
export default MainBox;
