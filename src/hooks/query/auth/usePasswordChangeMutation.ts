import { useMutation } from '@tanstack/react-query';
import authApi from '@/api/auth.api';

// 프로필 수정 => 이미지, 닉네임
function usePasswordChangeMutation() {
  return useMutation({
    mutationFn: async (data) => {
      return authApi.getPasswordChange({
        password: data.nowPassword,
        newPassword: data.newPassword,
      });
    },
    onSuccess: () => {
      alert('비밀번호 변경 성공');
    },
  });
}

export default usePasswordChangeMutation;
