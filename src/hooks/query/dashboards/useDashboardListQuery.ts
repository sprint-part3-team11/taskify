import { useQuery } from '@tanstack/react-query';
import { API } from '@/constants/API';
import dashboardsApi from '@/api/dashboards.api';

// 대시보드 목록조회
function useDashboardListQuery({ navigationMethod, page, size }) {
  return useQuery({
    queryKey: [API.DASHBOARDS, navigationMethod],
    queryFn: async () => {
      const { data } = await dashboardsApi.getDashboardList({
        navigationMethod,
        page,
        size,
      });
      return data;
    },
    // { Success or Error 처리 등의 옵션자리 }
  });
}

export default useDashboardListQuery;
