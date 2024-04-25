import { useQuery } from '@tanstack/react-query';
import { API } from '@/constants/API';
import columnsApi from '@/api/columns.api';

// 컬럼 목록조회
function useColumnListQuery({ dashboardId }) {
  return useQuery({
    queryKey: [API.COLUMNS, dashboardId],
    queryFn: async () => {
      const { data } = await columnsApi.getColumnList(dashboardId);
      return data.data;
    },
    // { Success or Error 처리 등의 옵션자리 }
  });
}

export default useColumnListQuery;
