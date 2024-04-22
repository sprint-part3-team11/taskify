import AvatarImage from '../common/AvatarImage';
import styled from 'styled-components';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

const avatarImgUrl =
  'https://i.namu.wiki/i/enCUBDXgjFR3bLBFx9M3hpGtEq1AYjNPU75fDxYtkEHPoZG1MTORb7haPMG0lZKHMQpHF7CFm3K8krWZTTA5zw.webp';
const S = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 7rem;
    padding: 2.3rem 8rem 2.3rem 3rem;
    border: 1px solid ${({ theme }) => theme.color.grayLight};
    background-color: ${({ theme }) => theme.color.white};
    align-items: center;
    box-shadow: 0 0.5rem 0.8rem -0.6rem rgba(0, 0, 0, 0.2);
  `,
  Title: styled.span`
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.body};

    ${MEDIA_QUERIES.onTablet} {
      display: none;
    }
    ${MEDIA_QUERIES.onMobile} {
      display: none;
    }
  `,
  ProfileBox: styled.div`
    display: flex;
    align-items: center;
    width: auto;
    justify-content: flex-start;

    ${MEDIA_QUERIES.onTablet} {
      width: 100%;
      justify-content: end;
    }
    ${MEDIA_QUERIES.onMobile} {
      width: 100%;
      justify-content: end;
    }
  `,
  ProfileName: styled.div`
    margin-left: 1.2rem;
    font-size: 1.6rem;
    font-weight: 500;
    ${MEDIA_QUERIES.onMobile} {
      display: none;
    }
  `,
};

interface MypageHeaderProps {
  name: string;
}

function MypageHeader({ name }: MypageHeaderProps) {
  return (
    <S.Container>
      <S.Title>계정관리</S.Title>
      <S.ProfileBox>
        <AvatarImage src={avatarImgUrl} width="3.8rem" height="3.8rem" />
        <S.ProfileName>{name}</S.ProfileName>
      </S.ProfileBox>
    </S.Container>
  );
}

export default MypageHeader;
