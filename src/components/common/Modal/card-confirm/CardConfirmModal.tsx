import MainBox from './MainBox';
import ModalHeader from './ModalHeader';
import SideBox from './SideBox';
import { CardConfirmModalProps } from './types';
import styled from 'styled-components';

const S = {
  ModalContainer: styled.div`
    padding: 3rem 2rem;
    width: 73rem;
    height: 76rem;

    border: 1px solid gray;
  `,

  Wrapper: styled.div`
    display: flex;
  `,
};

function CardConfirmModal({ cardInfoData }: CardConfirmModalProps) {
  return (
    <S.ModalContainer>
      <ModalHeader cardInfoData={cardInfoData} />
      <S.Wrapper>
        <MainBox cardInfoData={cardInfoData} />
        <SideBox cardInfoData={cardInfoData} />
      </S.Wrapper>
    </S.ModalContainer>
  );
}

export default CardConfirmModal;
