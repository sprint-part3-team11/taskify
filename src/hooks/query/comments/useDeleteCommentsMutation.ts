import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import commentApi from '@/api/comment.api';

interface CommentDeleteMutationProp {
  commentId: number;
}

// 댓글 삭제
function useDeleteCommentsMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ commentId }: CommentDeleteMutationProp) => {
      return commentApi.deleteComment(commentId);
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [API.COMMENTS] });
    },
  });
}

export default useDeleteCommentsMutation;
