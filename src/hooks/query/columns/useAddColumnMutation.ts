import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API } from '@/constants/API';
import columnsApi from '@/api/columns.api';

const useAddColumnMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ title, dashboardId }) => {
      return columnsApi.postCreateColumn({ title, dashboardId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries([API.COLUMNS]);
    },
    onError: (error) => {
      console.error('컬럼 생성 오류:', error);
    },
  });
};

export default useAddColumnMutation;
