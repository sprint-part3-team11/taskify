import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { profileImageUrlState } from '@/hooks/query/users/useMyPropfileQuery';
import usersApi from '@/api/users.api';

// 프로필 수정 => 이미지, 닉네임
function useProfileEditMutation(imgServerUrl: string) {
  const profileImageUrl = useRecoilValue(profileImageUrlState);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      return usersApi.putMyProfileEdit({
        nickname: data.name,
        profileImageUrl: imgServerUrl || profileImageUrl,
      });
    },
    onSuccess: () => {
      alert('성공');
      queryClient.invalidateQueries();
    },
  });
}

export default useProfileEditMutation;
