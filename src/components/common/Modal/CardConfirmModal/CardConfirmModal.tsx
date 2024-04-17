import ModalHeader from './ModalHeader';
import styled from 'styled-components';

const S = {
  ModalBox: styled.div`
    width: 73rem;
    height: 76rem;
    border: 1px solid gray;
  `,
};

function CardConfirmModal() {
  return (
    <S.ModalBox>
      <ModalHeader />
    </S.ModalBox>
  );
}

export default CardConfirmModal;
