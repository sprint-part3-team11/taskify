import styled from 'styled-components';
import theme from '@/styles/theme';

interface HashTagProps {
  index: number;
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
    background-color: ${(props) => backgroundColor[props.index % 4]};
    color: ${(props) => color[props.index % 4]};
    border-radius: 4px;
    width: fit-content;
    padding: 0.4rem 0.8rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: 400;
  `,
};

function HashTag({ index }: HashTagProps) {
  return <S.HashTagItem index={index}>안녕</S.HashTagItem>;
}

export default HashTag;
