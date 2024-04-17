import MainBox from './MainBox';
import ModalHeader from './ModalHeader';
import styled from 'styled-components';

const ModalBox = styled.div`
  padding: 3rem 2rem;
  width: 73rem;
  height: 76rem;
  border: 1px solid gray;
`;

interface Assignee {
  profileImageUrl: string;
  nickname: string;
  id: number;
}

export interface CardInfoProps {
  id: number;
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  assignee: Assignee;
  imageUrl: string;
  teamId: string;
  columnId: number;
  createdAt: string;
  updatedAt: string;
}
export interface CardConfirmModalProps {
  cardInfoData: CardInfoProps;
}
function CardConfirmModal({ cardInfoData }: CardConfirmModalProps) {
  return (
    <ModalBox>
      <ModalHeader cardInfoData={cardInfoData} />
      <MainBox cardInfoData={cardInfoData} />
    </ModalBox>
  );
}

export default CardConfirmModal;
