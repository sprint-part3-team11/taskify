import { useState } from 'react';
import React from 'react';
import SelectBox from '@/components/common/SelectBox';
import Sidebar from '@/components/common/SideBar';

const selectBoxOptions = [
  { value: '배유철', label: '배유철' },
  { value: '배동석', label: '배동석' },
  { value: 'ToDo', label: '🔹To Do' },
  { value: '박지윤', label: '박지윤' },
  { value: '난사람', label: 'alallalalalaalalallalalalalaaalalalaalal' },
];

const dashboards = [
  { id: '1', name: '대시보드 1' },
  { id: '2', name: '대시보드 2' },
  { id: '3', name: '대시보드 3' },
];
function jy() {
  return (
    <>
      <SelectBox
        title={'담당자'}
        options={selectBoxOptions}
        placeholder={true}
      />
      <Sidebar dashboards={dashboards} />
    </>
  );
}

export default jy;
