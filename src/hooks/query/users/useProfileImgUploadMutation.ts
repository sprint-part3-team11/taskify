import { useMutation } from '@tanstack/react-query';
import { atom, useSetRecoilState } from 'recoil';
import usersApi from '@/api/users.api';

const resultServerImgState = atom({
  key: 'resultServerImgState',
  default: '',
});

// 프로필 이미지 업로드
function useProfileImgUploadMutation() {
  const setImgServerUrl = useSetRecoilState(resultServerImgState);

  return useMutation({
    mutationFn: async (profileImageUrl: File) => {
      return usersApi.postProfileImgUpload({
        profileImageUrl,
      });
    },
    onSuccess(data) {
      setImgServerUrl((currentUrl) =>
        data.data !== currentUrl ? data.data.profileImageUrl : currentUrl,
      );
    },
  });
}

export { useProfileImgUploadMutation, resultServerImgState };
