import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import dashboardsApi from '@/api/dashboards.api';

// 초대 응답
function useEditDashboardMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ dashboardId, title, color }) => {
      return dashboardsApi.putEditDashboard({
        dashboardId,
        title,
        color,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries([API.DASHBOARDS]);
    },
  });
}

export default useEditDashboardMutation;
