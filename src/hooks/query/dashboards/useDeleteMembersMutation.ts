import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import membersApi from '@/api/members.api';

function useDeleteMembersMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ memberId }) => {
      return membersApi.deleteDashboardMembers(memberId);
    },
    onSuccess() {
      queryClient.invalidateQueries([API.COMMENTS]);
    },
  });
}

export default useDeleteMembersMutation;
