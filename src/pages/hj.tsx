import StateTag from '@/components/common/tag/StateTag';
import '@/styles/GlobalStyle';

function hj() {
  const hashTags = ['To Do', 'On Progress', 'Done'];
  const isMobile = true;
  return (
    <div>
      {hashTags.map((tag) => (
        <StateTag isMobile={isMobile}>{tag}</StateTag>
      ))}
    </div>
  );
}

export default hj;
