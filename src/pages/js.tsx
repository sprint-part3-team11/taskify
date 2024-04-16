import AvatarImage from '@/components/common/AvatarImage';

function js() {
  const URL =
    'https://file3.instiz.net/data/file3/2023/08/07/9/7/b/97bd8a476822cba2e5cd1fe8ef7be321.jpg';

  return (
    <div>
      <h2>지수 테스트페이지</h2>
      <AvatarImage src={URL} width="10rem" height="10rem" />
    </div>
  );
}

export default js;
