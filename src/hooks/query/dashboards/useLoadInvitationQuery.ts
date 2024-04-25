import { useQuery, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import dashboardsApi from '@/api/dashboards.api';

function useLoadInvitationQuery(dashboardId) {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: [API.DASHBOARDS],
    queryFn: async () => {
      const { data } = await dashboardsApi.getDashboardInvitation(dashboardId);
      return data;
    },
    onSuccess: () => {
      // 쿼리 무효화
      queryClient.invalidateQueries([API.DASHBOARDS]);
    },
  });
}

export default useLoadInvitationQuery;
