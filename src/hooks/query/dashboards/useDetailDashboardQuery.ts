import { useQuery } from '@tanstack/react-query';
import { API } from '@/constants/API';
import dashboardsApi from '@/api/dashboards.api';

// 대시보드 목록조회
function useDetailDashboardQuery(dashboardId) {
  return useQuery({
    queryKey: [API.DASHBOARDS, dashboardId],
    queryFn: async () => {
      if (!dashboardId) return null;
      const { data } = await dashboardsApi.getDashboardDetail(dashboardId);
      return data;
    },
    // { Success or Error 처리 등의 옵션자리 }
  });
}

export default useDetailDashboardQuery;
