import { css, styled } from 'styled-components';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

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

export const GridTemplate = styled.div`
  display: grid;
  justify-content: center;
  align-items: flex-start;

  grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
  grid-gap: 1.3rem;

  ${MEDIA_QUERIES.onTablet} {
    grid-gap: 1rem;
  }
  ${MEDIA_QUERIES.onMobile} {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0.8rem;
  }
`;
