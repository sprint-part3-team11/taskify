import { css } from 'styled-components';

export const RequiredStar = (position: 'before' | 'after') => css`
  ${position === 'before'
    ? css`
        &::before {
          content: '*';
          color: ${({ theme }) => theme.color.main};
        }
      `
    : css`
        &::after {
          content: '*';
          color: ${({ theme }) => theme.color.main};
        }
      `}
`;
