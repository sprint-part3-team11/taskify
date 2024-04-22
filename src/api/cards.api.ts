import instance from './instance';
import { API, API_CARDS } from '@/constants/API';

/**
 * 테스트용 카드 목록 조회 api
 */

const getCardList = (columnId: string) => {
  return instance({
    url: API.CARDS,
    method: 'GET',
    params: {
      columnId: columnId,
    },
  });
};

export default { getCardList };
