import AvatarImage from '@/components/common/AvatarImage';
// import InputField from '@/components/common/InputField';
import FormInput from '@/components/common/input/FormInput';

function js() {
  const URL =
    'https://file3.instiz.net/data/file3/2023/08/07/9/7/b/97bd8a476822cba2e5cd1fe8ef7be321.jpg';

  return (
    <div>
      <h2>지수 테스트페이지</h2>
      <AvatarImage src={URL} width="10rem" height="10rem" />
      <FormInput formType="signIn" />
      <FormInput formType="signUp" />
      <FormInput formType="editProfile" />
      <FormInput formType="editPassword" />
    </div>
  );
}

export default js;
