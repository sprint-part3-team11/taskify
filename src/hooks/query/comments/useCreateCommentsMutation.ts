import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import commentApi from '@/api/comment.api';

interface CommentMutationProp {
  content: string;
  cardId: number;
  columnId: number;
  dashboardId: number;
}

// 댓글 생성
function useCreateCommentsMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      content,
      cardId,
      columnId,
      dashboardId,
    }: CommentMutationProp) => {
      return commentApi.postCreateComment({
        content,
        cardId,
        columnId,
        dashboardId,
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [API.COMMENTS] });
    },
  });
}

export default useCreateCommentsMutation;
