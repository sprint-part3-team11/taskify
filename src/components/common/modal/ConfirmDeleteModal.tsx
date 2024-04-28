import styled from 'styled-components';
import Button from '@/components/common/button/Button';
import BackDropModal from '@/components/common/modal/BackDropModal';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import CloseIcon from '@/public/icon/closeIcon.svg';

const S = {
  ContentContainer: styled.div`
    position: relative;
    width: 50rem;
    height: 20rem;

    ${MEDIA_QUERIES.onMobile} {
      width: 28rem;
      height: 17rem;
    }
  `,
  CloseIcon: styled(CloseIcon)`
    width: 3.2rem;
    height: 3.2rem;
    cursor: pointer;
  `,
  Text: styled.p`
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: ${({ theme }) => theme.color.body};
    white-space: nowrap;
    font-size: 1.8rem;
    font-weight: 540;

    ${MEDIA_QUERIES.onMobile} {
      top: 40%;
      font-size: 1.6rem;
    }
  `,
  ImportButton: styled(Button)`
    position: absolute;
    bottom: 0rem;
    right: 0rem;
    padding: 1.4rem 4.6rem;

    ${MEDIA_QUERIES.onMobile} {
      padding: 1.2rem 5.6rem;
      right: 50%;
      transform: translate(50%);
    }
  `,
};

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClick: () => void;
  message: string;
}

function ConfirmDeleteModal({
  isOpen,
  onClose,
  onClick,
  message,
}: ConfirmDeleteModalProps) {
  return (
    <BackDropModal isOpen={isOpen} onClose={onClose}>
      <S.ContentContainer>
        <S.CloseIcon onClick={onClose} />
        <S.Text>{message}</S.Text>
        <S.ImportButton onClick={onClick} styleType="PRIMARY" size="M">
          확인
        </S.ImportButton>
      </S.ContentContainer>
    </BackDropModal>
  );
}

export default ConfirmDeleteModal;
