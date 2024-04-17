import InputField from '@/components/common/InputField';

function js() {
  return (
    <div>
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
    </div>
  );
}

export default js;
