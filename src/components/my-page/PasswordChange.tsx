import { useState } from 'react';
import InputField from '../common/InputField';
import Button from '../common/button/Button';
import styled from 'styled-components';
import { BUTTON_TYPE } from '@/constants/BUTTON_TYPE';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

const S = {
  Layout: styled.div`
    width: 62rem;
    height: 41.5rem;
    padding: 3.2rem 2.8rem 2.8rem 2.8rem;
    margin: 1.2rem 2rem 0 0;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.color.white};

    ${MEDIA_QUERIES.onMobile} {
      width: 28.4rem;
      height: 45.2rem;
      margin: 1.2rem 1.2rem 0 1.2rem;
    }
  `,
  Container: styled.div``,
  Title: styled.span`
    font-size: 2.4rem;
    font-weight: 700;
  `,
  PasswordContent: styled.div`
    margin-top: 1.2rem;

    & > * {
      margin-top: 2rem;
    }
  `,
  StorageButton: styled(Button)`
    font-size: 1.4rem;
    padding: 0.8rem 2.9rem 0.7rem 3rem;
    margin-left: 48rem;
    margin-top: 2.4rem;

    ${MEDIA_QUERIES.onMobile} {
      margin-left: 14.5rem;
    }
  `,
};

function PasswordChange() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isDisabled = !currentPassword || !newPassword || !confirmPassword;
  return (
    <S.Layout>
      <S.Container>
        <S.Title>비밀번호 변경</S.Title>
        <S.PasswordContent>
          <InputField
            label="현재 비밀번호"
            id="title"
            type="text"
            placeholder="현재 비밀번호 입력"
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <InputField
            label="새 비밀번호"
            id="title"
            type="text"
            placeholder="새 비밀번호 입력"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <InputField
            label="새 비밀번호 확인"
            id="title"
            type="text"
            placeholder="새 비밀번호 입력"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </S.PasswordContent>
        <S.StorageButton
          size="L"
          styleType={BUTTON_TYPE.PRIMARY}
          style={{ width: '8.4rem' }}
          disabled={isDisabled}
        >
          변경
        </S.StorageButton>
      </S.Container>
    </S.Layout>
  );
}

export default PasswordChange;
