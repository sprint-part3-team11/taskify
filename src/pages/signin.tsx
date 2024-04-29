import { useRouter } from 'next/router';
import { useState } from 'react';
import Form from '@/components/common/form/Form';
import WarningModal from '@/components/common/modal/WarningModal';
import SignLayout from '@/components/template/SignLayout';
import useSignInMutation from '@/hooks/query/auth/useSignInMutation';
import { FormValues } from '@/types/Form';

function SignIn() {
  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const router = useRouter();

  const { mutate: signIn } = useSignInMutation({
    setOpen,
    setModalMessage,
    router,
  });

  const signInUser = (data: FormValues) => {
    if ('email' in data && 'password' in data) {
      signIn(data);
    } else {
      console.error('Invalid data type for signIn');
    }
  };

  return (
    <div>
      <SignLayout pageType="signIn">
        <Form formType="signIn" submit={signInUser} />
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
