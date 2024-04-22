import { useState } from 'react';
import styled from 'styled-components';
import Button from '@/components/common/button/Button';
import InputField from '@/components/common/form/LabeledInput';
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
  Input: styled(InputField)`
    min-width: 48.4rem;
    padding: 1.5rem 1.6rem 1.4rem;
    margin-bottom: 2.8rem;

    border-radius: 0.6rem;
    border: 1px solid ${({ theme }) => theme.color.grayLight};
    background: ${({ theme }) => theme.color.white};

    color: ${({ theme }) => theme.color.body};
    font-weight: 400;
    font-size: 1.6rem;

    ${MEDIA_QUERIES.onMobile} {
      min-width: 29rem;
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

interface NewColumnsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (columnName: string) => void;
}

function NewColumnsModal({ isOpen, onClose, onCreate }: NewColumnsModalProps) {
  const [columnName, setColumnName] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumnName(e.target.value);
  };

  const handleClose = () => {
    setColumnName('');
    onClose();
  };

  const handleCreate = () => {
    onCreate(columnName);
    handleClose();
  };

  return (
    <BackDropModal isOpen={isOpen} onClose={handleClose}>
      <S.Title>새 컬럼 생성</S.Title>
      <S.Input
        label="이름"
        id="addNewColumn"
        placeholder="새로운 프로젝트"
        value={columnName}
        onChange={handleInputChange}
      />
      <S.ButtonContainer>
        <S.ImportButton onClick={onClose} styleType="SECONDARY" size="M">
          취소
        </S.ImportButton>
        <S.ImportButton
          onClick={handleCreate}
          styleType="PRIMARY"
          size="M"
          disabled={!columnName.trim()}
        >
          생성
        </S.ImportButton>
      </S.ButtonContainer>
    </BackDropModal>
  );
}

export default NewColumnsModal;
