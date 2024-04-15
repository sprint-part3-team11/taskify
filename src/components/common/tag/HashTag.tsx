import { ReactNode } from 'react';
import styled from 'styled-components';
import theme from '@/styles/theme';

interface HashTagProps {
  children: ReactNode;
  index: number;
  isMobile?: boolean;
}
const color = [
  theme.color.green,
  theme.color.skyBlue,
  theme.color.pink,
  theme.color.orange,
];
const backgroundColor = [
  theme.color.lightGreen,
  theme.color.lightSkyBlue,
  theme.color.lightPink,
  theme.color.lightOrange,
];
const S = {
  HashTagItem: styled.div<HashTagProps>`
    border-radius: 4px;
    width: fit-content;
    height: ${(props) => (props.isMobile ? '2rem' : '2.2rem')};
    padding: 0.4rem 0.8rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: ${(props) =>
      backgroundColor[props.index % backgroundColor.length]};
    font-size: ${(props) => (props.isMobile ? '1rem' : '1.2rem')};
    font-weight: 400;
    color: ${(props) => color[props.index % color.length]};
  `,
};

function HashTag({ children, index, isMobile }: HashTagProps) {
  return (
    <S.HashTagItem index={index} isMobile={isMobile}>
      {children}
    </S.HashTagItem>
  );
}

export default HashTag;
