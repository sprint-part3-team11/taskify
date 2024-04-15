import StateTag from '@/components/common/Tag/StateTag';
import '@/styles/GlobalStyle';

function hj() {
  const hashTags = ['To Do', 'On Progress', 'Done'];
  return (
    <div>
      {hashTags.map((tag) => (
        <StateTag size="S">{tag}</StateTag>
      ))}
    </div>
  );
}

export default hj;
