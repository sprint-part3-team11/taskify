import { API, API_CARDS } from '@/constants/API';
import instance from '@/api/instance';

/**
 * 테스트용 카드 목록 조회 api
 */

const getCardList = (columnId: string) => {
  return instance({
    url: API.CARDS,
    method: 'GET',
    params: {
      columnId,
    },
  });
};

export default { getCardList };
