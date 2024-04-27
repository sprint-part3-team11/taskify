import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import usersApi from '@/api/users.api';

// 회원가입 => 이메일, 닉네임, 비밀번호
function useSignUpMutation({ setOpen, setModalMessage, router }) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
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
      const message = error.response?.data?.message;
      setModalMessage(message);
    },
  });
}

export default useSignUpMutation;
