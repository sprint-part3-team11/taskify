import MainBox from './MainBox';
import ModalHeader from './ModalHeader';
import styled from 'styled-components';

const ModalBox = styled.div`
  padding: 3rem 2rem;
  width: 73rem;
  height: 76rem;
  border: 1px solid gray;
`;

function CardConfirmModal() {
  return (
    <ModalBox>
      <ModalHeader />
      <MainBox />
    </ModalBox>
  );
}

export default CardConfirmModal;
