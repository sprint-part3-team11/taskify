import styled from 'styled-components';
import theme from '@/styles/theme';

const S = {
  HeaderBox: styled.nav`
    display: flex;
    height: 7rem;
    border-bottom: 0.1rem solid ${theme.color.grayLight};
  `,
};

function DashBoardHeader() {
  return <S.HeaderBox></S.HeaderBox>;
}

export default DashBoardHeader;
