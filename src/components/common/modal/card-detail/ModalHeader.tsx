import { useState } from 'react';
import ToDoCreateModal from '../ToDoCreateModal';
import styled from 'styled-components';
import useDeleteCardMutation from '@/hooks/query/cards/useDeleteCardMutation';
import useDetailCardQuery from '@/hooks/query/cards/useDetailCardQuery';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import { CardConfirmModalProps, ModalCloseProps } from '@/types/CardDetail';
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
    ${MEDIA_QUERIES.onMobile} {
      font-size: 2rem;
      line-height: 2.5rem;
    }
  `,

  HeaderButton: styled.div`
    position: relative;
    display: flex;
    gap: 1rem;
  `,

  KebabIcon: styled(KebabIcon)`
    margin-top: 0.2rem;
    width: 3.2rem;
    height: 3.2rem;
    cursor: pointer;

    ${MEDIA_QUERIES.onMobile} {
      width: 2rem;
      height: 2.5rem;
    }
  `,
  DropdownMenuBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 4rem;
    right: 6rem;
    z-index: 1;

    width: 10rem;
    height: 9rem;
    border: 1px solid ${({ theme }) => theme.color.gray};
    border-radius: 0.6rem;

    background-color: ${({ theme }) => theme.color.white};

    font-size: 1.4rem;

    ${MEDIA_QUERIES.onMobile} {
      top: 3rem;
      right: 5rem;
    }
  `,
  MenuItem: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2rem 1.3rem;
    margin: 0.5rem 0;
    border-radius: 0.4rem;
    height: 100%;

    text-align: center;

    &:hover {
      background-color: ${({ theme }) => theme.color.mainLight};
      cursor: pointer;
    }
  `,
  CloseIcon: styled(CloseIcon)`
    width: 3.2rem;
    height: 3.2rem;
    cursor: pointer;
  `,
};

interface ModalHeaderProps {
  onClose: () => void;
  card_Id: number;
}
function ModalHeader({ onClose, card_Id }: ModalHeaderProps) {
  const { data } = useDetailCardQuery({
    cardId: card_Id,
  });
  const title = data && data.title;
  const { mutate: responseInvitationMutate } = useDeleteCardMutation();

  const [isOpen, setIsOpen] = useState(false);

  const handleClickKebab = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteCard = () => {
    console.log('a');
    responseInvitationMutate({ cardId: card_Id });
    onClose();
  };

  return (
    <S.ModalHeader>
      <S.ModalTitle>{title}</S.ModalTitle>
      <S.HeaderButton>
        <S.KebabIcon onClick={handleClickKebab} />
        {isOpen && (
          <S.DropdownMenuBox>
            <S.MenuItem>수정하기</S.MenuItem>
            <S.MenuItem onClick={handleDeleteCard}>삭제하기</S.MenuItem>
          </S.DropdownMenuBox>
        )}
        <S.CloseIcon onClick={onClose} />
      </S.HeaderButton>
    </S.ModalHeader>
  );
}

export default ModalHeader;
