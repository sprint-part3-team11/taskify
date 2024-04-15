import StateTag from '@/components/common/tag/StateTag';
import '@/styles/GlobalStyle';

function hj() {
  const hashTags = ['To Do', 'On Progress', 'Done'];
  return (
    <div>
      {hashTags.map((tag) => (
        <StateTag size="L">{tag}</StateTag>
      ))}
    </div>
  );
}

export default hj;
