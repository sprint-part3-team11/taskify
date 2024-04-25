import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import cardsApi from '@/api/cards.api';

function useDeleteCardMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ cardId }) => {
      return cardsApi.deleteCard({
        cardId,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries([API.CARDS]);
    },
  });
}

export default useDeleteCardMutation;
