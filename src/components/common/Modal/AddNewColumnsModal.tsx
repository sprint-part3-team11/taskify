import Button from '../button/Button';
import styled from 'styled-components';
import BackDropModal from '@/components/common/modal/BackDropModal';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

const S = {
  Title: styled.p`
    margin-bottom: 3.2rem;

    color: ${({ theme }) => theme.color.body};
    font-size: 2.4rem;
    font-weight: 700;
  `,
  Text: styled.p`
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.color.body};
    font-size: 1.8rem;
    font-weight: 500;
  `,
  Input: styled.input`
    width: 48.4rem;
    padding: 1.5rem 1.6rem 1.4rem;
    margin-bottom: 2.8rem;
    font-size: 1.6rem;
    border-radius: 0.6rem;
    border: 1px solid ${({ theme }) => theme.color.grayLight};
    background: ${({ theme }) => theme.color.white};

    color: ${({ theme }) => theme.color.body};
    font-size: 1.6rem;
    font-weight: 400;

    ${MEDIA_QUERIES.onMobile} {
      width: 29rem;
      margin-bottom: 2.4rem;
    }
  `,
  ImportButton: styled(Button)`
    padding: 1.4rem 4.6rem;
    ${MEDIA_QUERIES.onMobile} {
      padding: 1.2rem 5.6rem;
    }
  `,
  ButtonContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1.4rem;
    ${MEDIA_QUERIES.onMobile} {
      justify-content: space-between;
    }
  `,
};

interface AddNewColumnsModal {
  isOpen: boolean;
  onClose: () => void;
}

function AddNewColumnsModal({ isOpen, onClose }: AddNewColumnsModal) {
  return (
    <BackDropModal isOpen={isOpen} onClose={onClose}>
      <S.Title>새 컬럼 생성</S.Title>
      <S.Text>이름</S.Text>
      <S.Input placeholder="새로운 프로젝트" />
      <S.ButtonContainer>
        <S.ImportButton onClick={onClose} styleType="SECONDARY" size="M">
          취소
        </S.ImportButton>
        <S.ImportButton onClick={onClose} styleType="PRIMARY" size="M">
          생성
        </S.ImportButton>
      </S.ButtonContainer>
    </BackDropModal>
  );
}

export default AddNewColumnsModal;
