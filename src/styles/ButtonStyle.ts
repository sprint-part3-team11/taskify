import theme from '@/styles/theme';

export const buttonStyleBySize = {
  S: `
    padding: 0.7rem 2.9rem;
    border-radius: 0.4rem;
    font-size: 1.4rem;
    font-weight: 500;

    @media screen and (max-width: 768px) {
      padding: 0.7rem 2.5rem;
    }
  `,

  M: `
    padding: 1.4rem 4.6rem;
    border-radius: 0.8rem;
    font-size: 1.6rem;
    font-weight: 500;

    @media screen and (max-width: 768px) {
      padding: 1.2rem 5.6rem;
    }
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
    border: 1px solid${theme.color.grayLight};
    background-color: ${theme.color.white};
    color: ${theme.color.main};
  `,

  DESTRUCTIVE: `
    border: 1px solid ${theme.color.grayLight};
    background-color: ${theme.color.background};
    color: ${theme.color.body};
  `,
};
