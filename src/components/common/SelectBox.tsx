import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useOutSideClick from '@/hooks/useClickOutside';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import ArrowIcon from '@/public/icon/arrowButton.svg';
import CheckIcon from '@/public/icon/checkIcon.svg';

const S = {
  SelectBox: styled.div<{ $isFocused: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 22.7rem;
    height: 4.8rem;
    padding: 1.5rem 1rem 1.4rem 1.6rem;
    border-radius: 0.6rem;
    border: 1px solid
      ${(props) =>
        props.$isFocused
          ? props.theme.color.main
          : props.theme.color.grayLight};
    outline: none;
    background: ${({ theme }) => theme.color.white};

    ${MEDIA_QUERIES.onTablet} {
      width: 21.7rem;
    }

    ${MEDIA_QUERIES.onMobile} {
      width: 32.7rem;
      padding: 1.3rem 1rem 1.2rem 1.6rem;
    }

    &:focus-within {
      border-color: ${({ theme }) => theme.color.main};
    }
  `,
  Text: styled.div<{ $gray?: boolean }>`
    flex: 3;
    overflow: hidden;

    height: 1.6rem;
    margin: 1.5rem 2.6rem 1.4rem 1.6rem;

    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 1.6rem;
    font-weight: 300;
    color: ${(props) =>
      props.$gray ? props.theme.color.gray : props.theme.color.body};
  `,
  OptionArea: styled.ul`
    position: absolute;
    width: 22.7rem;
    border-radius: 0.6rem;
    border: 1px solid ${({ theme }) => theme.color.grayLight};
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0 0.4rem 2rem 0 rgba(0, 0, 0, 0.08);
    margin-top: 0.2rem;

    ${MEDIA_QUERIES.onTablet} {
      width: 21.7rem;
    }

    ${MEDIA_QUERIES.onMobile} {
      width: 32.7rem;
    }
  `,
  OptionValue: styled.li`
    display: flex;
    align-items: center;
    padding: 0.5rem;

    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.color.mainLight};
      transition: background-color 0.1s ease-in-out;
    }
  `,
  OptionValueText: styled.p<{ $isCheckIcon: boolean }>`
    padding: 1rem;
    font-size: 1.6rem;
    font-weight: 400;

    color: ${({ theme }) => theme.color.body};
    margin-left: ${(props) => (props.$isCheckIcon ? '' : '2rem')};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  CheckIcon: styled(CheckIcon)`
    width: 2rem;
    height: 2rem;
  `,
};

interface Option {
  value: string;
  label: string;
}

interface SelectBoxProps {
  options: Option[];
  placeholder: boolean;
}

function SelectBox({ options, placeholder }: SelectBoxProps): JSX.Element {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const optionAreaRef = useRef<HTMLUListElement>(null);
  const selectBoxRef = useRef<HTMLDivElement>(null);

  function handleSelectOption(option: Option): void {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  }

  useOutSideClick([optionAreaRef, selectBoxRef], () => {
    setIsDropdownOpen(false);
  });

  // whether가 false이고 선택된 옵션이 없으면 첫 번째 옵션을 선택한다.
  if (!placeholder && !selectedOption && options.length > 0) {
    setSelectedOption(options[0]);
  }

  return (
    <>
      <S.SelectBox
        ref={selectBoxRef}
        tabIndex={0}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        $isFocused={isFocused}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <S.Text $gray={placeholder && !selectedOption}>
          {selectedOption || placeholder
            ? selectedOption?.label || '이름을 입력해 주세요'
            : ''}
        </S.Text>
        <ArrowIcon />
      </S.SelectBox>
      {isDropdownOpen && (
        <S.OptionArea ref={optionAreaRef}>
          {options.map((option) => (
            <S.OptionValue
              key={option.value}
              onClick={() => handleSelectOption(option)}
            >
              {option.value === selectedOption?.value && <S.CheckIcon />}
              <S.OptionValueText
                $isCheckIcon={option.value === selectedOption?.value}
              >
                {option.label}
              </S.OptionValueText>
            </S.OptionValue>
          ))}
        </S.OptionArea>
      )}
    </>
  );
}

export default SelectBox;
