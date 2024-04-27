import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import dashboardsApi from '@/api/dashboards.api';

// 초대하기 모달 => 이메일
function useTeamMemberInviteModalMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ dashboardId, email }) => {
      return dashboardsApi.postInviteDashboard({
        dashboardId,
        email,
      });
    },
    onSuccess: () => {
      toast.success('초대가 전송되었습니다!');
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      const errorMessage = error.response?.data?.message;
      toast.error(`Error: ${errorMessage}`);
    },
  });
}

export default useTeamMemberInviteModalMutation;
