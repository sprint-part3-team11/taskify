import { API, API_COLUMNS } from '@/constants/API';
import instance from '@/api/instance';

/**
 * 컬럼 목록조회 api
 */
const getColumnList = (columnsId: string, dashboardId: string) => {
  return instance({
    url: API_COLUMNS.BY_ID(columnsId),
    method: 'GET',
    params: {
      dashboardId,
    },
  });
};

export default {
  getColumnList,
};
