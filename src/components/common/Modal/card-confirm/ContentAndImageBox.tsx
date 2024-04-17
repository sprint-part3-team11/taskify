import styled from 'styled-components';

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,
  ContentBox: styled.div``,
  ImageBox: styled.div``,
};
function ContentAndImageBox() {
  return (
    <S.Container>
      <S.ContentBox></S.ContentBox>
      <S.ImageBox></S.ImageBox>
    </S.Container>
  );
}

export default ContentAndImageBox;
