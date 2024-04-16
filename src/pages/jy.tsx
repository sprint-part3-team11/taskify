import { useState } from 'react';
import ColorSelector from '@/components/common/ColorSelector';
import SelectBox from '@/components/common/SelectBox';

const selectBoxOptions = [
  { value: '배유철', label: '배유철' },
  { value: '배동석', label: '배동석' },
  { value: 'ToDo', label: '🔹To Do' },
  { value: '박지윤', label: '박지윤' },
  { value: '난사람', label: 'alallalalalaalalallalalalalaaalalalaalal' },
];

function jy() {
  return (
    <>
      <SelectBox
        title={'담당자'}
        options={selectBoxOptions}
        placeholder={true}
      />
      <ColorSelector />
    </>
  );
}

export default jy;
