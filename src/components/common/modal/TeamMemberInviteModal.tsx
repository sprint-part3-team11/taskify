import { useState } from 'react';
import styled from 'styled-components';
import Button from '@/components/common/button/Button';
import InputField from '@/components/common/input/InputField';
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

interface TeamMemberInviteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (email: string) => void;
}

function TeamMemberInviteModal({
  isOpen,
  onClose,
  onCreate,
}: TeamMemberInviteModalProps) {
  const [email, setColumnName] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumnName(e.target.value);
  };

  const handleClose = () => {
    setColumnName('');
    onClose();
  };

  const handleEmail = () => {
    onCreate(email);
    handleClose();
  };

  return (
    <BackDropModal isOpen={isOpen} onClose={handleClose}>
      <S.Title>초대하기</S.Title>
      <S.Input
        label="이름"
        id="inviteTeamMember"
        placeholder="codeit@codeit.com"
        value={email}
        onChange={handleInputChange}
      />
      <S.ButtonContainer>
        <S.ImportButton onClick={onClose} styleType="SECONDARY" size="M">
          취소
        </S.ImportButton>
        <S.ImportButton onClick={handleEmail} styleType="PRIMARY" size="M">
          초대
        </S.ImportButton>
      </S.ButtonContainer>
    </BackDropModal>
  );
}

export default TeamMemberInviteModal;
