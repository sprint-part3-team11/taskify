import { useMutation } from '@tanstack/react-query';
import columnsApi from '@/api/columns.api';

function useCardImgUploadMutation(columnId) {
  return useMutation({
    mutationFn: async (uploadedImage: File) => {
      const { data } = await columnsApi.postCardImage({
        columnId,
        cardImageUrl: uploadedImage,
      });
      return data;
    },
    onSuccess: (data) => {
      console.log('요청성공');
    },
  });
}

export { useCardImgUploadMutation };
