import { API, API_COLUMNS } from '@/constants/API';
import instance from '@/api/instance';

interface PostCreateColumnProp {
  title: string;
  dashboardId: number;
}
interface PutEditColumnProp {
  title: string;
  columnsId: number;
}
interface DeleteColumnProp {
  title: string;
  columnsId: number;
}
interface PostCardImageProp {
  columnId: number;
  cardImageUrl: File;
}
/**
 * 컬럼 생성 api
 */
const postCreateColumn = ({ title, dashboardId }: PostCreateColumnProp) => {
  return instance({
    url: API.COLUMNS,
    method: 'POST',
    data: {
      title,
      dashboardId,
    },
  });
};

/**
 * 컬럼 목록조회 api
 */
const getColumnList = (dashboardId: number) => {
  return instance({
    url: API.COLUMNS,
    method: 'GET',
    params: {
      dashboardId,
    },
  });
};

/**
 * 컬럼 수정 api
 */
const putEditColumn = ({ title, columnsId }: PutEditColumnProp) => {
  return instance({
    url: API_COLUMNS.BY_ID(columnsId),
    method: 'PUT',
    data: {
      title,
    },
  });
};

/**
 * 컬럼 삭제 api
 */
const deleteColumn = ({ title, columnsId }: DeleteColumnProp) => {
  return instance({
    url: API_COLUMNS.BY_ID(columnsId),
    method: 'DELETE',
    data: {
      title,
    },
  });
};

/**
 * 카드 이미지 업로드
 */
const postCardImage = ({ columnId, cardImageUrl }: PostCardImageProp) => {
  return instance({
    url: API_COLUMNS.CARD_IMAGE_UPLOAD(columnId),
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: { image: cardImageUrl },
  });
};

export default {
  postCreateColumn,
  getColumnList,
  putEditColumn,
  deleteColumn,
  postCardImage,
};
