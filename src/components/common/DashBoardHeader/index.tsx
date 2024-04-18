import Image from 'next/image';
import styled from 'styled-components';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import theme from '@/styles/theme';

const S = {
  HeaderContainer: styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    width: 100%;
    height: 7rem;
    border-bottom: 0.1rem solid ${theme.color.grayLight};

    ${MEDIA_QUERIES.onPc} {
      padding-left: 30rem;
    }
    ${MEDIA_QUERIES.onTablet} {
      padding-left: 16rem;
    }
    ${MEDIA_QUERIES.onMobile} {
      padding-left: 6.7rem;
    }
  `,

  MenuNameAndButtonBox: styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;

    ${MEDIA_QUERIES.onTablet} {
      display: block;
      text-align: right;
    }
    ${MEDIA_QUERIES.onMobile} {
      display: block;
      text-align: right;
    }
  `,

  MenuName: styled.div`
    font-weight: 700;
    padding-left: 2rem;

    ${MEDIA_QUERIES.onTablet} {
      display: none;
    }
    ${MEDIA_QUERIES.onMobile} {
      display: none;
    }
  `,

  ButtonContainer: styled.div`
    //추후 구현
  `,

  Button: styled.button`
    margin-left: 2rem;
  `,

  InvitedUsersBox: styled.div`
    display: flex;
    align-items: center;
    margin: 0 2rem;
  `,

  InvitedUserImage: styled(Image)`
    ${MEDIA_QUERIES.onMobile} {
      width: 3.4rem;
      height: 3.4rem;
    }
  `,

  ProfileBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 40px;
    border-left: 1px solid ${theme.color.grayLight};
    gap: 1rem;

    ${MEDIA_QUERIES.onMobile} {
      padding: 0 1rem;
    }
  `,

  ProfileImg: styled(Image)`
    ${MEDIA_QUERIES.onMobile} {
      width: 3.4rem;
      height: 3.4rem;
    }
  `,

  ProfileName: styled.div`
    font-size: 1.6rem;
    font-weight: 500;

    ${MEDIA_QUERIES.onMobile} {
      display: none;
    }
  `,
};

interface HeaderProps {
  menuName: string;
  profileName: string;
  profileImgURL: string;
  invitedUsers?: string[];
}

function DashBoardHeader({
  menuName,
  profileName,
  profileImgURL,
  invitedUsers,
}: HeaderProps) {
  return (
    <S.HeaderContainer>
      <S.MenuNameAndButtonBox>
        <S.MenuName>{menuName}</S.MenuName>
        <S.ButtonContainer>
          <S.Button>관리</S.Button>
          <S.Button>초대하기</S.Button>
        </S.ButtonContainer>
      </S.MenuNameAndButtonBox>
      <S.InvitedUsersBox>
        {invitedUsers &&
          invitedUsers.map((userImgUrl, index) => (
            <S.InvitedUserImage
              key={index}
              width={38}
              height={38}
              src={userImgUrl}
              alt="초대된 유저"
              style={{
                marginLeft: `${0 - 8}px`,
                zIndex: invitedUsers.length - index,
              }}
            />
          ))}
      </S.InvitedUsersBox>
      <S.ProfileBox>
        <S.ProfileImg
          src={profileImgURL}
          width={38}
          height={38}
          alt="profileImg"
        />
        <S.ProfileName>{profileName}</S.ProfileName>
      </S.ProfileBox>
    </S.HeaderContainer>
  );
}

export default DashBoardHeader;
