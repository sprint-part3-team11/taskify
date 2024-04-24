const formFields = {
  signIn: [
    {
      id: 'email',
      label: '이메일',
      type: 'email',
      placeholder: '이메일을 입력해주세요',
    },
    {
      id: 'password',
      label: '비밀번호',
      type: 'password',
      placeholder: '비밀번호를 입력해주세요',
    },
  ],
  signUp: [
    {
      id: 'email',
      label: '이메일',
      type: 'email',
      placeholder: '이메일을 입력해주세요',
    },
    {
      id: 'name',
      label: '닉네임',
      type: 'text',
      placeholder: '닉네임을 입력해주세요',
    },
    {
      id: 'password',
      label: '비밀번호',
      type: 'password',
      placeholder: '비밀번호를 입력해주세요',
    },
    {
      id: 'passwordCheck',
      label: '비밀번호 확인',
      type: 'password',
      placeholder: '비밀번호를 한번 더 입력해주세요',
    },
  ],
  editProfile: [
    {
      id: 'email',
      label: '이메일',
      type: 'email',
      placeholder: '이메일을 입력해주세요',
    },
    {
      id: 'name',
      label: '닉네임',
      type: 'text',
      placeholder: '닉네임을 입력해주세요',
    },
  ],
  editPassword: [
    {
      id: 'nowPassword',
      label: '현재 비밀번호',
      type: 'password',
      placeholder: '현재 비밀번호 입력',
    },
    {
      id: 'newPassword',
      label: '새 비밀번호',
      type: 'password',
      placeholder: '새 비밀번호 입력',
    },
    {
      id: 'newPasswordCheck',
      label: '새 비밀번호 확인',
      type: 'password',
      placeholder: '새 비밀번호 입력',
    },
  ],
};

export default formFields;
