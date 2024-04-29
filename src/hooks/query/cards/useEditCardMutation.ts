import { toast } from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import cardsApi from '@/api/cards.api';

interface EditCardMutationProp {
  columnId: number;
  assigneeUserId: number;
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
  imageUrl: string;
}

function useEditCardMutation(onClose: () => void, cardId: () => void) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      columnId,
      assigneeUserId,
      title,
      description,
      dueDate,
      tags,
      imageUrl,
    }: EditCardMutationProp) => {
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
      queryClient.invalidateQueries({ queryKey: [API.CARDS] });
      onClose();
    },
  });
}

export default useEditCardMutation;
