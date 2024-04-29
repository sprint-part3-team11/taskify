import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import dashboardsApi from '@/api/dashboards.api';

interface InvitationCancelMutation {
  dashboardId: number;
  invitationId: number;
}

function useCancelInvitationMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      dashboardId,
      invitationId,
    }: InvitationCancelMutation) => {
      return dashboardsApi.deleteDashboardInvitation({
        dashboardId,
        invitationId,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [API.DASHBOARDS] });
    },
  });
}

export default useCancelInvitationMutation;
