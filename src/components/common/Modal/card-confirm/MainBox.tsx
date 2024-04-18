import Comment from './Comment';
import ContentAndImageBox from './ContentAndImageBox';
import TagBox from './TagBox';
import { CardConfirmModalProps } from './types';
import styled from 'styled-components';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

const S = {
  MainAndSideBox: styled.div`
    display: flex;
  `,
  MainBox: styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;

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
