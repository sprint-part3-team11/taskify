import { API } from '@/constants/API';
import instance from '@/api/instance';

/**
 * 대시보드 멤버 목록 조회
 */

const getDashboardMembers = (dashboardId) => {
  return instance({
    url: API.MEMBERS,
    method: 'GET',
    params: {
      dashboardId,
    },
  });
};

export default { getDashboardMembers };
