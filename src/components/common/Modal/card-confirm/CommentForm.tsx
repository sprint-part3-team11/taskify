import { useState } from 'react';
import styled from 'styled-components';

const S = {
  CommentFormBox: styled.div`
    margin-top: 2rem;
  `,

  Title: styled.h1`
    font-weight: 500;
  `,

  Form: styled.form``,

  InputWrapper: styled.div`
    position: relative;
    display: flex;
    width: 100%;
  `,
  Input: styled.input`
    padding: 0 0 7rem 1rem;
    margin-top: 1rem;
    height: 12rem;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.color.grayLight};
    border-radius: 0.6rem;
  `,

  Button: styled.button`
    position: absolute;

    margin: 8rem 0 0 35rem;
    width: 8rem;
    height: 3.2rem;
    box-sizing: border-box;
    border: 1px solid ${({ theme }) => theme.color.grayLight};
    border-radius: 0.6rem;

    color: ${({ theme }) => theme.color.main};
    font-size: 1.4rem;
    text-decoration: none;
    text-align: center;
  `,
};

interface CommentFormProps {
  create: (inputValue: string) => void;
  length: number;
}

function CommentForm(props: CommentFormProps) {
  const [inputValue, setInputValue] = useState('');

  const changeHandler = (e: any) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    props.create(inputValue);
    setInputValue('');
  };

  return (
    <S.CommentFormBox>
      <S.Form onSubmit={submitHandler}>
        <S.Title>
          댓글 <span>({props.length})</span>
        </S.Title>

        <S.InputWrapper>
          <S.Input
            onChange={changeHandler}
            value={inputValue}
            placeholder="댓글 작성하기"
          />

          <S.Button type="submit">입력</S.Button>
        </S.InputWrapper>
      </S.Form>
    </S.CommentFormBox>
  );
}

export default CommentForm;
