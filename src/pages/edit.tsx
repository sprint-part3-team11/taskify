import PageLayout from '@/components/common/PageLayout';
import NewDashBoardModal from '@/components/common/modal/NewDashBoardModal';
import InviteHistoryList from '@/components/edit-page/InviteHistoryList';
import MemberList from '@/components/edit-page/MemberList';
import NameAndColorChangeBox from '@/components/edit-page/NameAndColorChangeBox';

function edit() {
  return (
    <PageLayout>
      <NameAndColorChangeBox />
      <MemberList />
      <InviteHistoryList />
    </PageLayout>
  );
}

export default edit;
