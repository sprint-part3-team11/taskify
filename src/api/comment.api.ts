import { API, API_COMMENTS } from '@/constants/API';
import instance from '@/api/instance';

interface CreateComments {
  content: string;
  cardId: number;
  columnId: number;
  dashboardId: number;
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

const getCommentList = (cardId: string) => {
  return instance({
    url: API.COMMENTS,
    method: 'GET',
    params: {
      cardId,
    },
  });
};

const putCommentEdit = (content, commentId) => {
  return instance({
    url: API_COMMENTS.BY_ID(commentId),
    method: 'PUT',
    data: {
      content,
    },
  });
};

const deleteComment = (commentsId: string) => {
  return instance({
    url: API_COMMENTS.BY_ID(commentsId),
    method: 'Delete',
  });
};

export default {
  getCommentList,
  postCreateComment,
  putCommentEdit,
  deleteComment,
};
