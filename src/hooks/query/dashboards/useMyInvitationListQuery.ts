import { useQuery, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import invitationsApi from '@/api/invitations.api';

// 내가 받은 초대목록
function useMyInvitationListQuery(size: string) {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: [API.INVITATIONS],
    queryFn: async () => {
      const { data } = await invitationsApi.getMyInvitationList(size);
      return data;
    },
    onSuccess: () => {
      // 쿼리 무효화
      queryClient.invalidateQueries([API.INVITATIONS]);
    },
  });
}

export default useMyInvitationListQuery;
