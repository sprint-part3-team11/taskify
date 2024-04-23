import { useRouter } from 'next/router';
import { useState } from 'react';
import WarningModal from '@/components/common/Modal/WarningModal';
import Form from '@/components/common/form/Form';
import SignLayout from '@/components/template/SignLayout';
import authApi from '@/api/auth.api';

function SignIn() {
  const router = useRouter();
  const [error, setError] = useState(false);

  const loginUser = async (data) => {
    try {
      const response = await authApi.getLogin({
        email: data.email,
        password: data.password,
      });
      localStorage.setItem('accessToken', response.data.accessToken);
      router.push('/my-dashboard');
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div>
      <SignLayout pageType="signIn">
        <Form formType="signIn" onSubmit={loginUser} />
      </SignLayout>
      <WarningModal
        isOpen={error}
        onClose={() => setError(false)}
        type="PASSWORD"
      />
    </div>
  );
}

export default SignIn;
