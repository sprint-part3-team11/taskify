import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import commentApi from '@/api/comment.api';

// 댓글 삭제
function useDeleteCommentsMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ commentId }) => {
      return commentApi.deleteComment(commentId);
    },
    onSuccess() {
      queryClient.invalidateQueries([API.COMMENTS]);
    },
  });
}

export default useDeleteCommentsMutation;
