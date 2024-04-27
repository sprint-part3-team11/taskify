import { z } from 'zod';
import { REGEX } from '@/constants/VALIDATION';

const Validation = {
  email: z
    .string()
    .min(1, '이메일을 입력해주세요.')
    .email('이메일 형식으로 작성해주세요.'),
  name: z
    .string()
    .min(1, '닉네임을 입력해주세요')
    .max(10, '열 자 이하로 작성해주세요.'),
  SignInPassword: z.string().min(1, '비밀번호를 입력해주세요.'),
  password: z
    .string()
    .regex(REGEX.PASSWORD, '영문+숫자+특수문자 조합 8~15자리를 입력해주세요.'),
  passwordCheck: z.string(),
  nowPassword: z.string().min(1, '현재 비밀번호를 입력해주세요.'),
  newPassword: z.string(),
  newPasswordCheck: z.string(),
};

export type SignInType = z.infer<typeof SignIn>;

export const SignIn = z.object({
  email: Validation.email,
  password: Validation.SignInPassword,
});

export type SignUpType = z.infer<typeof SignUp>;

export const SignUp = z
  .object({
    email: Validation.email,
    name: Validation.name,
    password: Validation.password,
    passwordCheck: Validation.passwordCheck,
  })
  .refine((data) => data.password === data.passwordCheck, {
    path: ['passwordCheck'],
    message: '비밀번호가 일치하지 않습니다.',
  });

export type EditProfileType = z.infer<typeof EditProfile>;

export const EditProfile = z.object({
  email: Validation.email,
  name: Validation.name,
});

export type EditPasswordType = z.infer<typeof EditPassword>;

export const EditPassword = z
  .object({
    nowPassword: Validation.nowPassword,
    newPassword: Validation.newPassword,
    newPasswordCheck: Validation.newPasswordCheck,
  })
  .refine((data) => data.newPassword === data.newPasswordCheck, {
    path: ['newPasswordCheck'],
    message: '비밀번호가 일치하지 않습니다.',
  })
  .refine((data) => data.nowPassword !== data.newPassword, {
    path: ['newPassword'],
    message: '현재 비밀번호와 새 비밀번호는 같을 수 없습니다.',
  });
