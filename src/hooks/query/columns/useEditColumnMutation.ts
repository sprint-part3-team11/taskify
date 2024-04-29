import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import columnsApi from '@/api/columns.api';

interface TitleAndColumnIdProp {
  title: string;
  columnsId: number;
}

function useEditColumnMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ title, columnsId }: TitleAndColumnIdProp) => {
      return columnsApi.putEditColumn({ title, columnsId });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [API.COLUMNS] });
    },
  });
}

export default useEditColumnMutation;
