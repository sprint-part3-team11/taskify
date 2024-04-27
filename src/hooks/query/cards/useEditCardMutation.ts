import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import cardsApi from '@/api/cards.api';

function useEditCardMutation(onClose, cardId) {
  return useMutation({
    mutationFn: async ({
      columnId,
      assigneeUserId,
      title,
      description,
      dueDate,
      tags,
      imageUrl,
    }) => {
      return cardsApi.putEditCard(
        cardId,
        columnId,
        assigneeUserId,
        title,
        description,
        dueDate,
        tags,
        imageUrl,
      );
    },
    onSuccess: () => {
      toast.success('성공적으로 수정되었습니다!🏃🏻‍♀️');
      onClose();
    },
  });
}

export default useEditCardMutation;
