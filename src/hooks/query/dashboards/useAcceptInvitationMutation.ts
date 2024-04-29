import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import invitationsApi from '@/api/invitations.api';

interface InvitationAcceptMutationProp {
  invitationId: number;
  inviteAccepted: boolean;
}

// 초대 응답
function useAcceptInvitationMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      invitationId,
      inviteAccepted,
    }: InvitationAcceptMutationProp) => {
      return invitationsApi.putInvitationResponse({
        invitationId,
        inviteAccepted,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [API.INVITATIONS] });
    },
  });
}

export default useAcceptInvitationMutation;
