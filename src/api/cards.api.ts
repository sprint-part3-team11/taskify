import { API, API_CARDS } from '@/constants/API';
import instance from '@/api/instance';

interface PostCardProp {
  assigneeUserId: number;
  dashboardId: number;
  columnId: number;
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
  imageUrl: string;
}
interface GetCardListProp {
  size: number;
  cursorId: number;
  columnId: number;
}
interface PutEditCardProp {
  cardId: number;
  columnId: number;
  assigneeUserId: number;
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
  imageUrl: string;
}
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
}: PostCardProp) => {
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
const getCardList = ({ size, cursorId, columnId }: GetCardListProp) => {
  return instance({
    url: API.CARDS,
    method: 'GET',
    params: {
      size,
      cursorId,
      columnId,
    },
  });
};

/**
 * 카드 수정 api
 */
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
    data: {
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
