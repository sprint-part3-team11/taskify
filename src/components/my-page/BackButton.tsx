import { useRouter } from 'next/router';
import styled from 'styled-components';
import BackBtn from '@/public/icon/backButton.svg';

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 2.5rem;
    cursor: pointer;
  `,
  BackText: styled.span`
    font-size: 1.6rem;
    font-weight: 500;
  `,
};

function BackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <S.Container onClick={handleGoBack}>
      <BackBtn />
      <S.BackText>돌아가기</S.BackText>
    </S.Container>
  );
}

export default BackButton;
