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

  // const signupUser = async (data) => {
  //   try {
  //     const response = await usersApi.getSignUp({
  //       email: data.email,
  //       nickname: data.name,
  //       password: data.password,
  //     });
  //   } catch (error) {
  //     setError(true);
  //   }
  // };

  const { mutate: signUp } = useMutation({
    // data는 회원가입 폼 데이터를 나타냅니다.
    mutationFn: async (data) => {
      return usersApi.postSignUp({
        email: data.email,
        nickname: data.name,
        password: data.password,
      });
    },
    // 성공적인 요청 후 실행될 콜백 함수
    onSuccess: () => {
      // setOpen(true);
      // const message = '가입이 완료되었습니다';
      // setModalMessage(message);
      alert('가입이 완료되었습니다!');
      router.push('/signin');
    },
    // 실패한 요청 후 실행될 콜백 함수
    onError: (error) => {
      setOpen(true);
      const message = error.response?.data?.message;
      setModalMessage(message);
    },
  });

  const signupUser = (data) => {
    signUp(data);
  };

  return (
    <div>
      <SignLayout pageType="signUp">
        <Form formType="signUp" onSubmit={signupUser} />
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
