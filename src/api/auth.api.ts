import { API_AUTH } from '@/constants/API';
import { SignInType } from '@/constants/SCHEMA';
import instance from '@/api/instance';
import { PasswordChange } from '@/types/Form';

/**
 * 로그인
 */
const postLogin = ({ email, password }: SignInType) => {
  return instance({
    url: API_AUTH.LOGIN,
    method: 'POST',
    data: {
      email,
      password,
    },
  });
};

/**
 * 비밀번호 변경
 */
const putPasswordChange = ({ nowPassword, newPassword }: PasswordChange) => {
  return instance({
    url: API_AUTH.PASSWORD_CHANGE,
    method: 'PUT',
    data: {
      password: nowPassword,
      newPassword,
    },
  });
};

export default { postLogin, putPasswordChange };
