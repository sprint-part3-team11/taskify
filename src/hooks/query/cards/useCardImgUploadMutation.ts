import { useMutation } from '@tanstack/react-query';
import columnsApi from '@/api/columns.api';

function useCardImgUploadMutation(columnId: number) {
  return useMutation({
    mutationFn: async (uploadedImage: File) => {
      const { data } = await columnsApi.postCardImage({
        columnId,
        cardImageUrl: uploadedImage,
      });
      return data;
    },
    onSuccess: (data) => {},
  });
}

export default useCardImgUploadMutation;
