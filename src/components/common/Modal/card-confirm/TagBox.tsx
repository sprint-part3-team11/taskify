import HashTag from '../../tag/HashTag';
import StateTag from '../../tag/StateTag';
import { CardConfirmModalProps } from './types';
import styled from 'styled-components';

const S = {
  TagBox: styled.div`
    display: flex;
    margin-bottom: 2.5rem;
  `,

  HeightLine: styled.div`
    border: 1px solid ${({ theme }) => theme.color.grayLight};
    margin: 0 2rem 0.2rem 2rem;
  `,
};
function TagBox({ cardInfoData }: CardConfirmModalProps) {
  return (
    <S.TagBox>
      <StateTag isMobile={false}>{cardInfoData.tags}</StateTag>
      <S.HeightLine />
      <HashTag isMobile={false} index={0}>
        프로젝트
      </HashTag>
      <HashTag isMobile={false} index={1}>
        프론트엔드
      </HashTag>
    </S.TagBox>
  );
}
export default TagBox;
