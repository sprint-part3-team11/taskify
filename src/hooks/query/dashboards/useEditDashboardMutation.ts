import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import dashboardsApi from '@/api/dashboards.api';

interface DashboardEditMutation {
  dashboardId: number;
  title: string;
  color: string;
}

function useEditDashboardMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      dashboardId,
      title,
      color,
    }: DashboardEditMutation) => {
      return dashboardsApi.putEditDashboard({
        dashboardId,
        title,
        color,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [API.DASHBOARDS] });
    },
  });
}

export default useEditDashboardMutation;
