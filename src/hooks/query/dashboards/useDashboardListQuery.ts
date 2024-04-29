import { useQuery, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import dashboardsApi from '@/api/dashboards.api';

interface DashboardListQueryProp {
  navigationMethod: string;
  page: number;
  size: number;
}

// 대시보드 목록조회
function useDashboardListQuery({
  navigationMethod,
  page,
  size = 5,
}: DashboardListQueryProp) {
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
