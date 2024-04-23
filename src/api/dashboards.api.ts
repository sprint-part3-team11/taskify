import { API } from '@/constants/API';
import instance from '@/api/instance';

/**
 * 대시보드 목록 조회
 */
const getDashboardList = ({ navigationMethod, page, size }) => {
  return instance({
    url: API.DASHBOARDS,
    method: 'GET',
    params: {
      navigationMethod,
      page,
      size,
    },
  });
};

/**
 * 대시보드 생성
 */
const getCreatedDashboard = ({ title, color }) => {
  return instance({
    url: API.DASHBOARDS,
    method: 'POST',
    data: {
      title,
      color,
    },
  });
};

export default { getDashboardList, getCreatedDashboard };
