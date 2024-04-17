import { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import MOCK_DATA from './MockData';

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
        profileImageUrl: 'https://example.com/profile.jpg',
        nickname: 'user' + Math.floor(Math.random() * 100),
        id: Math.floor(Math.random() * 1000),
      },
    };
    setList([...list, newComment]);
  };

  const modify = (content: string, id: number) => {
    const updatedList = list.map((comment) =>
      comment.id === id
        ? { ...comment, content, updatedAt: new Date().toISOString() }
        : comment,
    );
    setList(updatedList);
  };

  const destroy = (id: number) => {
    const updatedList = list.filter((comment) => comment.id !== id);
    setList(updatedList);
  };

  return (
    <ul className="comment">
      <CommentForm create={create} length={list.length} />
      <CommentList modify={modify} destroy={destroy} list={list} />
    </ul>
  );
}

export default Comment;
