import instance from './instance';
import { API, API_AUTH } from '@/constants/API';

interface SignUpProps {
  email: string;
  nickname?: string;
  password: string;
}

const postSignUp = ({ email, nickname, password }: SignUpProps) => {
  return instance({
    url: API.USERS,
    method: 'POST',
    data: {
      email,
      nickname,
      password,
    },
  });
};

const postSignIn = ({ email, password }: SignUpProps) => {
  return instance({
    url: API_AUTH.LOGIN,
    method: 'POST',
    data: {
      email,
      password,
    },
  });
};

export default { postSignUp, postSignIn };
