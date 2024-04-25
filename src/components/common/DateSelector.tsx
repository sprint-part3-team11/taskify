import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import { styled } from 'styled-components';
import calendarIcon from '@/public/icon/calendarIcon.svg';
import datePickerStyle from '@/styles/DatePickerStyle';

const S = {
  Container: styled.div`
    width: 100%;
    ${datePickerStyle}
  `,

  DatePicker: styled(DatePicker)`
    width: 100%;
    border: ${({ theme }) => theme.border.lightGray};
    border-radius: 0.4rem;
    font-size: 1.6rem;

    ::placeholder {
      color: ${({ theme }) => theme.color.gray};
    }
    @media screen and (max-width: 768px) {
      font-size: 1.4rem;
    }
  `,
};

function DateSelector({ onChange }) {
  const [dueDate, setDueDate] = useState<Date | null>(null);

  const handleChange = (date) => {
    setDueDate(date);
    onChange(date);
  };

  return (
    <S.Container>
      <S.DatePicker
        locale={ko}
        showIcon
        icon={calendarIcon}
        showPopperArrow={false}
        selected={dueDate}
        onChange={handleChange}
        placeholderText="마감일을 선택해주세요"
        toggleCalendarOnIconClick
        dateFormat="yyyy.MM.dd"
      />
    </S.Container>
  );
}

export default DateSelector;
