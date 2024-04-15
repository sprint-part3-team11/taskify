import DashBoardHeader from '@/components/common/DashBoardHeader';
import HashTag from '@/components/common/tag/HashTag';
import StateTag from '@/components/common/tag/StateTag';
import '@/styles/GlobalStyle';

function hj() {
  const stateTags = ['To Do', 'On Progress', 'Done'];
  const isMobile = false;
  const hashTag = ['프로젝트', '프론트엔드', '어려워'];
  return (
    <>
      <DashBoardHeader />
      <div>
        {stateTags.map((tag, index) => (
          <StateTag isMobile={isMobile}>{tag}</StateTag>
        ))}
        {hashTag.map((tag, index) => (
          <HashTag index={index} isMobile={isMobile}>
            {tag}
          </HashTag>
        ))}
      </div>
    </>
  );
}

export default hj;
