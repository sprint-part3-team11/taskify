import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import cardsApi from '@/api/cards.api';

function useCreateCardMutation(dashboardId, columnId, onClose) {
  return useMutation({
    mutationFn: async ({
      assigneeUserId,
      title,
      description,
      dueDate,
      tags,
      imageUrl,
    }) => {
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
    },
    onError: (error) => {
      console.log(error);
    },
  });
}

export default useCreateCardMutation;
