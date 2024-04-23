import { useQuery } from '@tanstack/react-query';
import { API } from '@/constants/API';
import invitationsApi from '@/api/invitations.api';

// 내가 받은 초대목록
function useMyInvitationListQuery(size: string) {
  return useQuery({
    queryKey: [API.INVITATIONS],
    queryFn: async () => {
      const { data } = await invitationsApi.getMyInvitationList(size);
      return data;
    },
    // { Success or Error 처리 등의 옵션자리 }
  });
}

export default useMyInvitationListQuery;
