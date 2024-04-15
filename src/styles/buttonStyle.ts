import theme from '@/styles/theme';

export const buttonStyleBySize = {
  S: `
    min-width: 7.2rem;
    border-radius: 0.4rem;
    font-size: 1.4rem;
    font-weight: 500;
  `,

  M: `
    min-width: 12rem;
    border-radius: 0.8rem;
    font-size: 1.6rem;
    font-weight: 500;
  `,

  L: `
    width: 100%;
    border-radius: 0.8rem;
    font-size: 1.8rem;
    font-weight: 500;
  `,
};

export const buttonStyleByType = {
  PRIMARY: `
    background-color: ${theme.color.main};
    color: ${theme.color.white};

    &:hover {
      background-color: #4a2bc4;
    }
  `,

  SECONDARY: `
    background-color: ${theme.color.white};
    color: ${theme.color.main};
    border: 1px solid${theme.color.grayLight};
  `,

  DESTRUCTIVE: `
    background-color: ${theme.color.background};
    color: ${theme.color.body};
    border: 1px solid ${theme.color.grayLight};
  `,
};
