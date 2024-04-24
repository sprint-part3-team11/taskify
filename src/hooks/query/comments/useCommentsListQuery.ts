import { useQuery, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import commentApi from '@/api/comment.api';

// 내가 받은 댓글 목록
function useCommentsListQuery({ cardId }) {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: [API.COMMENTS],
    queryFn: async () => {
      const { data } = await commentApi.getCommentList(cardId);
      return data;
    },
    onSuccess: () => {
      // 쿼리 무효화
      queryClient.invalidateQueries([API.COMMENTS]);
    },
  });
}

export default useCommentsListQuery;
