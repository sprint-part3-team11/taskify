import { API, API_INVITATIONS } from '@/constants/API';
import instance from '@/api/instance';

interface InvitationResponseParams {
  invitationId: string;
  inviteAccepted: boolean;
}

/**
 * 내가받은 초대목록 조회 api
 */
const getMyInvitationList = (size: string) => {
  return instance({
    url: API.INVITATIONS,
    method: 'GET',
    params: {
      size,
    },
  });
};

/**
 * 초대 응답 api
 */
const putInvitationResponse = ({
  invitationId,
  inviteAccepted,
}: InvitationResponseParams) => {
  return instance({
    url: API_INVITATIONS.BY_ID(invitationId),
    method: 'PUT',
    data: {
      inviteAccepted,
    },
  });
};

export default { getMyInvitationList, putInvitationResponse };
