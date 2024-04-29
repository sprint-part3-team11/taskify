import { API, API_MEMBERS } from '@/constants/API';
import instance from '@/api/instance';

interface GetDashboardMembersProps {
  dashboardId: number;
  page: number;
  size: number;
}

/**
 * 대시보드 멤버 목록 조회
 */
const getDashboardMembers = ({
  dashboardId,
  page = 1,
  size = 30,
}: GetDashboardMembersProps) => {
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

const deleteDashboardMembers = (memberId: number) => {
  return instance({
    url: API_MEMBERS.BY_ID(memberId),
    method: 'DELETE',
    params: {
      memberId,
    },
  });
};

export default { getDashboardMembers, deleteDashboardMembers };
