import toast from 'react-hot-toast';
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
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message || '알 수 없는 에러가 발생했습니다.';
      toast.error(`Error: ${errorMessage}`);
    },
  });
}

export default useInviteDashboardMutation;
