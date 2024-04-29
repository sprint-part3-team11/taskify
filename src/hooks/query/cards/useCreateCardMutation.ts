import { toast } from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import cardsApi from '@/api/cards.api';

interface CreateCardMutationProp {
  assigneeUserId: number;
  dashboardId: number;
  columnId: number;
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
  imageUrl: string;
}

function useCreateCardMutation(
  dashboardId: number,
  columnId: number,
  onClose: () => void,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      assigneeUserId,
      title,
      description,
      dueDate,
      tags,
      imageUrl,
    }: CreateCardMutationProp) => {
      return cardsApi.postCard({
        assigneeUserId,
        dashboardId,
        columnId,
        title,
        description,
        dueDate,
        tags,
        imageUrl,
      });
    },
    onSuccess: () => {
      toast.success('성공적으로 할일을 등록했습니다!🏃🏻‍♀️');
      onClose();
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.log(error);
    },
  });
}

export default useCreateCardMutation;
