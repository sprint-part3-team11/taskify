import { useQuery } from '@tanstack/react-query';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { API } from '@/constants/API';
import usersApi from '@/api/users.api';

const profileImageUrlState = atom({
  key: 'profileImageUrl', // 고유 키
  default: '', // 기본값
});

function useMyPropfileQuery() {
  return useQuery({
    queryKey: [API.USERS],
    queryFn: async () => {
      const { data } = await usersApi.getMyProfile();
      return data;
    },
  });
}

export { useMyPropfileQuery, profileImageUrlState };
