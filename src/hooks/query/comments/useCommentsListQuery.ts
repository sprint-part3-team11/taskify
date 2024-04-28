import { useQuery, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import commentApi from '@/api/comment.api';

interface CommentsListQuery {
  cardId: number;
}

// 내가 받은 댓글 목록
function useCommentsListQuery({ cardId }: CommentsListQuery) {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: [API.COMMENTS],
    queryFn: async () => {
      const { data } = await commentApi.getCommentList(cardId);
      return data;
    },
    onSuccess: () => {
      // 쿼리 무효화
      queryClient.invalidateQueries({ queryKey: [API.COMMENTS] });
    },
  });
}

export default useCommentsListQuery;
