import { useState } from 'react';
import BackDropModal from '../BackDropModal';
import MainBox from './MainBox';
import ModalHeader from './ModalHeader';
import SideBox from './SideBox';
import styled from 'styled-components';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

const S = {
  ModalLayout: styled.div`
    width: 73rem;
    height: 76rem;

    overflow: auto;

    ${MEDIA_QUERIES.onMobile} {
      padding-top: 2.2rem;
      width: 32rem;
      height: 68rem;
    }
  `,

  ModalBody: styled.div`
    display: flex;
    ${MEDIA_QUERIES.onMobile} {
      display: flex;
      flex-direction: column-reverse;
    }
  `,
};

const stateTag = ['To Do'];

interface ModalOpenAndCloseProps {
  isOpen: boolean;
  onClose: () => void;
}
function CardConfirmModal({ isOpen, onClose }: ModalOpenAndCloseProps) {
  return (
    <BackDropModal isOpen={isOpen} onClose={onClose}>
      <S.ModalLayout>
        <ModalHeader onClose={onClose} />
        <S.ModalBody>
          <MainBox stateTag={stateTag} />
          <SideBox />
        </S.ModalBody>
      </S.ModalLayout>
    </BackDropModal>
  );
}

export default CardConfirmModal;
