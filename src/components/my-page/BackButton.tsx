import styled from 'styled-components';
import BackBtn from '@/public/icon/backButton.svg';

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
  `,
  BackText: styled.span`
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.body};
  `,
};

function BackButton() {
  return (
    <S.Container>
      <BackBtn />
      <S.BackText>돌아가기</S.BackText>
    </S.Container>
  );
}

export default BackButton;
