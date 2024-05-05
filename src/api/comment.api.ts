import { API, API_COMMENTS } from '@/constants/API';
import instance from '@/api/instance';

interface CreateComments {
  content: string;
  cardId: number;
  columnId: number;
  dashboardId: number;
}

interface PutCommentEditProps {
  content: string;
  commentId: number;
}

const postCreateComment = ({
  content,
  cardId,
  columnId,
  dashboardId,
}: CreateComments) => {
  return instance({
    url: API.COMMENTS,
    method: 'POST',
    data: {
      content,
      cardId,
      columnId,
      dashboardId,
    },
  });
};

const getCommentList = ({
  cardId,
  size,
  cursorId,
}: {
  cardId: number;
  size: number;
  cursorId: number;
}) => {
  return instance({
    url: API.COMMENTS,
    method: 'GET',
    params: {
      cardId,
      size,
      cursorId,
    },
  });
};

const putCommentEdit = ({ content, commentId }: PutCommentEditProps) => {
  return instance({
    url: API_COMMENTS.BY_ID(commentId),
    method: 'PUT',
    data: {
      content,
    },
  });
};

const deleteComment = (commentId: number) => {
  return instance({
    url: API_COMMENTS.BY_ID(commentId),
    method: 'DELETE',
  });
};

export default {
  getCommentList,
  postCreateComment,
  putCommentEdit,
  deleteComment,
};
