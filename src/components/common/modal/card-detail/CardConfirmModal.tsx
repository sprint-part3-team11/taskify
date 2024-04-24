import { useState } from 'react';
import BackDropModal from '../BackDropModal';
import MainBox from './MainBox';
import ModalHeader from './ModalHeader';
import SideBox from './SideBox';
import styled from 'styled-components';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import { CardConfirmModalProps } from '@/types/CardDetail';

const S = {
  ModalLayout: styled.div`
    width: 73rem;
    height: 76rem;

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
const cardInfoData = {
  id: 0,
  title: '새로운 일정 관리 Taskify',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus nibh arcu, quis consequat ante cursus eget. Cras mattis, nulla non laoreet porttitor, diam justo laoreet eros, vel aliquet diam elit at leo.',
  tags: ['To Do'],
  dueDate: '2022.12.30 19:00',
  assignee: {
    profileImageUrl: 'https://i.ibb.co/ysRQMyj/me.jpg',
    nickname: 'jun',
    id: 0,
  },
  imageUrl: 'https://i.ibb.co/5WsrwJY/Group-751.png',
  teamId: '3',
  columnId: 0,
  createdAt: '2024-04-17T07:10:28.745Z',
  updatedAt: '2024-04-17T07:10:28.745Z',
};

interface ModalOpenAndCloseProps {
  isOpen: boolean;
  onClose: () => void;
}
function CardConfirmModal({ isOpen, onClose }: ModalOpenAndCloseProps) {
  return (
    <BackDropModal isOpen={isOpen} onClose={onClose}>
      <S.ModalLayout>
        <ModalHeader cardInfoData={cardInfoData} onClose={onClose} />
        <S.ModalBody>
          <MainBox cardInfoData={cardInfoData} />
          <SideBox cardInfoData={cardInfoData} />
        </S.ModalBody>
      </S.ModalLayout>
    </BackDropModal>
  );
}

export default CardConfirmModal;
