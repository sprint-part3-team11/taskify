import { useMutation } from '@tanstack/react-query';
import usersApi from '@/api/users.api';

// 프로필 수정 => 이미지, 닉네임
function useProfileEditMutation(imgServerUrl) {
  return useMutation({
    mutationFn: async (data) => {
      return usersApi.putMyProfileEdit({
        nickname: data.name,
        profileImageUrl: imgServerUrl,
      });
    },
    onSuccess: () => {
      alert('성공');
    },
  });
}

export default useProfileEditMutation;
