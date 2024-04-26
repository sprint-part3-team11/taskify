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
      console.log('성공');
      onClose();
    },
    onError: (error) => {
      console.log(error);
    },
  });
}

export default useCreateCardMutation;
