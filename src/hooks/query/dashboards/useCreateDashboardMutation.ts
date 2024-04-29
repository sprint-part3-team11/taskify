import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import dashboardsApi from '@/api/dashboards.api';

interface TitleAndColorProp {
  title: string;
  color: string;
}

function useCreateDashboardMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ title, color }: TitleAndColorProp) => {
      return dashboardsApi.postCreateDashboard({
        title,
        color,
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [API.DASHBOARDS] });
    },
  });
}

export default useCreateDashboardMutation;
