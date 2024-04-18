import { useState } from 'react';
import SelectBox from '@/components/common/SelectBox';
import AddIconButton from '@/components/common/button/AddIconButton';
import Button from '@/components/common/button/Button';
import Layout from '@/components/dashboard/Layout';
import ToDoCreateModal from '@/components/dashboard/modal/ToDoCreateModal';
import { BUTTON_TYPE } from '@/constants/BUTTON_TYPE';

const selectBoxOptions = [
  { value: '배유철', label: '배유철' },
  { value: '배동석', label: '배동석' },
  { value: 'ToDo', label: '🔹To Do' },
  { value: '박지윤', label: '박지윤' },
  { value: '난사람', label: 'alallalalalaalalallalalalalaaalalalaalal' },
];

function sh() {
  const [isModalOpen, setisModalOpen] = useState(false);
  return (
    <Layout>
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
          isEdit={true}
        />
      )}
      <Button styleType={BUTTON_TYPE.SECONDARY}>취소</Button>

      <AddIconButton />
      <AddIconButton>새로운 대시보드</AddIconButton>

      <SelectBox options={selectBoxOptions} placeholder />

      <div>sdljfwijdf</div>
      <div>sdljfwijdf</div>
      <Button>버튼할게</Button>
      <Button>버튼할게</Button>
      <Button>버튼할게</Button>
      <Button>버튼할게</Button>
    </Layout>
  );
}

export default sh;
