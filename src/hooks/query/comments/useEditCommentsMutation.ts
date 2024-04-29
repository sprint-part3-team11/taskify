import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import commentApi from '@/api/comment.api';

interface CommentEditMutationProp {
  content: string;
  commentId: number;
}

// 댓글 수정
function useEditCommentsMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ content, commentId }: CommentEditMutationProp) => {
      return commentApi.putCommentEdit(content, commentId);
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [API.COMMENTS] });
    },
  });
}

export default useEditCommentsMutation;
