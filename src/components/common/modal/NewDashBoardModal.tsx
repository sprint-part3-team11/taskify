import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  ColorSelector,
  resultColorState,
} from '@/components/common/ColorSelector';
import Button from '@/components/common/button/Button';
import InputField from '@/components/common/form/LabeledInput';
import BackDropModal from '@/components/common/modal/BackDropModal';
import useCreateDashboardMutation from '@/hooks/query/dashboards/useCreateDashboardMutation';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import dashboardsApi from '@/api/dashboards.api';

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
      margin-top: 2.4rem;
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

interface NewDashBoardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (name: string, color: string) => void;
}

function NewDashBoardModal({
  isOpen,
  onClose,
  onCreate,
}: NewDashBoardModalProps) {
  const [dashBoardName, setColumnName] = useState('');
  const selectedColor = useRecoilValue(resultColorState);
  const setColor = useSetRecoilState(resultColorState);
  const { mutate: creatDashboard } = useCreateDashboardMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumnName(e.target.value);
  };

  const handleClose = () => {
    setColumnName('');
    setColor('');
    onClose();
  };

  const handleDashBoardName = async () => {
    onCreate(dashBoardName, selectedColor);
    creatDashboard({ title: dashBoardName, color: selectedColor });
    handleClose();
  };

  return (
    <BackDropModal isOpen={isOpen} onClose={handleClose}>
      <S.Title>새로운 대시보드</S.Title>
      <S.Input
        label="대시보드 이름"
        id="newDashBoard"
        placeholder="뉴프로젝트"
        value={dashBoardName}
        onChange={handleInputChange}
      />
      <ColorSelector />
      <S.ButtonContainer>
        <S.ImportButton onClick={onClose} styleType="SECONDARY" size="M">
          취소
        </S.ImportButton>
        <S.ImportButton
          onClick={handleDashBoardName}
          styleType="PRIMARY"
          size="M"
          disabled={!dashBoardName.trim() || !selectedColor}
        >
          생성
        </S.ImportButton>
      </S.ButtonContainer>
    </BackDropModal>
  );
}

export default NewDashBoardModal;
