import CommentItem from './CommentItem';
import useCommentsListQuery from '@/hooks/query/comments/useCommentsListQuery';

export interface CommentListProps {
  //   id: number;
  //   content: string;
  //   createdAt: string;
  //   updatedAt: string;
  //   cardId: number;
  //   author: {
  //     profileImageUrl: string;
  //     nickname: string;
  //     id: number;
  // }[];
  edit: (content: string, id: number) => void;
  remove: (id: number) => void;
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
function CommentList({ edit, remove }: CommentListProps) {
  const { data } = useCommentsListQuery({
    cardId: 1,
  });

  const comments = data?.comments;

  return (
    <>
      {comments.map(
        (comment: CommentItemDataProps) =>
          comments && (
            <CommentItem
              key={comment.id}
              id={comment.id}
              author={comment.author}
              content={comment.content}
              createdDate={comment.createdAt}
              updatedDate={comment.updatedAt}
              edit={edit}
              remove={remove}
            />
          ),
      )}
    </>
  );
}
export default CommentList;
