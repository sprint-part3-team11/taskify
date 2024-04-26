import { API, API_MEMBERS } from '@/constants/API';
import instance from '@/api/instance';

const getDashboardMembers = ({ dashboardId, page, size }) => {
  return instance({
    url: API.MEMBERS,
    method: 'GET',
    params: {
      dashboardId,
      page,
      size,
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
