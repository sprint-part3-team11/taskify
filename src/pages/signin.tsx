import { useRouter } from 'next/router';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import WarningModal from '@/components/common/Modal/WarningModal';
import Form from '@/components/common/form/Form';
import SignLayout from '@/components/template/SignLayout';
import authApi from '@/api/auth.api';

function SignIn() {
  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const router = useRouter();

  const { mutate: signIn } = useMutation({
    mutationFn: async (data) => {
      return authApi.postLogin({
        email: data.email,
        password: data.password,
      });
    },
    onSuccess: () => {
      router.push('/my-dashboard');
    },
    onError: (error) => {
      setOpen(true);
      const message = error.response?.data?.message;
      setModalMessage(message);
    },
  });

  const signInUser = (data) => {
    signIn(data);
  };

  return (
    <div>
      <SignLayout pageType="signIn">
        <Form formType="signIn" onSubmit={signInUser} />
      </SignLayout>
      <WarningModal
        isOpen={open}
        onClose={() => setOpen(false)}
        message={modalMessage}
      />
    </div>
  );
}

export default SignIn;
