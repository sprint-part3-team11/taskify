import styled from 'styled-components';
import theme from '@/styles/theme';

interface HeaderProps {
  menuName: string;
}
const S = {
  Header: styled.nav`
    display: flex;
    align-items: center;
    height: 7rem;
    border-bottom: 0.1rem solid ${theme.color.grayLight};
  `,
  MenuName: styled.div`
    font-weight: 700;
  `,
};

function DashBoardHeader({ menuName }: HeaderProps) {
  return (
    <S.Header>
      <S.MenuName>{menuName}</S.MenuName>
    </S.Header>
  );
}

export default DashBoardHeader;
