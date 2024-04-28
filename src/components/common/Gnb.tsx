import Link from 'next/link';
import { styled } from 'styled-components';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import WhiteLogo from '@/public/icon/whiteLogo.svg';
import WhiteLogoName from '@/public/icon/whiteLogoName.svg';

const S = {
  Container: styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    z-index: 100;

    width: 100vw;
    height: 7rem;
    padding: 0 calc(4rem + 2vw);
  `,

  Logo: styled.div`
    display: flex;
    align-items: center;
  `,

  LogoName: styled(WhiteLogoName)`
    ${MEDIA_QUERIES.onTablet} {
      display: none;
    }
  `,

  GoSign: styled.div`
    display: flex;
    gap: 1.4rem;

    ${MEDIA_QUERIES.onTablet} {
      gap: 0.2rem;
    }

    a {
      border-radius: 0.8rem;
      padding: 0.6rem 1rem;
      color: ${({ theme }) => theme.color.white};
      font-size: 1.6rem;
      font-weight: 400;

      ${MEDIA_QUERIES.onTablet} {
        font-size: 1.4rem;
      }
    }
  `,
};

function Gnb() {
  return (
    <S.Container>
      <S.Logo>
        <WhiteLogo />
        <S.LogoName />
      </S.Logo>
      <S.GoSign>
        {localStorage.getItem('accessToken') ? (
          <Link href="/" onClick={() => localStorage.clear()}>
            로그아웃
          </Link>
        ) : (
          <div>
            <Link href="/signin">로그인</Link>
            <Link href="/signup">회원가입</Link>
          </div>
        )}
      </S.GoSign>
    </S.Container>
  );
}

export default Gnb;
