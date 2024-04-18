import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { CommentItemProps } from './types';
import styled from 'styled-components';
import formatDate from '@/utils/date';

const S = {
  CommentItemContainer: styled.ul`
    display: flex;
    align-items: center;
    padding: 1rem;
    height: 10rem;
  `,

  ProfileImage: styled(Image)`
    border-radius: 50%;
  `,

  CommentInfoBox: styled.div`
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    margin-top: 1rem;
    margin-left: 1rem;
  `,
  NameAndDateBox: styled.div`
    display: flex;
  `,

  ContentBox: styled.div``,
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

  ButtonBox: styled.div`
    display: flex;
    gap: 0.5rem;
    margin-left: 1rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color.gray};
  `,
  ModifyComment: styled.li`
    cursor: pointer;
    text-decoration: underline;
  `,
  DeleteComment: styled.li`
    cursor: pointer;
    text-decoration: underline;
  `,

  CommentInput: styled.input`
    flex: 1;
    width: 30rem;
    padding: 0.5rem;
    border: ${({ theme }) => theme.color.grayLight};
    border-radius: 0.5rem;
    margin: 0 1rem;
  `,
};

function CommentItem({
  id,
  author,
  content,
  createdDate,
  updatedDate,
  modify,
  destroy,
}: CommentItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(content);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleEditComment = (e: React.MouseEvent<HTMLLIElement>) => {
    setEditContent(content);
    setIsEditing(true);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditContent(e.target.value);
  };

  const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const updatedData = e.currentTarget.value;
      modify(updatedData, id);
      setIsEditing(false);
    } else if (e.key === 'Escape') setIsEditing(false);
  };

  const handleDeleteComment = () => {
    destroy(id);
  };

  return (
    <S.CommentItemContainer>
      <S.ProfileImage
        width={34}
        height={34}
        src={author.profileImageUrl}
        alt="프로필 이미지"
      />
      <S.CommentInfoBox>
        <S.NameAndDateBox>
          <S.CommentNickName>{author.nickname}</S.CommentNickName>
          <S.CommentDate>{formatDate(createdDate)}</S.CommentDate>
        </S.NameAndDateBox>
        <S.ContentBox>
          {isEditing ? (
            <S.CommentInput
              type="text"
              value={editContent}
              onChange={changeHandler}
              ref={inputRef}
              onKeyDown={keyPressHandler}
            />
          ) : (
            <S.CommentContent>{content}</S.CommentContent>
          )}
        </S.ContentBox>
        <S.ButtonBox>
          <S.ModifyComment onClick={handleEditComment}>수정</S.ModifyComment>
          <S.DeleteComment onClick={handleDeleteComment}>삭제</S.DeleteComment>
        </S.ButtonBox>
      </S.CommentInfoBox>
    </S.CommentItemContainer>
  );
}

export default CommentItem;
