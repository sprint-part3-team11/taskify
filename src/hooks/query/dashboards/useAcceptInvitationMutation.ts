import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import invitationsApi from '@/api/invitations.api';

// 초대 응답
function useAcceptInvitationMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ invitationId, inviteAccepted }) => {
      return invitationsApi.putInvitationResponse({
        invitationId,
        inviteAccepted,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries([API.INVITATIONS]);
    },
  });
}

export default useAcceptInvitationMutation;
