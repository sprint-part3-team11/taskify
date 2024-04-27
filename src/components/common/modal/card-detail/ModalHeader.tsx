import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import useDeleteCardMutation from '@/hooks/query/cards/useDeleteCardMutation';
import useDetailCardQuery from '@/hooks/query/cards/useDetailCardQuery';
import useOutSideClick from '@/hooks/useClickOutside';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
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
  DropdownBox: styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 3rem;
    right: 5.5rem;
    gap: 0.6rem;
    z-index: 100;

    min-width: 9rem;
    padding: 0.6rem;
    border: 1px solid ${({ theme }) => theme.color.gray};
    border-radius: 0.6rem;

    background-color: ${({ theme }) => theme.color.white};

    font-size: 1.4rem;

    box-shadow: 0 0.4rem 2rem 0 rgba(0, 0, 0, 0.08);

    ${MEDIA_QUERIES.onMobile} {
      right: 4rem;

      font-size: 1.2rem;
    }
  `,
  DropDownList: styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.4rem;
    width: 100%;
    height: 100%;
    padding: 0.8rem 0;

    text-align: center;

    &:hover {
      background-color: ${({ theme }) => theme.color.mainLight};

      color: ${({ theme }) => theme.color.main};
      cursor: pointer;
    }

    ${MEDIA_QUERIES.onMobile} {
      padding: 0.8rem 0.5rem;
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
  const optionAreaRef = useRef<HTMLUListElement>(null);
  const { data } = useDetailCardQuery({
    cardId: card_Id,
  });
  const title = data && data.title;
  const { mutate: responseInvitationMutate } = useDeleteCardMutation();

  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  useOutSideClick([optionAreaRef], () => {
    setIsOpen(false);
  });

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteCard = () => {
    responseInvitationMutate({ cardId: card_Id });
    onClose();
  };

  return (
    <S.ModalHeader>
      <S.ModalTitle>{title}</S.ModalTitle>
      <S.HeaderButton>
        <S.KebabIcon onClick={handleDropDown} />
        {isOpen && (
          <S.DropdownBox ref={optionAreaRef}>
            <S.DropDownList>수정하기</S.DropDownList>
            <S.DropDownList onClick={handleDeleteCard}>삭제하기</S.DropDownList>
          </S.DropdownBox>
        )}
        <S.CloseIcon onClick={onClose} />
      </S.HeaderButton>
    </S.ModalHeader>
  );
}

export default ModalHeader;
