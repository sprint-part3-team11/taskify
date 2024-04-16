import styled from 'styled-components';

const S = {
  Button: styled.button`
    width: 3.25rem;
    height: 3.25rem;
    background-color: hotpink;
  `,
};
function TempButton() {
  return <S.Button>버튼</S.Button>;
}
export default TempButton;
