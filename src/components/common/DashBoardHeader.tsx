import Image from 'next/image';
import styled from 'styled-components';
import ProfileImg from '@/public/icon/profileImg.svg';
import theme from '@/styles/theme';

interface HeaderProps {
  menuName: string;
  profileName: string;
  profileImgURL: string;
}
const S = {
  Header: styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7rem;
    border-bottom: 0.1rem solid ${theme.color.grayLight};
  `,
  MenuNameAndButtonBox: styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
  `,
  MenuName: styled.div`
    margin-left: 30rem;
    font-weight: 700;
  `,

  ProfileBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    border-left: 1px solid ${theme.color.grayLight};
    gap: 1rem;
  `,
  ProfileName: styled.div`
    font-weight: 500;
  `,
};

function DashBoardHeader({
  menuName,
  profileName,
  profileImgURL,
}: HeaderProps) {
  return (
    <S.Header>
      <S.MenuNameAndButtonBox>
        <S.MenuName>{menuName}</S.MenuName>
      </S.MenuNameAndButtonBox>
      <S.ProfileBox>
        {/* <Image src={profileImgURL} width={38} height={38} alt="profileImg" /> */}
        <S.ProfileName>{profileName}</S.ProfileName>
      </S.ProfileBox>
    </S.Header>
  );
}

export default DashBoardHeader;
