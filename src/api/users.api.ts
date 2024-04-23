import { API, API_USERS } from '@/constants/API';
import instance from '@/api/instance';

/**
 * 회원가입
 */
const getSignUp = ({ email, nickname, password }) => {
  return instance({
    url: API.USERS,
    method: 'POST',
    data: { email, nickname, password },
  });
};

/**
 * 내 정보 조회
 */
const getMyProfile = () => {
  return instance({
    url: API_USERS.MY_INFO,
    method: 'GET',
  });
};

/**
 * 내 정보 수정
 */
const getMyProfileEdit = ({ nickname, profileImageUrl }) => {
  return instance({
    url: API_USERS.MY_INFO,
    method: 'PUT',
    data: { nickname, profileImageUrl },
  });
};

/**
 * 프로필 이미지 업로드
 */
const getProfileImgUpload = ({ profileImageUrl }) => {
  return instance({
    url: API_USERS.PROFILE_IMG_UPLOAD,
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: { profileImageUrl },
  });
};

export default {
  getSignUp,
  getMyProfile,
  getMyProfileEdit,
  getProfileImgUpload,
};
