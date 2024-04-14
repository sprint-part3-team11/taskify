import { useState } from 'react';
import SelectBox from '@/components/SelectBox';

const selectBoxOptions = [
  { value: '배유철', label: '배유철' },
  { value: '배동석', label: '배동석' },
  { value: 'ToDo', label: '🔹To Do' },
];

function jy() {
  return <SelectBox options={selectBoxOptions} whether={true} />;
}

export default jy;
