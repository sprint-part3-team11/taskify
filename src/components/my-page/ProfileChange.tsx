import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { ImgFileUpload, imgUrlState } from '@/components/common/ImgFileUpload';
import FormInput from '@/components/common/form/Form';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import usersApi from '@/api/users.api';

const S = {
  Container: styled.div`
    width: 62rem;
    height: 36rem;
    padding: 3.2rem 2.8rem 2.8rem 2.8rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.color.white};

    ${MEDIA_QUERIES.onMobile} {
      width: 28.4rem;
      height: 46.2rem;
    }
  `,
  AlignBox: styled.div`
    display: flex;
    align-items: center;
    margin: 3.2rem 0 2.4rem 0;

    ${MEDIA_QUERIES.onMobile} {
      flex-direction: column;
      align-items: normal;
      margin-top: 8rem;
    }
  `,
  ImageBox: styled.div`
    flex: 1;
  `,
  ImageTitle: styled.span`
    font-size: 2.4rem;
    font-weight: 700;
  `,
  ImageContent: styled.div`
    margin-top: -7rem;
  `,
  InputBox: styled.div`
    flex: 2;
    margin-left: 1.6rem;

    ${MEDIA_QUERIES.onMobile} {
      margin-top: 2.4rem;
      margin-left: 0;
    }
  `,
};

function ProfileChange() {
  const urlImg = useRecoilValue(imgUrlState);
  const [imgServerUrl, setImgServerUrl] = useState<string>('');

  // profileInfo FormInput에 props로 객체 보내기
  const [profileInfo, setProfile] = useState({
    name: '',
    mail: '',
  });

  // 파일 업로드 시 이미지 url 서버에서 응답받기
  const myProfileFileUpload = async () => {
    try {
      if (urlImg) {
        const response = await usersApi.getProfileImgUpload({
          profileImageUrl: urlImg,
        });
        setImgServerUrl(response.data.profileImageUrl);
      }
    } catch (error) {
      console.error('에러???:', error.response.data.message);
    }
  };
  myProfileFileUpload();

  useEffect(() => {
    const myProfile = async () => {
      try {
        const response = await usersApi.getMyProfile();
        const { email, nickname } = response.data;
        setProfile({
          name: nickname,
          mail: email,
        });
      } catch (error) {
        console.error('에러:', error.response.data.message);
      }
    };
    myProfile();
  }, []);

  // editMyProfile FormInput에 props로 함수 보내기
  const editMyProfile = async (editNickname: string) => {
    try {
      const response = await usersApi.getMyProfileEdit({
        nickname: editNickname,
        profileImageUrl: imgServerUrl,
      });
      console.log(response.data);
    } catch (error) {
      console.error('에러:', error.response.data.message);
    }
  };

  return (
    <S.Container>
      <S.ImageTitle>프로필</S.ImageTitle>
      <S.AlignBox>
        <S.ImageBox>
          <S.ImageContent>
            <ImgFileUpload edit={false} small={false} />
          </S.ImageContent>
        </S.ImageBox>
        <S.InputBox>
          <FormInput formType="editProfile" btnSize="S" />
        </S.InputBox>
      </S.AlignBox>
    </S.Container>
  );
}

export default ProfileChange;
