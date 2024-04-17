import { CardConfirmModalProps } from './CardConfirmModal';
import styled from 'styled-components';
import CloseIcon from '@/public/icon/closeIcon.svg';
import KebabIcon from '@/public/icon/kebabIcon.svg';

const S = {
  ModalHeader: styled.div`
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
  `,

  ModalTitle: styled.div`
    font-size: 2.4rem;
    font-weight: 700;
  `,

  HeaderButton: styled.div`
    display: flex;
    gap: 1rem;
  `,

  KebabIcon: styled(KebabIcon)`
    margin-top: 0.2rem;
    width: 3.2rem;
    height: 3.2rem;
    cursor: pointer;
  `,

  CloseIcon: styled(CloseIcon)`
    width: 3.2rem;
    height: 3.2rem;
    cursor: pointer;
  `,
};
function ModalHeader({ cardInfoData }: CardConfirmModalProps) {
  return (
    <S.ModalHeader>
      <S.ModalTitle>{cardInfoData.title}</S.ModalTitle>
      <S.HeaderButton>
        <S.KebabIcon />
        <S.CloseIcon />
      </S.HeaderButton>
    </S.ModalHeader>
  );
}

export default ModalHeader;
