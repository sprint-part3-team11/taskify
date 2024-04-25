import { useQuery } from '@tanstack/react-query';
import { API } from '@/constants/API';
import cardsApi from '@/api/cards.api';

// 카드 상세 정보 목록조회
function useCardDetailQuery({ cardId }) {
  return useQuery({
    queryKey: [API.CARDS, cardId],
    queryFn: async () => {
      const data = await cardsApi.getCardDetails({ cardId });
      return data;
    },
    // { Success or Error 처리 등의 옵션자리 }
  });
}

export default useCardDetailQuery;
