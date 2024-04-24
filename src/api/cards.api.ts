import { API, API_CARDS } from '@/constants/API';
import instance from '@/api/instance';

/**
 * 카드 생성 api
 */
const postCard = ({
  assigneeUserId,
  dashboardId,
  columnId,
  title,
  description,
  dueDate,
  tags,
  imageUrl,
}) => {
  return instance({
    url: API.CARDS,
    method: 'POST',
    data: {
      assigneeUserId,
      dashboardId,
      columnId,
      title,
      description,
      dueDate,
      tags,
      imageUrl,
    },
  });
};

/**
 * 카드 목록 조회 api
 */
const getCardList = (columnId: string) => {
  return instance({
    url: API.CARDS,
    method: 'GET',
    params: {
      columnId,
    },
  });
};

// /**
//  * 카드 수정 api
//  */
const putEditCard = (
  cardId,
  columnId,
  assigneeUserId,
  title,
  description,
  dueDate,
  tags,
  imageUrl,
) => {
  return instance({
    url: API_CARDS.BY_ID(cardId),
    method: 'PUT',
    params: {
      columnId,
      assigneeUserId,
      title,
      description,
      dueDate,
      tags,
      imageUrl,
    },
  });
};

/**
 * 카드 상세 조회 api
 */
const getCardDetails = ({ cardId }) => {
  return instance({
    url: API_CARDS.BY_ID(cardId),
    method: 'GET',
  });
};

/**
 * 카드 삭제 api
 */
const deleteCard = ({ cardId }) => {
  return instance({
    url: API_CARDS.BY_ID(cardId),
    method: 'DELETE',
  });
};

export default {
  postCard,
  getCardList,
  putEditCard,
  getCardDetails,
  deleteCard,
};
