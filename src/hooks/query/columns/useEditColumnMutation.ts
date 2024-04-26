import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import columnsApi from '@/api/columns.api';

function useEditColumnMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ title, columnsId }) => {
      return columnsApi.putEditColumn({ title, columnsId });
    },
    onSuccess() {
      queryClient.invalidateQueries([API.COLUMNS]);
    },
  });
}

export default useEditColumnMutation;
