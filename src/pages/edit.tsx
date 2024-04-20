import PageLayout from '@/components/common/PageLayout';
import NewDashBoardModal from '@/components/common/modal/NewDashBoardModal';
import NameAndColorChangeBox from '@/components/edit-page/NameAndColorChangeBox';

function edit() {
  return (
    <PageLayout>
      <NameAndColorChangeBox />
    </PageLayout>
  );
}

export default edit;
