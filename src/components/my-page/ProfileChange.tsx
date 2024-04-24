import { useEffect, useState } from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { ImgFileUpload, imgUrlState } from '@/components/common/ImgFileUpload';
import FormInput from '@/components/common/form/Form';
import useMyPropfileQuery from '@/hooks/query/users/useMyPropfileQuery';
import useMyprofileEditMutation from '@/hooks/query/users/useMyprofileEditMutation';
import {
  resultServerImgState,
  useProfileImgUploadMutation,
} from '@/hooks/query/users/useProfileImgUploadMutation';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

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
  const imgServerUrl = useRecoilValue<string>(resultServerImgState);
  // profileInfo FormInput에 props로 객체 보내기
  const [profileInfo, setProfile] = useState({
    name: '',
    mail: '',
  });

  const { data: myProfile } = useMyPropfileQuery();
  useEffect(() => {
    if (myProfile && myProfile.nickname && myProfile.email) {
      setProfile((prevProfile) => ({
        ...prevProfile,
        name: myProfile.nickname,
        mail: myProfile.email,
      }));
    }
  }, [myProfile]);

  const { mutate: profileImg } = useProfileImgUploadMutation();
  useEffect(() => {
    if (urlImg) {
      profileImg(urlImg);
    }
  }, [urlImg]);

  // editMyProfile FormInput에 props로 함수 보내기
  const nickname = '메에에에엥';
  const { mutate: editMyprofile } = useMyprofileEditMutation();
  useEffect(() => {
    editMyprofile({ nickname, imgServerUrl });
  }, []);

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
