import { useMutation } from '@tanstack/react-query';
import usersApi from '@/api/users.api';

// 프로필 수정 => 이미지, 닉네임
function useMyprofileEditMutation() {
  return useMutation({
    mutationFn: async ({ nickname, imgServerUrl }) => {
      return usersApi.putMyProfileEdit({
        nickname,
        imgServerUrl,
      });
    },
    onSuccess(data) {},
  });
}

export default useMyprofileEditMutation;
