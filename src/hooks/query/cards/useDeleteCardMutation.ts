import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import cardsApi from '@/api/cards.api';

interface CardIdProp {
  cardId: number;
}

function useDeleteCardMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ cardId }: CardIdProp) => {
      return cardsApi.deleteCard({
        cardId,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [API.CARDS] });
    },
  });
}

export default useDeleteCardMutation;
