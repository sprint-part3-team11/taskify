import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectBoxProps {
  title: string;
  whether: boolean;
  options: Option[];
  onChange: (selectValue: string) => void;
}

/**
 * @param title - 담당자인지, 상태인지 작성합니다.
 * @param whether - 담당자는 placeholder가 있고, 상태는 placeholder가 없습니다.
 * @param options - 셀렉트 박스 내부에 들어갈 내용
 * @param onChange - void
 */
const index: React.FC<SelectBoxProps> = ({
  title,
  whether,
  options,
  onChange,
}) => {
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
        {whether ? (
          <option value="" disabled hidden>
            이름을 입력해 주세요
          </option>
        ) : null}
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
