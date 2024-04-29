import { useState } from 'react';
import toast from 'react-hot-toast';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import authApi from '@/api/auth.api';

interface PasswordChangeData {
  nowPassword: string;
  newPassword: string;
}

// 프로필 수정 => 이미지, 닉네임
function usePasswordChangeMutation() {
  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const mutation = useMutation<unknown, Error, PasswordChangeData>({
    mutationFn: async (data) => {
      return authApi.putPasswordChange({
        nowPassword: data.nowPassword,
        newPassword: data.newPassword,
      });
    },
    onSuccess: () => {
      toast.success('비밀번호 변경 성공✨');
      toast.success('비밀번호 변경 성공✨');
      window.location.reload();
    },
    onError: (error: unknown) => {
      setOpen(true);
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message;
        setModalMessage(message);
      } else {
        // error가 AxiosError가 아닌 경우, 예를 들어 네트워크 에러 등
        setModalMessage('알 수 없는 오류가 발생했습니다.👀');
      }
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
