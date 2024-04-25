import { useMutation } from '@tanstack/react-query';
import authApi from '@/api/auth.api';

// 로그인 => 이메일, 비밀번호
function useSignInMutation({ setOpen, setModalMessage, router }) {
  return useMutation({
    mutationFn: async (data) => {
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
      const message = error.response?.data?.message;
      setModalMessage(message);
    },
  });
}

export default useSignInMutation;
