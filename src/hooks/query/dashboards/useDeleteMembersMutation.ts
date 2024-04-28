import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import membersApi from '@/api/members.api';

interface MemberDeleteMutation {
  memberId: number;
}

function useDeleteMembersMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ memberId }: MemberDeleteMutation) => {
      return membersApi.deleteDashboardMembers(memberId);
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [API.COMMENTS] });
    },
  });
}

export default useDeleteMembersMutation;
