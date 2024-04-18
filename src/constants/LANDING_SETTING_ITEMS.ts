import { StaticImageData } from 'next/image';
import dashboardSetting from '@/public/image/landingDashboardSetting.png';
import invitationSetting from '@/public/image/landingInvitationSetting.png';
import membersSetting from '@/public/image/landingMembersSetting.png';

interface landingSettingItems {
  id: number;
  imageSource: StaticImageData;
  title: string;
  description: string;
}

export const LANDING_SETTING_ITEMS: landingSettingItems[] = [
  {
    id: 0,
    imageSource: dashboardSetting,
    title: '대시보드 설정',
    description: '대시보드 사진과 이름을 변경할 수 있어요.',
  },
  {
    id: 1,
    imageSource: invitationSetting,
    title: '초대',
    description: '새로운 팀원을 초대할 수 있어요.',
  },
  {
    id: 2,
    imageSource: membersSetting,
    title: '구성원',
    description: '구성원을 초대하고 내보낼 수 있어요.',
  },
];
