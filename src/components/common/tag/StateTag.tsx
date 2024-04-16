import { ReactNode } from 'react';
import styled from 'styled-components';
import EllipseIcon from '@/public/icon/ellipse.svg';

const S = {
  StateTagWrapper: styled.div<StateTagProps>`
    padding: 0.4rem 0.8rem 0.6rem;
    border-radius: 11px;
    width: fit-content;
    height: ${(props) => (props.isMobile ? '2rem' : '2.2rem')};
    background-color: rgba(241, 239, 253, 1);
    font-size: ${(props) => (props.isMobile ? '1rem' : '1.2rem')};
    font-weight: 400;
    color: ${({ theme }) => theme.color.purple};
  `,
  SVGContainer: styled.span`
    margin-right: 0.3rem;
    position: relative;
    top: -0.1rem;
  `,
};

interface StateTagProps {
  children: ReactNode;
  isMobile: boolean;
}

function StateTag({ children, isMobile = false }: StateTagProps) {
  return (
    <S.StateTagWrapper isMobile={isMobile}>
      <S.SVGContainer>
        <EllipseIcon />
      </S.SVGContainer>
      {children}
    </S.StateTagWrapper>
  );
}

export default StateTag;
