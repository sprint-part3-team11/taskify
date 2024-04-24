import { useState } from 'react';
import styled from 'styled-components';
import CommentForm from '@/components/common/modal/card-detail/CommentForm';
import CommentList from '@/components/common/modal/card-detail/CommentList';
import MOCK_DATA from '@/components/common/modal/card-detail/MOCK_DATA';

const S = {
  CommentContainer: styled.ul`
    list-style: none;
    padding: 0;
  `,
};

function Comment() {
  const [list, setList] = useState(MOCK_DATA);

  const create = (inputValue: string) => {
    const newComment = {
      id: Math.random(),
      content: inputValue,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      cardId: Math.floor(Math.random() * 1000),
      author: {
        profileImageUrl: 'https://i.ibb.co/ysRQMyj/me.jpg',
        nickname: `user${Math.floor(Math.random() * 100)}`,
        id: Math.floor(Math.random() * 1000),
      },
    };
    setList([newComment, ...list]);
  };

  const edit = (content: string, id: number) => {
    const updatedList = list.map((comment) =>
      comment.id === id
        ? { ...comment, content, updatedAt: new Date().toISOString() }
        : comment,
    );
    setList(updatedList);
  };

  const remove = (id: number) => {
    const updatedList = list.filter((comment) => comment.id !== id);
    setList(updatedList);
  };

  return (
    <S.CommentContainer>
      <CommentForm create={create} length={list.length} />
      <CommentList edit={edit} remove={remove} />
    </S.CommentContainer>
  );
}

export default Comment;
