import Form from '@/components/common/form/Form';
import SignLayout from '@/components/template/SignLayout';

function signin() {
  return (
    <div>
      <SignLayout pageType="signIn">
        <Form formType="signIn" />
      </SignLayout>
    </div>
  );
}

export default signin;
