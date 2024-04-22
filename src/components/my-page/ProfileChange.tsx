import { ImgFileUpload } from '../common/ImgFileUpload';
import InputField from '../common/InputField';
import Button from '../common/button/Button';
import styled from 'styled-components';
import { BUTTON_TYPE } from '@/constants/BUTTON_TYPE';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

interface ProfileChangeProps {
  name: string;
}

function ProfileChange({ name }: ProfileChangeProps) {
  const S = {
    Container: styled.div`
      width: 62rem;
      height: 35.5rem;
      padding: 3.2rem 2.8rem 2.8rem 2.8rem;
      border-radius: 0.8rem;
      background-color: ${({ theme }) => theme.color.white};

      ${MEDIA_QUERIES.onMobile} {
        width: 28.4rem;
        height: 45.2rem;
      }
    `,
    AlignBox: styled.div`
      display: flex;
      align-items: center;
      margin: 3.2rem 0 2.4rem 0;

      ${MEDIA_QUERIES.onMobile} {
        flex-direction: column;
        align-items: normal;
      }
    `,
    ImageBox: styled.div`
      flex: 1;
    `,
    ImageTitle: styled.span`
      font-size: 2.4rem;
      font-weight: 700;
    `,
    ImageContent: styled.div``,
    InputBox: styled.div`
      flex: 2;
      margin-left: 1.6rem;

      ${MEDIA_QUERIES.onMobile} {
        margin-top: 2.4rem;
        margin-left: 0;
      }
    `,
    EmailInput: styled.div`
      pointer-events: none;
      cursor: not-allowed;
    `,
    NicknameInput: styled.div`
      margin-top: 2rem;
      color: black;
    `,
    StorageButton: styled(Button)`
      font-size: 1.4rem;
      padding: 0.8rem 2.9rem 0.7rem 3rem;
      margin-left: 48rem;

      ${MEDIA_QUERIES.onMobile} {
        margin-left: 14.5rem;
      }
    `,
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
          <S.EmailInput>
            <InputField
              label="이메일"
              id="input"
              type="email"
              placeholder="이메일을 입력해주세요"
            />
          </S.EmailInput>
          <S.NicknameInput>
            <InputField
              label="닉네임"
              id="input"
              type="text"
              placeholder={name}
            />
          </S.NicknameInput>
        </S.InputBox>
      </S.AlignBox>

      <S.StorageButton
        size="L"
        styleType={BUTTON_TYPE.PRIMARY}
        style={{ width: '8.4rem' }}
      >
        저장
      </S.StorageButton>
    </S.Container>
  );
}

export default ProfileChange;
