import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import dashboardsApi from '@/api/dashboards.api';

function useCancelInvitationMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ dashboardId, invitationId }) => {
      return dashboardsApi.deleteDashboardInvitation({
        dashboardId,
        invitationId,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries([API.DASHBOARDS]);
    },
  });
}

export default useCancelInvitationMutation;
