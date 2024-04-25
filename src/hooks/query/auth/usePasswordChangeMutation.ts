import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import authApi from '@/api/auth.api';

// 프로필 수정 => 이미지, 닉네임
function usePasswordChangeMutation() {
  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const mutation = useMutation({
    mutationFn: async (data) => {
      return authApi.getPasswordChange({
        password: data.nowPassword,
        newPassword: data.newPassword,
      });
    },
    onSuccess: () => {
      alert('비밀번호 변경 성공');
    },
    onError: (error) => {
      setOpen(true);
      const message = error.response?.data?.message || '오류가 발생했습니다.';
      setModalMessage(message);
    },
  });

  return {
    ...mutation,
    open,
    setOpen,
    modalMessage,
  };
}

export default usePasswordChangeMutation;
