import { useState } from 'react';
import SelectBox from '@/components/common/SelectBox';
import ImgFileUpload from '@/components/common/ImgFileUpload';

const selectBoxOptions = [
  { value: '배유철', label: '배유철' },
  { value: '배동석', label: '배동석' },
  { value: 'ToDo', label: '🔹To Do' },
  { value: '박지윤', label: '박지윤' },
  { value: '난사람', label: 'alallalalalaalalallalalalalaaalalalaalal' },
];

function jy() {
  return (
    <SelectBox title={'담당자'} options={selectBoxOptions} placeholder={true} />
    <ImgFileUpload title="이미지" edit={false} small={true} />
  );
}

export default jy;
