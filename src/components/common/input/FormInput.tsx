import React from 'react';
import { InputHTMLAttributes } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../button/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import styled from 'styled-components';
import { Validation, ValidationType } from '@/constants/SCHEMA';

const S = {
  Form: styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.8rem;
    width: 52rem;
  `,
  Container: styled.div`
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
    margin-top: 1rem;
  `,
};

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

/**
 * @component
 * @param label - label 이름 (이메일, 제목 ...)
 * @param id - label, input 연결용 id (input, title ...)
 * @param type - input 타입 (email, text ...)
 * @param placeholder - placeholder
 */

const FormInput = ({ ...htmlInputProps }: FormInputProps) => {
  const formOptions = { resolver: zodResolver(Validation) };

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<ValidationType>(formOptions);

  const onSubmit: SubmitHandler<ValidationType> = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Container>
        <S.Label htmlFor={'email'}>{'이메일'}</S.Label>
        <S.Input
          id={'email'}
          {...htmlInputProps}
          {...register('email')}
          onBlur={() => trigger('email')}
          error={!!errors.email}
        />
        {errors?.email && <S.Error>{errors.email.message}</S.Error>}
      </S.Container>
      <S.Container>
        <S.Label htmlFor={'name'}>{'닉네임'}</S.Label>
        <S.Input
          id={'name'}
          {...htmlInputProps}
          {...register('name')}
          onBlur={() => trigger('name')}
          error={!!errors.name}
        />
        {errors?.name && <S.Error>{errors.name.message}</S.Error>}
      </S.Container>
      <S.Container>
        <S.Label htmlFor={'password'}>{'비밀번호'}</S.Label>
        <S.Input
          id={'password'}
          {...htmlInputProps}
          {...register('password')}
          onBlur={() => {
            trigger('password');
            trigger('passwordCheck');
          }}
          error={!!errors.password}
        />
        {errors?.password && <S.Error>{errors.password.message}</S.Error>}
      </S.Container>
      <S.Container>
        <S.Label htmlFor={'passwordCheck'}>{'비밀번호 확인'}</S.Label>
        <S.Input
          id={'passwordCheck'}
          {...htmlInputProps}
          {...register('passwordCheck')}
          onBlur={() => {
            trigger('passwordCheck');
          }}
          error={!!errors.passwordCheck}
        />
        {errors?.passwordCheck && (
          <S.Error>{errors.passwordCheck.message}</S.Error>
        )}
      </S.Container>

      <S.Button style={{ padding: '1.4rem' }} type="submit" size="L">
        {'로그인'}
      </S.Button>
    </S.Form>
  );
};

// FormInput.displayName = 'FormInput'; // 디버깅을 위해 displayName 설정

export default FormInput;
