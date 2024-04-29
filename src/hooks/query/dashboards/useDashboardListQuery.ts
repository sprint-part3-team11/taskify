import { useQuery, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import dashboardsApi from '@/api/dashboards.api';

// 대시보드 목록조회
function useDashboardListQuery({ navigationMethod, page, size = 5 }) {
  return useQuery({
    queryKey: [API.DASHBOARDS, navigationMethod, page, size],
    queryFn: async () => {
      const res = await dashboardsApi.getDashboardList({
        navigationMethod,
        page,
        size,
      });

      return res;
    },
    retry: false,
  });
}

export default useDashboardListQuery;
