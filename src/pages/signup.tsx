import { useRouter } from 'next/router';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import WarningModal from '@/components/common/Modal/WarningModal';
import Form from '@/components/common/form/Form';
import SignLayout from '@/components/template/SignLayout';
import useSignUpMutation from '@/hooks/query/users/useSignUpMutation';
import usersApi from '@/api/users.api';

function SignUp() {
  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const router = useRouter();

  const { mutate: signUp } = useMutation({
    mutationFn: async (data) => {
      return usersApi.postSignUp({
        email: data.email,
        nickname: data.name,
        password: data.password,
      });
    },
    onSuccess: () => {
      // TODO 나중에 toast로 바꿔보자!
      alert('가입이 완료되었습니다!');
      router.push('/signin');
    },
    onError: (error) => {
      setOpen(true);
      const message = error.response?.data?.message;
      setModalMessage(message);
    },
  });

  const signUpUser = (data) => {
    signUp(data);
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
