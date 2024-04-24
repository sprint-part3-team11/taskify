import CommentItem from './CommentItem';
import useCommentsListQuery from '@/hooks/query/comments/useCommentsListQuery';

export interface CommentListProps {
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
    cardId: 4914,
  });

  const comments = data && data.comments;

  return (
    <div>
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
    </div>
  );
}
export default CommentList;
