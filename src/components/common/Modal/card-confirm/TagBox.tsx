import HashTag from '../../tag/HashTag';
import StateTag from '../../tag/StateTag';
import styled from 'styled-components';

const HeightLine = styled.div`
  border: 1px solid ${({ theme }) => theme.color.grayLight};
  margin: 0 2rem 0.2rem 2rem;
`;

function TagBox() {
  return (
    <>
      <StateTag isMobile={false}>To Do</StateTag>
      <HeightLine />
      <HashTag isMobile={false} index={0}>
        프로젝트
      </HashTag>
      <HashTag isMobile={false} index={1}>
        프론트엔드
      </HashTag>
    </>
  );
}
export default TagBox;
