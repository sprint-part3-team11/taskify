import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '@/styles/theme';

const S = {
  SelectBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 13.5625rem;
    height: 3rem;
    padding: 0.5rem;
    border-radius: 0.375rem;
    border: 1px solid ${theme.color.grayLight};
    background: ${theme.color.white};
  `,
  Text: styled.div<{ gray?: boolean }>`
    flex: 3;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0;
    color: ${(props) => (props.gray ? theme.color.gray : theme.color.body)};
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  `,
  Title: styled.p`
    color: ${theme.color.body};
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `,
  ArrowIcon: styled.svg`
    flex: 1;
    margin-left: 0.5rem;
  `,
  OptionArea: styled.ul`
    width: 13.5625rem;
    border-radius: 0.375rem;
    border: 1px solid ${theme.color.grayLight};
    background: ${theme.color.white};
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
    margin-top: 0.0625rem;
  `,
  OptionValue: styled.li`
    display: flex;
    align-items: center;
    padding: 0.3125rem;
  `,
  OptionValueText: styled.p`
    color: var(--black-black_333236, #333236);
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
};

interface Option {
  value: string;
  label: string;
}

interface SelectBoxProps {
  options: Option[];
  whether: boolean;
}

const index: React.FC<SelectBoxProps> = ({ options, whether }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  // whether가 false이고 선택된 옵션이 없으면 첫 번째 옵션을 선택한다.
  if (!whether && !selectedOption && options.length > 0) {
    setSelectedOption(options[0]);
  }

  return (
    <>
      <S.Title>담당자</S.Title>
      <S.SelectBox onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <S.Text gray={whether && !selectedOption}>
          {selectedOption || whether
            ? selectedOption?.label || '이름을 입력해 주세요'
            : ''}
        </S.Text>
        <S.ArrowIcon
          xmlns="http://www.w3.org/2000/svg"
          width="1.625rem"
          height="1.625rem"
          viewBox="0 0 26 26"
          fill="none"
        >
          <path
            d="M12.4802 15.3555L9.06643 11.9418C9.01935 11.8947 8.98226 11.8421 8.95518 11.784C8.92809 11.726 8.91455 11.6637 8.91455 11.5974C8.91455 11.4646 8.95944 11.3493 9.04921 11.2514C9.13896 11.1535 9.25727 11.1045 9.40414 11.1045H16.5957C16.7426 11.1045 16.8609 11.1539 16.9507 11.2528C17.0404 11.3516 17.0853 11.467 17.0853 11.5988C17.0853 11.6318 17.0346 11.7462 16.9332 11.942L13.5197 15.3555C13.4412 15.434 13.3601 15.4913 13.2764 15.5274C13.1926 15.5635 13.1005 15.5815 12.9999 15.5815C12.8994 15.5815 12.8073 15.5635 12.7235 15.5274C12.6397 15.4913 12.5586 15.434 12.4802 15.3555Z"
            fill="#333236"
          />
        </S.ArrowIcon>
      </S.SelectBox>
      {isDropdownOpen && (
        <S.OptionArea>
          {options.map((option) => (
            <S.OptionValue
              key={option.value}
              onClick={() => handleSelectOption(option)}
            >
              <S.OptionValueText>{option.label}</S.OptionValueText>
            </S.OptionValue>
          ))}
        </S.OptionArea>
      )}
    </>
  );
};

export default index;
