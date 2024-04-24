import { useInfiniteQuery } from '@tanstack/react-query';
import { API } from '@/constants/API';
import invitationsApi from '@/api/invitations.api';

// 내가 받은 초대목록
function useMyInvitationListQuery(size = 5) {
  return useInfiniteQuery({
    queryKey: [API.INVITATIONS],
    queryFn: async ({ pageParam = null }) => {
      const { data } = await invitationsApi.getMyInvitationList({
        size,
        cursorId: pageParam,
      });
      return data;
    },
    getNextPageParam: (lastPage) => lastPage.cursorId || undefined,
  });
}

export default useMyInvitationListQuery;
