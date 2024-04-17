import Link from 'next/link';
import styled from 'styled-components';
import CloseIcon from '@/public/icon/closeIcon.svg';
import KebabIcon from '@/public/icon/kebabIcon.svg';

const S = {
  ModalBox: styled.div`
    width: 73rem;
    height: 76rem;
    border: 1px solid gray;
  `,

  ModalHeader: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2.5rem 2rem;
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

function CardConfirmModal() {
  return (
    <S.ModalBox>
      <S.ModalHeader>
        <S.ModalTitle>새로운 일정 관리 Taskify</S.ModalTitle>
        <S.HeaderButton>
          <S.KebabIcon />
          <S.CloseIcon />
        </S.HeaderButton>
      </S.ModalHeader>
    </S.ModalBox>
  );
}

export default CardConfirmModal;
