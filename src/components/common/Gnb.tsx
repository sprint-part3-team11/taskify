import Link from 'next/link';
import { styled } from 'styled-components';
import LogoName from '@/public/icon/locoName.svg';
import LogoIcon from '@/public/icon/logoIcon.svg';

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
    padding: 0 calc((100vw - 110rem) / 2 + 4rem);

    @media (max-width: 1200px) {
      padding: 2rem;
    }
  `,

  Logo: styled.div`
    display: flex;
    align-items: center;
  `,

  LogoName: styled(LogoName)`
    @media (max-width: 787px) {
      display: none;
    }
  `,

  GoSign: styled.div`
    display: flex;
    gap: 1.4rem;

    @media (max-width: 787px) {
      gap: 0.2rem;
    }

    a {
      border-radius: 0.8rem;
      padding: 0.6rem 1rem;

      &:hover {
        background-color: #eee;
      }
      @media (max-width: 787px) {
        font-size: 1.4rem;
      }
    }
  `,
};

function Gnb() {
  return (
    <S.Container>
      <S.Logo>
        <LogoIcon />
        <S.LogoName />
      </S.Logo>
      <S.GoSign>
        <Link href="/signin">로그인</Link>
        <Link href="/signup">회원가입</Link>
      </S.GoSign>
    </S.Container>
  );
}

export default Gnb;
