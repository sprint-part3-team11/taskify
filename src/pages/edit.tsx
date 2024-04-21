import { useState } from 'react';
import styled from 'styled-components';
import PageLayout from '@/components/common/PageLayout';
import TeamMemberInviteModal from '@/components/common/modal/TeamMemberInviteModal';
import InviteHistoryList from '@/components/edit-page/InviteHistoryList';
import MemberList from '@/components/edit-page/MemberList';
import NameAndColorChangeBox from '@/components/edit-page/NameAndColorChangeBox';
import BackButton from '@/components/my-page/BackButton';

const S = {
  MainContainer: styled.div`
    padding: 2rem;
  `,
};
function Edit() {
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

  const openInviteModal = () => {
    setIsInviteModalOpen(true);
  };

  const closeInviteModal = () => {
    setIsInviteModalOpen(false);
  };

  return (
    <PageLayout>
      <S.MainContainer>
        <BackButton />
        <NameAndColorChangeBox />
        <MemberList />
        <InviteHistoryList openInviteModal={openInviteModal} />
        <TeamMemberInviteModal
          isOpen={isInviteModalOpen}
          onClose={closeInviteModal}
          onCreate={() => {
            console.log(`api`);
          }}
        />
      </S.MainContainer>
    </PageLayout>
  );
}

export default Edit;
