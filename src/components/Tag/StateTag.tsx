import { ReactNode } from 'react';
import styled from 'styled-components';

interface StateTagProps {
  children: ReactNode;
  size: 'S' | 'L';
}

const StateTagWrapper = styled.span<StateTagProps>`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 1.1rem;
  background-color: rgba(241, 239, 253, 1);
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.purple};
  width: fit-content;
  height: ${(props) => (props.size === 'L' ? '2.2rem' : '2rem')};
`;
const DotIcon = styled.svg`
  width: 0.6rem;
  height: 0.6rem;
  margin-right: 0.5rem;
`;
function StateTag({ children, size }: StateTagProps) {
  return (
    <StateTagWrapper size={size}>
      <DotIcon viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="3" cy="3" r="3" fill="#5534DA" />
      </DotIcon>
      {children}
    </StateTagWrapper>
  );
}

export default StateTag;
