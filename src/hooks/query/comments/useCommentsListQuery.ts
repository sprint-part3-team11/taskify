import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import commentApi from '@/api/comment.api';

interface CommentsListQuery {
  cardId: number;
}

// 내가 받은 댓글 목록
function useCommentsListQuery({ cardId }: CommentsListQuery, size: number = 4) {
  const queryClient = useQueryClient();

  return useInfiniteQuery({
    queryKey: [API.COMMENTS, cardId],
    queryFn: async ({ pageParam = null }) => {
      const { data } = await commentApi.getCommentList({
        cardId,
        size,
        cursorId: pageParam,
      });
      return data;
    },
    getNextPageParam: (lastPage) => {
      const nextPageParam = lastPage ? lastPage.cursorId : null;
      return nextPageParam;
    },

    onSuccess: () => {
      // 쿼리 무효화
      queryClient.invalidateQueries({ queryKey: [API.COMMENTS] });
    },
  });
}

export default useCommentsListQuery;
