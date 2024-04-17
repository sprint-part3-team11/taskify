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
  CommentItemContainer: styled.ul`
    display: flex;
    align-items: center;
    padding: 1rem;
  `,

  ProfileImage: styled(Image)`
    border-radius: 50%;
  `,
  NameAndDateBox: styled.div`
    display: flex;
  `,
  CommentNickName: styled.li`
    margin: 0 1rem;
    font-weight: 600;
  `,

  CommentContent: styled.li`
    flex: 1;
    margin: 0 1rem;
    cursor: pointer;
  `,

  CommentDate: styled.li`
    margin-top: 0.3rem;
    font-size: 1.2rem;
  `,
  ModifyComment: styled.li`
    cursor: pointer;
  `,
  DeleteComment: styled.li`
    cursor: pointer;
  `,

  CommentInput: styled.input`
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    margin: 0 1rem;
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
    <S.CommentItemContainer>
      <S.ProfileImage
        width={34}
        height={34}
        src={props.author.profileImageUrl}
        alt={'프로필 이미지'}
      />
      <S.NameAndDateBox>
        <S.CommentNickName>{props.author.nickname}</S.CommentNickName>
        <S.CommentDate>{formatDate(props.createdDate)}</S.CommentDate>
      </S.NameAndDateBox>
      {liMode ? (
        <S.CommentInput
          type="text"
          value={content}
          onChange={changeHandler}
          ref={inputRef}
          onKeyDown={keyPressHandler}
        />
      ) : (
        <S.CommentContent onClick={modifyHandler}>
          {props.content}
        </S.CommentContent>
      )}
      <S.CommentDate>{props.date}</S.CommentDate>
      <S.ModifyComment>수정</S.ModifyComment>
      <S.DeleteComment onClick={deleteHandler}>삭제</S.DeleteComment>
    </S.CommentItemContainer>
  );
}

export default CommentItem;
