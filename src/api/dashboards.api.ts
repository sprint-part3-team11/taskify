import { API } from '@/constants/API';
import instance from '@/api/instance';

/**
 * 대시보드 목록 조회
 */
const getDashboardList = () => {
  return instance({
    url: API.DASHBOARDS,
    method: 'GET',
  });
};

export default { getDashboardList };
