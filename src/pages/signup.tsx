import Form from '@/components/common/form/Form';
import SignLayout from '@/components/template/SignLayout';

function signup() {
  return (
    <div>
      <SignLayout pageType="signUp">
        <Form formType="signUp" />
      </SignLayout>
    </div>
  );
}

export default signup;
