import { useState } from 'react';
import WarningModal from '@/components/common/Modal/WarningModal';
import Form from '@/components/common/form/Form';
import SignLayout from '@/components/template/SignLayout';
import usersApi from '@/api/users.api';

function SignUp() {
  const [error, setError] = useState(false);

  const signupUser = async (data) => {
    try {
      const response = await usersApi.getSignUp({
        email: data.email,
        nickname: data.name,
        password: data.password,
      });
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div>
      <SignLayout pageType="signUp">
        <Form formType="signUp" onSubmit={signupUser} />
      </SignLayout>
      <WarningModal
        isOpen={error}
        onClose={() => setError(false)}
        type="SUCCESS"
      />
    </div>
  );
}

export default SignUp;
