import {
  EditPasswordType,
  EditProfileType,
  SignInType,
  SignUpType,
} from '@/constants/SCHEMA';

export type FormValues =
  | SignInType
  | SignUpType
  | EditProfileType
  | EditPasswordType;

export type PasswordChange = Omit<EditPasswordType, 'newPasswordCheck'>;
