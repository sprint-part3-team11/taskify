import { useState } from 'react';
import SelectBox from '@/components/SelectBox';

const selectBoxOptions = [
  { value: 'hihihi', label: 'helllo' },
  { value: 'hahahah', label: 'grgrrg' },
];

function jy() {
  const [selectName, setSelectName] = useState<string>('');

  const handleSelectBoxNameChange = (value: string) => {
    setSelectName(value);
  };
  return (
    <SelectBox
      title="담당자"
      options={selectBoxOptions}
      onChange={handleSelectBoxNameChange}
    />
  );
}

export default jy;
