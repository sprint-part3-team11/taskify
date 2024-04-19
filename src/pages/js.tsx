import AvatarImage from '@/components/common/AvatarImage';
import InputField from '@/components/common/InputField';
import Form from '@/components/form/Form';

function js() {
  const URL =
    'https://file3.instiz.net/data/file3/2023/08/07/9/7/b/97bd8a476822cba2e5cd1fe8ef7be321.jpg';

  return (
    <div>
      <h2>지수 테스트페이지</h2>
      <AvatarImage src={URL} width="10rem" height="10rem" />
      <InputField
        label="이메일"
        id="input"
        type="email"
        placeholder="이메일을 입력해주세요"
      />
      <InputField
        label="제목"
        id="title"
        type="text"
        placeholder="제목을 입력해주세요"
      />
      <Form buttonText="로그인" />
    </div>
  );
}

export default js;
