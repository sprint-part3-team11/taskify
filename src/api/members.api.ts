import { API } from '@/constants/API';
import instance from '@/api/instance';

/**
 * 대시보드 멤버 목록 조회
 */

const getDashboardMembers = (dashboardId, page = 1, size = 30) => {
  return instance({
    url: API.MEMBERS,
    method: 'GET',
    params: {
      page,
      size,
      dashboardId,
    },
  });
};

const deleteDashboardMembers = (memberId) => {
  return instance({
    url: API_MEMBERS.BY_ID(memberId),
    method: 'DELETE',
    params: {
      memberId,
    },
  });
};

export default { getDashboardMembers, deleteDashboardMembers };
