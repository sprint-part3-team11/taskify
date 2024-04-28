import { useQuery } from '@tanstack/react-query';
import { API } from '@/constants/API';
import columnsApi from '@/api/columns.api';

interface ColumnListQueryProp {
  dashboardId: number;
}

// 컬럼 목록조회
function useColumnListQuery({ dashboardId }: ColumnListQueryProp) {
  return useQuery({
    queryKey: [API.COLUMNS, dashboardId],
    queryFn: async () => {
      if (!dashboardId) return null;
      const { data } = await columnsApi.getColumnList(dashboardId);
      return data.data;
    },
    // { Success or Error 처리 등의 옵션자리 }
  });
}

export default useColumnListQuery;
