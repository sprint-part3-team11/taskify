import { useQuery } from '@tanstack/react-query';
import { API } from '@/constants/API';
import cardsApi from '@/api/cards.api';

// 카드 목록조회
function useCardListQuery({ columnId }) {
  return useQuery({
    queryKey: [API.CARDS, columnId],
    queryFn: async () => {
      const data = await cardsApi.getCardList(columnId);
      console.log(data);
      return data;
    },
    // { Success or Error 처리 등의 옵션자리 }
  });
}

export default useCardListQuery;
