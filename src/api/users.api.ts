import { API, API_USERS } from '@/constants/API';
import instance from '@/api/instance';

interface PostSignUpProps {
  email: string;
  nickname: string;
  password: string;
}

interface PutMyProfileEditProps {
  nickname: string;
  profileImageUrl: string;
}

/**
 * 회원가입
 */
const postSignUp = ({ email, nickname, password }: PostSignUpProps) => {
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
const putMyProfileEdit = ({
  nickname,
  profileImageUrl,
}: PutMyProfileEditProps) => {
  return instance({
    url: API_USERS.MY_INFO,
    method: 'PUT',
    data: { nickname, profileImageUrl },
  });
};

/**
 * 프로필 이미지 업로드
 */
const postProfileImgUpload = ({
  profileImageUrl,
}: {
  profileImageUrl: string;
}) => {
  return instance({
    url: API_USERS.PROFILE_IMG_UPLOAD,
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: { image: profileImageUrl },
  });
};

export default {
  postSignUp,
  getMyProfile,
  putMyProfileEdit,
  postProfileImgUpload,
};
