import { useRouter } from 'next/router';
import { useState } from 'react';
import Form from '@/components/common/form/Form';
import WarningModal from '@/components/common/modal/WarningModal';
import SignLayout from '@/components/template/SignLayout';
import useSignUpMutation from '@/hooks/query/users/useSignUpMutation';

function SignUp() {
  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const router = useRouter();

  const { mutate: signUp } = useSignUpMutation({
    setOpen,
    setModalMessage,
    router,
  });

  const signUpUser = (data, error) => {
    signUp(data, error);
  };

  return (
    <div>
      <SignLayout pageType="signUp">
        <Form formType="signUp" onSubmit={signUpUser} />
      </SignLayout>
      <WarningModal
        isOpen={open}
        onClose={() => setOpen(false)}
        message={modalMessage}
      />
    </div>
  );
}

export default SignUp;
