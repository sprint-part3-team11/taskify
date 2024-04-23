import { useRouter } from 'next/router';
import Form from '@/components/common/form/Form';
import SignLayout from '@/components/template/SignLayout';
import authApi from '@/api/auth.api';

function SignIn() {
  const router = useRouter();

  const loginUser = async (data) => {
    try {
      const response = await authApi.getLogin({
        email: data.email,
        password: data.password,
      });
      localStorage.setItem('accessToken', response.data.accessToken);
      router.push('/my-dashboard');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <SignLayout pageType="signIn">
        <Form formType="signIn" onSubmit={loginUser} />
      </SignLayout>
    </div>
  );
}

export default SignIn;
