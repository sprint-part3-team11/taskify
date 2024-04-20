import PageLayout from '@/components/common/PageLayout';
import NewDashBoardModal from '@/components/common/modal/NewDashBoardModal';
import MemberList from '@/components/edit-page/MemberList';
import NameAndColorChangeBox from '@/components/edit-page/NameAndColorChangeBox';

function edit() {
  return (
    <PageLayout>
      <NameAndColorChangeBox />
      <MemberList />
    </PageLayout>
  );
}

export default edit;
