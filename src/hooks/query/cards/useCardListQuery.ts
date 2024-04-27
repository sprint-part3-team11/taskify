import { useInfiniteQuery } from '@tanstack/react-query';
import { API } from '@/constants/API';
import cardsApi from '@/api/cards.api';

// 카드 목록조회
function useCardListQuery({ columnId, size = 5 }) {
  return useInfiniteQuery({
    queryKey: [API.CARDS, columnId],
    queryFn: async ({ pageParam = null }) => {
      const { data } = await cardsApi.getCardList({
        columnId,
        size,
        cursorId: pageParam,
      });

      return data;
    },
    getNextPageParam: (lastPage) => {
      const nextPageParam = lastPage ? lastPage.cursorId : null;
      return nextPageParam;
    },
    // { Success or Error 처리 등의 옵션자리 }
  });
}

export default useCardListQuery;
