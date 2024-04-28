import { EditPasswordType } from '@/constants/SCHEMA';

export type PasswordChange = Omit<EditPasswordType, 'newPasswordCheck'>;
