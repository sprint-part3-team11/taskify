import CommentItem from './CommentItem';

export interface CommentListProps {
  list: {
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
  }[];
  modify: (content: string, id: number) => void;
  destroy: (id: number) => void;
}

const CommentList: React.FC<CommentListProps> = ({ list, modify, destroy }) => {
  return (
    <>
      {list.map((comment) => (
        <CommentItem
          id={comment.id}
          author={comment.author}
          content={comment.content}
          createdDate={comment.createdAt}
          updatedDate={comment.updatedAt}
          modify={modify}
          destroy={destroy}
        />
      ))}
    </>
  );
};
export default CommentList;
