import { NextRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SignUpType } from '@/constants/SCHEMA';
import usersApi from '@/api/users.api';
import { CustomError } from '@/types/Error';

// 회원가입 => 이메일, 닉네임, 비밀번호
function useSignUpMutation({
  setOpen,
  setModalMessage,
  router,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  setModalMessage: Dispatch<SetStateAction<string>>;
  router: NextRouter;
}) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: SignUpType) => {
      return usersApi.postSignUp({
        email: data.email,
        nickname: data.name,
        password: data.password,
      });
    },
    onSuccess: () => {
      toast.success('환영합니다~가입이 완료되었습니다!🤗');
      queryClient.invalidateQueries();
      router.push('/signin');
    },
    onError: (error) => {
      setOpen(true);
      const message = (error as CustomError).response?.data?.message;
      setModalMessage(message ?? '오류가 발생했습니다.');
    },
  });
}

export default useSignUpMutation;
