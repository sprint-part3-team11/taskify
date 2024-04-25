import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import dashboardsApi from '@/api/dashboards.api';

function useDeleteDashboardMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (dashboardId) => {
      return dashboardsApi.deleteDashboard(dashboardId);
    },
    onSuccess() {
      queryClient.invalidateQueries([API.DASHBOARDS]);
    },
  });
}

export default useDeleteDashboardMutation;
