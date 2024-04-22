import instance from './instance';
import { API, API_CARDS } from '@/constants/API';

/**
 * 테스트용 카드 목록 조회 api
 */

const getCardList = (accessToken: string, columnId: string) => {
  return instance({
    url: API.CARDS,
    method: 'GET',
    headers: {
      // 요청 헤더에 액세스 토큰 추가
      Authorization: accessToken ? `Bearer ${accessToken}` : '', // 이미 interceptor에 설정해서 삭제 예정
    },
    params: {
      size: 5,
      columnId: columnId,
    },
  });
};

export default { getCardList };
