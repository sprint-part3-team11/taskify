import styled from 'styled-components';
import FormInput from '@/components/common/form/Form';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import authApi from '@/api/auth.api';

const S = {
  Layout: styled.div`
    width: 62rem;
    height: 45.5rem;
    padding: 3.2rem 2.8rem 2.8rem 2.8rem;
    margin: 1.2rem 2rem 0 0;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.color.white};

    ${MEDIA_QUERIES.onMobile} {
      width: 28.4rem;
      height: 45.2rem;
      margin-top: 1.2rem;
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
};

function PasswordChange() {
  // editMyProfilePassword FormInput에 props로 함수 보내기
  const editMyProfilePassword = async (
    editPassword: string,
    newEditPassword: string,
  ) => {
    try {
      const response = await authApi.getPasswordChange({
        password: editPassword,
        newPassword: newEditPassword,
      });
      console.log(response.data);
    } catch (error) {
      console.error('에러:', error.response.data.message);
    }
  };
  return (
    <S.Layout>
      <S.Container>
        <S.Title>비밀번호 변경</S.Title>
        <S.PasswordContent>
          <FormInput formType="editPassword" btnSize="S" />
        </S.PasswordContent>
      </S.Container>
    </S.Layout>
  );
}

export default PasswordChange;
