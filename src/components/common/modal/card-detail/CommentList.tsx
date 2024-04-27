import { useRef } from 'react';
import styled from 'styled-components';
import CommentItem from '@/components/common/modal/card-detail/CommentItem';
import InvitedDashBoardListLoader from '@/components/dashboard/my-board/InvitedDashBoardListLoader';
import useCommentsListQuery from '@/hooks/query/comments/useCommentsListQuery';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const S = {
  CommentListContainer: styled.div`
    overflow: scroll;
    height: 13rem;
  `,
};
export interface CommentListProps {
  edit: (content: string, id: number) => void;
  remove: (id: number) => void;
  card_Id: number;
}
interface CommentItemDataProps {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  cardId: number;
  author: {
    profileImageUrl: string;
    nickname: string;
    id: number;
  };
}
function CommentList({ edit, remove, card_Id }: CommentListProps) {
  const loaderRef = useRef();
  const { data, fetchNextPage } = useCommentsListQuery({
    cardId: card_Id,
  });
  const isLastPage = data?.pages?.at(-1)?.cursorId === null;

  const comments = data && data.comments;

  useIntersectionObserver(async () => {
    await fetchNextPage();
  }, loaderRef);

  return (
    <S.CommentListContainer>
      {comments &&
        comments.map((comment: CommentItemDataProps) => (
          <CommentItem
            key={comment.id}
            id={comment.id}
            cardId={comment.cardId}
            author={comment.author}
            content={comment.content}
            createdAt={comment.createdAt}
            updatedAt={comment.updatedAt}
            edit={edit}
            remove={remove}
          />
        ))}
      {/* <InvitedDashBoardListLoader
        loaderRef={loaderRef}
        style={isLastPage ? { display: 'none' } : { marginTop: '2rem' }}
      /> */}
    </S.CommentListContainer>
  );
}
export default CommentList;
