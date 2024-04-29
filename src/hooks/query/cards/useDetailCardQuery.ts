import { useQuery } from '@tanstack/react-query';
import { API } from '@/constants/API';
import cardsApi from '@/api/cards.api';

interface UseDetailCardQueryProps {
  cardId: number;
}
// 카드 상세 조회
function useDetailCardQuery({ cardId }: UseDetailCardQueryProps) {
  return useQuery({
    queryKey: [API.CARDS, cardId],
    queryFn: async () => {
      const { data } = await cardsApi.getCardDetails({
        cardId,
      });
      return data;
    },
    // { Success or Error 처리 등의 옵션자리 }
  });
}

export default useDetailCardQuery;
