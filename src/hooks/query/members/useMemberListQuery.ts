import { useQuery } from '@tanstack/react-query';
import { API } from '@/constants/API';
import membersApi from '@/api/members.api';

function useMemberListQuery(dashboardId: number) {
  return useQuery({
    queryKey: [API.MEMBERS, dashboardId],
    queryFn: async () => {
      if (!dashboardId) return null;
      const { data } = await membersApi.getDashboardMembers(dashboardId);
      return data;
    },
  });
}

export default useMemberListQuery;
