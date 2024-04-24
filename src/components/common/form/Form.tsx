import React, {
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import styled from 'styled-components';
import Button from '@/components/common/button/Button';
import formFields from '@/constants/FORM_FIELDS';
import {
  EditPassword,
  EditPasswordType,
  EditProfile,
  EditProfileType,
  SignIn,
  SignInType,
  SignUp,
  SignUpType,
} from '@/constants/SCHEMA';

const S = {
  Form: styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.8rem;
    width: 100%;
  `,
  Container: styled.div`
    position: relative;
    margin-top: 0.4rem;
    width: 100%;
  `,
  Label: styled.label`
    color: ${({ theme }) => theme.color.body};
    font-size: 1.6rem;
  `,
  Input: styled.input<{ error?: boolean }>`
    display: flex;
    align-items: center;
    position: relative;
    margin: 0.8rem 0;
    gap: 1rem;

    width: 100%;
    padding: 1.5rem 1.6rem;
    border-radius: 0.8rem;
    border: 1px solid
      ${({ error, theme }) => (error ? theme.color.red : theme.color.grayLight)};
    background: ${({ theme }) => theme.color.white};

    &::placeholder {
      color: ${({ theme }) => theme.color.gray};
      font-size: 1.6rem;
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.color.purple};
    }
  `,
  Error: styled.p`
    position: absolute;

    color: ${({ theme }) => theme.color.red};
  `,
  Button: styled(Button)`
    width: ${(props) => (props.size === 'S' ? '8.4rem' : '100%')};
    margin-top: 1rem;
    padding: ${(props) => (props.size === 'S' ? '0.8rem' : '1.4rem')};
    font-size: ${(props) => (props.size === 'S' ? '1.4rem' : null)};
  `,
};

const buttonText = {
  signIn: '로그인',
  signUp: '회원가입',
  editProfile: '저장',
  editPassword: '변경',
};

type FormType = 'signIn' | 'signUp' | 'editProfile' | 'editPassword';

type FormValues = SignInType | SignUpType | EditProfileType | EditPasswordType;

interface FormProps extends InputHTMLAttributes<HTMLInputElement> {
  formType: FormType;
  btnSize?: 'S' | 'M' | 'L';
  onSubmit?: (data) => void;
}

/**
 * @param formType: 'signIn' | 'signUp' | 'editProfile' | 'editPassword' 사용하는 용도에 맞게 입력
 */

function Form({
  formType,
  btnSize = 'L',
  onSubmit,
  ...htmlInputProps
}: FormProps) {
  const getSchemaForFormType = (type: FormType) => {
    switch (type) {
      case 'signIn':
        return SignIn;
      case 'signUp':
        return SignUp;
      case 'editProfile':
        return EditProfile;
      case 'editPassword':
        return EditPassword;
      default:
        return undefined;
    }
  };

  const schema = getSchemaForFormType(formType);
  const formOptions = { resolver: schema ? zodResolver(schema) : undefined };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<FormValues>(formOptions);

  const Keys = {
    signIn: ['email', 'password'],
    signUp: ['email', 'name', 'password', 'passwordCheck'],
    editProfile: ['email', 'name'],
    editPassword: ['nowPassword', 'newPassword', 'newPasswordCheck'],
  };
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const watchFields = watch();

  useEffect(() => {
    const requiredKeys = Keys[formType];
    const allFieldsFilled = requiredKeys.every(
      (key) => watchFields[key]?.length > 0,
    );
    setIsButtonDisabled(!allFieldsFilled);
  }, [watchFields, formType]);

  const fieldsToRender = formFields[formType] || [];
  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      {fieldsToRender.map((field) => (
        <S.Container key={field.id}>
          <S.Label htmlFor={field.id}>{field.label}</S.Label>
          <S.Input
            id={field.id}
            type={field.type}
            placeholder={field.placeholder}
            {...htmlInputProps}
            {...register(field.id as keyof FormValues)}
            onBlur={() => {
              if (field.id === 'password' || field.id === 'passwordCheck') {
                trigger(['password', 'passwordCheck']);
              } else {
                trigger(field.id as keyof FormValues);
              }
            }}
            error={!!errors[field.id as keyof FormValues]}
          />
          {errors[field.id as keyof FormValues] && (
            <S.Error>
              {(errors[field.id as keyof FormValues] as Error)?.message}
            </S.Error>
          )}
        </S.Container>
      ))}
      <S.Button type="submit" size={btnSize} disabled={isButtonDisabled}>
        {buttonText[formType]}
      </S.Button>
    </S.Form>
  );
}

export default Form;
