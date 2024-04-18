import { ImgFileUpload } from '../common/ImgFileUpload';
import styled from 'styled-components';

function ProfileChange() {
  const S = {
    Container: styled.div``,
    ImageBox: styled.div``,
    ImageTitle: styled.span``,
    ImageContent: styled.div``,
    InputBox: styled.div``,
    EmailLabel: styled.span``,
    EmailInput: styled.div``,
    NicknameLabel: styled.span``,
    NicknameInput: styled.div``,
  };
  return (
    <S.Container>
      <S.ImageBox>
        <S.ImageTitle>프로필</S.ImageTitle>
        <S.ImageContent>
          <ImgFileUpload edit small />
        </S.ImageContent>
      </S.ImageBox>

      <S.InputBox>
        <S.EmailLabel>이메일</S.EmailLabel>
      </S.InputBox>
    </S.Container>
  );
}

export default ProfileChange;
