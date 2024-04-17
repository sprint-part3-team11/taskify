import ContentAndImageBox from './ContentAndImageBox';
import TagBox from './TagBox';
import styled from 'styled-components';

const S = {
  MainAndSideBox: styled.div`
    display: flex;
  `,
  MainBox: styled.div`
    display: flex;
  `,
};
function MainBox() {
  return (
    <S.MainBox>
      <TagBox />
      <ContentAndImageBox />
    </S.MainBox>
  );
}
export default MainBox;
