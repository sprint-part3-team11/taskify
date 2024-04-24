import { useQuery } from '@tanstack/react-query';
import { API } from '@/constants/API';
import usersApi from '@/api/users.api';

// 대시보드 목록조회
function useMyPropfileQuery() {
  return useQuery({
    queryKey: [API.USERS],
    queryFn: async () => {
      const { data } = await usersApi.getMyProfile();
      return data;
    },
  });
}

export default useMyPropfileQuery;
