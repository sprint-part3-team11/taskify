import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectBoxProps {
  title: string;
  options: Option[];
  onChange: (selectValue: string) => void;
}

const index: React.FC<SelectBoxProps> = ({ title, options, onChange }) => {
  const [selectValue, setSelctValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelctValue(value);
    onChange(value);
  };
  return (
    <>
      <p>{title}</p>
      <select value={selectValue} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default index;
