import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import formatDate from '@/utils/formatDate';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import commentApi from '@/api/comment.api';
import { CommentItemsAndFunctionProps } from '@/types/CardDetail';

const S = {
  CommentItemContainer: styled.ul`
    display: flex;
    align-items: center;
    padding: 1rem;
    height: 10rem;

    ${MEDIA_QUERIES.onMobile} {
      margin-top: 1rem;
      height: 7rem;
    }
  `,

  ProfileImage: styled(Image)`
    border-radius: 50%;

    ${MEDIA_QUERIES.onMobile} {
      width: 2.6rem;
      height: 2.6rem;
    }
  `,

  CommentInfoBox: styled.div`
    display: flex;
    gap: 0.8rem;
    flex-direction: column;
    margin-top: 1rem;
    margin-left: 1rem;

    ${MEDIA_QUERIES.onMobile} {
      gap: 0.6rem;
    }
  `,

  NameAndDateBox: styled.div`
    display: flex;
  `,

  ContentBox: styled.div``,
  CommentNickName: styled.li`
    margin: 0 1rem;
    font-weight: 600;

    ${MEDIA_QUERIES.onMobile} {
      font-size: 1.2rem;
    }
  `,

  CommentContent: styled.li`
    flex: 1;
    margin: 0 1rem;

    cursor: pointer;

    ${MEDIA_QUERIES.onMobile} {
      font-size: 1.2rem;
    }
  `,

  CommentDate: styled.li`
    margin-top: 0.3rem;
    font-size: 1.2rem;

    ${MEDIA_QUERIES.onMobile} {
      font-size: 1rem;
    }
  `,

  ButtonBox: styled.div`
    display: flex;
    gap: 0.5rem;
    margin-left: 1rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color.gray};

    ${MEDIA_QUERIES.onMobile} {
      font-size: 1rem;
    }
  `,
  EditComment: styled.li`
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
    border: 1px solid ${({ theme }) => theme.color.grayLight};
    border-radius: 0.5rem;
    margin: 0 1rem;
  `,
};

// interface CommentItemProps{
// id:number;
// author:{
//   profileImageUrl: string;
//   nickname: string;
//   id: number;
// };
// content:string;
// createdDate: string;
// updatedDate: string;
// edit:()=>void
// remove:()=>void
// }

function CommentItem({
  id,
  author,
  content,
  createdDate,
  updatedDate,
  edit,
  remove,
}: CommentItemsAndFunctionProps) {
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

  const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditContent(e.target.value);
  };

  const handlePressKey = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      try {
        const updatedData = e.currentTarget.value;
        // await commentApi.putCommentEdit(cardId, id, updatedData);
        edit(updatedData, id);
        setIsEditing(false);
      } catch (error) {
        // console.error('에러:', error.response.data.message);
      }
    } else if (e.key === 'Escape') setIsEditing(false);
  };

  const handleDeleteComment = async () => {
    try {
      const response = await commentApi.deleteComment('');
      console.log(response);
      remove(id);
    } catch (error) {
      console.error('에러:', error);
    }
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
              onChange={handleChangeContent}
              ref={inputRef}
              onKeyDown={handlePressKey}
            />
          ) : (
            <S.CommentContent>{content}</S.CommentContent>
          )}
        </S.ContentBox>

        <S.ButtonBox>
          <S.EditComment onClick={handleEditComment}>수정</S.EditComment>
          <S.DeleteComment onClick={handleDeleteComment}>삭제</S.DeleteComment>
        </S.ButtonBox>
      </S.CommentInfoBox>
    </S.CommentItemContainer>
  );
}

export default CommentItem;
