import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import dashboardsApi from '@/api/dashboards.api';

function useInviteDashboardMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ dashboardId, email }) => {
      return dashboardsApi.postInviteDashboard({
        dashboardId,
        email,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries([API.DASHBOARDS]);
    },
  });
}

export default useInviteDashboardMutation;
