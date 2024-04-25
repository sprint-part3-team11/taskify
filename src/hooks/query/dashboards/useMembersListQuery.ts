import { useQuery } from '@tanstack/react-query';
import { API } from '@/constants/API';
import membersApi from '@/api/members.api';

// 대시보드 멤버 목록 조회
function useMembersListQuery(dashboardId) {
  return useQuery({
    queryKey: [API.MEMBERS, dashboardId],
    queryFn: async () => {
      const { data } = await membersApi.getDashboardMembers(dashboardId);
      return data;
    },
    // { Success or Error 처리 등의 옵션자리 }
  });
}

export default useMembersListQuery;
