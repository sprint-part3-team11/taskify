import { useState } from 'react';
import styled from 'styled-components';
import Button from '@/components/common/button/Button';
import useDetailCardQuery from '@/hooks/query/cards/useDetailCardQuery';
import useCreateCommentsMutation from '@/hooks/query/comments/useCreateCommentsMutation';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import commentApi from '@/api/comment.api';
import { CommentItemProps } from '@/types/CardDetail';

const S = {
  CommentFormBox: styled.div`
    margin-top: 2rem;
  `,

  Title: styled.h1`
    font-weight: 500;

    ${MEDIA_QUERIES.onMobile} {
      font-size: 1.4rem;
    }
  `,

  Form: styled.form``,

  InputWrapper: styled.div`
    position: relative;
    display: flex;
    width: 100%;
  `,
  TextArea: styled.textarea`
    padding: 1rem 0 7rem 1rem;
    margin-top: 1rem;
    height: 12rem;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.color.grayLight};
    border-radius: 0.6rem;
    resize: none;

    ${MEDIA_QUERIES.onMobile} {
      box-sizing: border-box;
      padding: 1rem 0 5rem 1rem;
      height: 7rem;
    }
  `,

  Button: styled(Button)`
    position: absolute;
    bottom: 1rem;
    right: 1rem;

    ${MEDIA_QUERIES.onMobile} {
      right: 3rem;
      width: 5rem;
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 1.2rem;
    }
  `,
};

interface CommentFormProps {
  create: () => void;
  length: number;
  card_Id: number;
}

function CommentForm({ create, length, card_Id: CARD_ID }: CommentFormProps) {
  const [inputValue, setInputValue] = useState('');
  const { data } = useDetailCardQuery({
    cardId: CARD_ID,
  });

  const { columnId: COLUMN_ID, dashboardId: DASHBOARD_ID } = data;

  const { mutate: responseCreateComment } = useCreateCommentsMutation();

  const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmitContent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    responseCreateComment({
      content: inputValue,
      cardId: CARD_ID,
      columnId: COLUMN_ID,
      dashboardId: DASHBOARD_ID,
    });

    create();
    setInputValue('');
  };

  return (
    <S.CommentFormBox>
      <S.Form onSubmit={handleSubmitContent}>
        <S.Title>댓글 ({length})</S.Title>

        <S.InputWrapper>
          <S.TextArea
            onChange={handleChangeInput}
            value={inputValue}
            placeholder="댓글 작성하기"
          />

          <S.Button size="S">입력</S.Button>
        </S.InputWrapper>
      </S.Form>
    </S.CommentFormBox>
  );
}

export default CommentForm;
