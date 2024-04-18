import { css } from 'styled-components';

export const datePickerStyle = css`
  .react-datepicker-wrapper {
    width: 100%;
  }
  .react-datepicker__input-container {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .react-datepicker__input-container {
    svg {
      padding: 1.6rem;
    }
    input {
      padding: 1.6rem 3.5rem;

      &::placeholder {
        color: ${({ theme }) => theme.color.gray};
      }
    }
  }
`;
