import { useState } from 'react';
import SelectBox from '@/components/SelectBox';

const selectBoxOptions = [
  { value: '배유철', label: '배유철' },
  { value: '배동석', label: '배동석' },
  { value: 'ToDo', label: '🔹To Do' },
];

function jy() {
  const [selectName, setSelectName] = useState<string>('');

  const handleSelectBoxNameChange = (value: string) => {
    setSelectName(value);
  };
  return (
    <SelectBox
      title="담당자"
      whether={true}
      options={selectBoxOptions}
      onChange={handleSelectBoxNameChange}
    />
  );
}

export default jy;
