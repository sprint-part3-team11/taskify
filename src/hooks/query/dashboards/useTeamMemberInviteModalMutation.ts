import { useMutation } from '@tanstack/react-query';
import dashboardsApi from '@/api/dashboards.api';

export interface UseTeamMemberInviteModalMutationProps {
  dashboardId: number;
  email: string;
}
// 초대하기 모달 => 이메일
function useTeamMemberInviteModalMutation({
  dashboardId,
  email,
}: UseTeamMemberInviteModalMutationProps) {
  return useMutation({
    mutationFn: async () => {
      return dashboardsApi.postInviteDashboard({
        dashboardId,
        email,
      });
    },
    onSuccess: () => {
      // TODO 나중에 toast로 바꿔보자!
      alert('초대가 전송되었습니다!');
    },
  });
}

export default useTeamMemberInviteModalMutation;
