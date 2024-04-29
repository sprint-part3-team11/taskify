import { NextRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import { useMutation } from '@tanstack/react-query';
import { SignInType } from '@/constants/SCHEMA';
import authApi from '@/api/auth.api';
import { CustomError } from '@/types/Error';

// 로그인 => 이메일, 비밀번호
function useSignInMutation({
  setOpen,
  setModalMessage,
  router,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  setModalMessage: Dispatch<SetStateAction<string>>;
  router: NextRouter;
}) {
  return useMutation({
    mutationFn: async (data: SignInType) => {
      return authApi.postLogin({
        email: data.email,
        password: data.password,
      });
    },
    onSuccess: () => {
      router.push('/my-dashboard');
    },
    onError: (error) => {
      setOpen(true);
      const message = (error as CustomError).response?.data?.message;
      setModalMessage(message ?? '오류가 발생했습니다.');
    },
  });
}

export default useSignInMutation;
