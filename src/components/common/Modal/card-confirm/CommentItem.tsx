import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${year}.${month}.${day} ${hours}:${minutes}`;
};

const S = {
  CommentRow: styled.ul`
    display: flex;
    align-items: center;
    padding: 10px;
  `,

  ProfileImage: styled(Image)`
    border-radius: 50%;
  `,

  CommentId: styled.li`
    margin-left: 10px;
  `,

  CommentContent: styled.li`
    flex: 1;
    margin: 0 10px;
    cursor: pointer;
  `,

  CommentDate: styled.li`
    margin-right: 10px;
  `,

  DeleteComment: styled.li`
    cursor: pointer;
  `,

  CommentInput: styled.input`
    flex: 1;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 0 10px;
  `,
};

function CommentItem(props: any) {
  const [liMode, editMode] = useState(false);
  const [content, newContent] = useState(props.content);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (liMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [liMode]);

  const modifyHandler = (e: any) => {
    editMode(true);
  };

  const changeHandler = (e: any) => {
    newContent(e.target.value);
  };

  const keyPressHandler = async (e: any) => {
    if (e.keyCode === 13) {
      const updatedData = e.target.value;
      await props.modify(updatedData, props.id);
      editMode(false);
    } else if (e.keyCode === 27) editMode(false);
  };

  const deleteHandler = () => {
    props.destroy(props.id);
  };

  return (
    <S.CommentRow className="comment-row">
      <S.ProfileImage
        width={34}
        height={34}
        src={props.author.profileImageUrl}
        alt={'프로필 이미지'}
      />
      <S.CommentId className="comment-id">{props.author.nickname}</S.CommentId>
      <S.CommentDate>{formatDate(props.createdDate)}</S.CommentDate>
      {liMode ? (
        <S.CommentInput
          type="text"
          value={content}
          onChange={changeHandler}
          ref={inputRef}
          onKeyDown={keyPressHandler}
        />
      ) : (
        <S.CommentContent className="comment-content" onClick={modifyHandler}>
          {props.content}
        </S.CommentContent>
      )}
      <S.CommentDate className="comment-date">{props.date}</S.CommentDate>
      <S.DeleteComment className="delete-comment" onClick={deleteHandler}>
        삭제
      </S.DeleteComment>
    </S.CommentRow>
  );
}

export default CommentItem;
