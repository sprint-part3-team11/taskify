import { useQuery } from '@tanstack/react-query';
import { API } from '@/constants/API';
import membersApi from '@/api/members.api';

function useMemeberListQuery(dashboardId) {
  return useQuery({
    queryKey: [API.MEMBERS, dashboardId],
    queryFn: async () => {
      if (!dashboardId) return null;
      const { data } = await membersApi.getDashboardMembers(dashboardId);
      return data;
    },
  });
}

export default useMemeberListQuery;
