import { CardConfirmModalProps } from './CardConfirmModal';
import ContentAndImageBox from './ContentAndImageBox';
import TagBox from './TagBox';
import styled from 'styled-components';

const S = {
  MainAndSideBox: styled.div`
    display: flex;
  `,
  MainBox: styled.div`
    display: flex;
    flex-direction: column;
  `,
};
function MainBox({ cardInfoData }: CardConfirmModalProps) {
  return (
    <S.MainBox>
      <TagBox cardInfoData={cardInfoData} />
      <ContentAndImageBox cardInfoData={cardInfoData} />
    </S.MainBox>
  );
}
export default MainBox;
