import InputField from '@/components/common/InputField';

function js() {
  return (
    <div>
      <InputField
        name={'이메일'}
        type={'email'}
        sentence={'이메일을 입력해주세요'}
      />
    </div>
  );
}

export default js;
