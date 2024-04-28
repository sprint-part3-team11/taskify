import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { profileImageUrlState } from '@/hooks/query/users/useMyPropfileQuery';
import usersApi from '@/api/users.api';

interface ProfileEditData {
  name: string;
}

// 프로필 수정 => 이미지, 닉네임
function useProfileEditMutation(imgServerUrl: string) {
  const profileImageUrl = useRecoilValue(profileImageUrlState);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ProfileEditData) => {
      return usersApi.putMyProfileEdit({
        nickname: data.name,
        profileImageUrl: imgServerUrl || profileImageUrl,
      });
    },
    onSuccess: () => {
      toast.success('성공');
      queryClient.invalidateQueries();
    },
  });
}

export default useProfileEditMutation;
