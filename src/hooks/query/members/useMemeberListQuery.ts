import { useQuery } from '@tanstack/react-query';
import { API } from '@/constants/API';
import membersApi from '@/api/members.api';

function useMemeberListQuery(dashboardId) {
  return useQuery({
    queryKey: [API.MEMBERS, dashboardId],
    queryFn: async () => {
      const { data } = await membersApi.getDashboardMembers({
        dashboardId,
        page: 1,
        size: 30,
      });
      return data;
    },
  });
}

export default useMemeberListQuery;
