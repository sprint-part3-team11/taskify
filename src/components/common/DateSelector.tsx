import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import { styled } from 'styled-components';
import calendarIcon from '@/public/icon/calendarIcon.svg';
import { datePickerStyle } from '@/styles/datePickerStyle';

const S = {
  C: styled.div`
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

function DateSelector() {
  const [dueDate, setDueDate] = useState<Date | null>(null);
  return (
    <S.C>
      <S.DatePicker
        className="나데이트"
        locale={ko}
        showIcon
        icon={calendarIcon}
        showPopperArrow={false}
        selected={dueDate}
        onChange={(date) => setDueDate(date)}
        placeholderText="마감일을 선택해주세요"
        toggleCalendarOnIconClick
        dateFormat="yyyy.MM.dd"
      />
    </S.C>
  );
}

export default DateSelector;
