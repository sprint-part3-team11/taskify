import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import dashboardsApi from '@/api/dashboards.api';

function useCreateDashboardMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ title, color }) => {
      return dashboardsApi.postCreateDashboard({
        title,
        color,
      });
    },
    onSuccess() {
      queryClient.invalidateQueries([API.DASHBOARDS]);
    },
  });
}

export default useCreateDashboardMutation;
