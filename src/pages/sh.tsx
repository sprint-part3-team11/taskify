import { useState } from 'react';
import AddIconButton from '@/components/common/button/AddIconButton';
import Button from '@/components/common/button/Button';
import ToDoCreateModal from '@/components/dashboard/modal/ToDoCreateModal';
import { BUTTON_TYPE } from '@/constants/BUTTON_TYPE';

function sh() {
  const [isModalOpen, setisModalOpen] = useState(false);
  return (
    <>
      <Button size="S" styleType={BUTTON_TYPE.DESTRUCTIVE}>
        삭제
      </Button>
      <Button
        size="L"
        styleType={BUTTON_TYPE.PRIMARY}
        style={{ width: '30rem' }}
        disabled
      >
        버튼
      </Button>
      <Button
        size="L"
        styleType={BUTTON_TYPE.PRIMARY}
        style={{ width: '30rem' }}
        onClick={() => {
          setisModalOpen(true);
        }}
      >
        모달
      </Button>
      {isModalOpen && (
        <ToDoCreateModal
          isOpen={isModalOpen}
          onClose={() => setisModalOpen(false)}
        />
      )}
      <Button styleType={BUTTON_TYPE.SECONDARY}>취소</Button>

      <AddIconButton />
      <AddIconButton>새로운 대시보드</AddIconButton>
    </>
  );
}

export default sh;
