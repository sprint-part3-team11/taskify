import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CommentForm from '@/components/common/modal/card-detail/CommentForm';
import CommentList from '@/components/common/modal/card-detail/CommentList';
import MOCK_DATA from '@/components/common/modal/card-detail/MOCK_DATA';
import useCommentsListQuery from '@/hooks/query/comments/useCommentsListQuery';

const S = {
  CommentContainer: styled.ul`
    list-style: none;
    padding: 0;
  `,
};

interface CommentProps {
  card_Id: number;
}
function Comment({ card_Id }: CommentProps) {
  const { data } = useCommentsListQuery({ cardId: card_Id });
  const comments = data && data.comments;
  const [list, setList] = useState([]);

  useEffect(() => {
    if (comments) {
      setList(comments);
    }
  }, [comments]);

  if (!data) {
    return null;
  }

  const create = () => {
    const newComment = {
      id: comments.id,
      content: comments.content,
      createdAt: comments.createdAt,
      updatedAt: comments.updatedAt,
      cardId: card_Id,
      author: {
        profileImageUrl: comments?.author?.profileImageUrl,
        nickname: comments?.author?.nickname,
        id: comments?.author?.id,
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
      <CommentForm create={create} length={list.length} card_Id={card_Id} />

      <CommentList edit={edit} remove={remove} card_Id={card_Id} />
    </S.CommentContainer>
  );
}

export default Comment;
