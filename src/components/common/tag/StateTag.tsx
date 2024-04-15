import { ReactNode } from 'react';
import styled from 'styled-components';
import EllipseIcon from '@/public/icon/ellipse.svg';

interface StateTagProps {
  children: ReactNode;
  size: 'S' | 'L';
}
const S = {
  StateTagWrapper: styled.span<StateTagProps>`
    padding: 0.4rem 0.8rem 0.6rem;
    border-radius: 1.1rem;
    width: fit-content;
    background-color: rgba(241, 239, 253, 1);
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.color.purple};
    height: ${(props) => (props.size === 'L' ? '2.2rem' : '2rem')};
  `,
  SVGContainer: styled.span`
    margin-right: 0.3rem;
    position: relative;
    top: -0.1rem;
  `,
};
function StateTag({ children, size }: StateTagProps) {
  return (
    <S.StateTagWrapper size={size}>
      <S.SVGContainer>
        <EllipseIcon />
      </S.SVGContainer>
      {children}
    </S.StateTagWrapper>
  );
}

export default StateTag;
