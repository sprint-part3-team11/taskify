import { useState } from 'react';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import authApi from '@/api/auth.api';
import { PasswordChange } from '@/types/Form';

interface CustomError {
  response?: {
    data?: {
      message: string;
    };
  };
}

// 프로필 수정 => 이미지, 닉네임
function usePasswordChangeMutation() {
  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const mutation = useMutation({
    mutationFn: async (data: PasswordChange) => {
      return authApi.putPasswordChange({
        nowPassword: data.nowPassword,
        newPassword: data.newPassword,
      });
    },
    onSuccess: () => {
      toast.success('비밀번호 변경 성공✨');
      window.location.reload();
    },
    onError: (error) => {
      setOpen(true);
      const message = (error as CustomError).response?.data?.message;
      setModalMessage(message ?? '오류가 발생했습니다.');
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
