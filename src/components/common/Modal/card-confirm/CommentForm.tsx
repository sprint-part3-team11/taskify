import { useState } from 'react';
import MOCK_DATA from './MockData';
import styled from 'styled-components';

const S = {
  CommentFormBox: styled.div`
    margin-top: 2rem;
  `,

  Title: styled.h1`
    font-weight: 500;
  `,

  Form: styled.form``,

  Input: styled.input`
    padding: 0 0 7rem 1rem;
    margin-top: 1rem;
    height: 12rem;
    width: 100%;
  `,

  Button: styled.button`
    width: 18%;
    padding: 18px 0 16px;
    text-align: center;
    box-sizing: border-box;
    text-decoration: none;
    border: 1px solid ${({ theme }) => theme.color.grayLight};
    color: ${({ theme }) => theme.color.main};
    font-size: 14px;
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

        <S.Input
          onChange={changeHandler}
          value={inputValue}
          placeholder="댓글 작성하기"
        />

        <S.Button type="submit" value="입력" />
      </S.Form>
    </S.CommentFormBox>
  );
}

export default CommentForm;
