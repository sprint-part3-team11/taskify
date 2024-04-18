import MainBox from './MainBox';
import ModalHeader from './ModalHeader';
import SideBox from './SideBox';
import { CardConfirmModalProps } from './types';
import styled from 'styled-components';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

const S = {
  ModalLayout: styled.div`
    padding: 3rem 2rem;
    width: 73rem;
    height: 76rem;
  `,

  ModalBody: styled.div`
    display: flex;
  `,
};

function CardConfirmModal({ cardInfoData }: CardConfirmModalProps) {
  return (
    <S.ModalLayout>
      <ModalHeader cardInfoData={cardInfoData} />
      <S.ModalBody>
        <MainBox cardInfoData={cardInfoData} />
        <SideBox cardInfoData={cardInfoData} />
      </S.ModalBody>
    </S.ModalLayout>
  );
}

export default CardConfirmModal;
