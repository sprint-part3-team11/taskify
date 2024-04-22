import Link from 'next/link';
import styled from 'styled-components';
import LogoText from '@/public/icon/Taskify.svg';
import LogoImg from '@/public/icon/logoImg.svg';

const S = {
  Layout: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.background};
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    width: 52rem;
  `,
  LogoBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1.4rem;
  `,
  LogoImg: styled(LogoImg)`
    margin: 0 0 1.7rem 3.9rem;
  `,
  WelcomeText: styled.h2`
    color: ${({ theme }) => theme.color.body};
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
  `,
  LinkBox: styled.div`
    display: flex;
    gap: 1rem;

    color: ${({ theme }) => theme.color.body};
    text-align: center;
  `,
  LinkText: styled(Link)`
    color: ${({ theme }) => theme.color.main};
    text-decoration-line: underline;
  `,
};

const LayoutValues = {
  signIn: {
    welcomeText: '오늘도 만나서 반가워요!',
    message: '회원이 아니신가요?',
    linkText: '회원가입하기',
    path: '/SignUp',
  },
  signUp: {
    welcomeText: '첫 방문을 환영합니다!',
    message: '이미 가입하셨나요?',
    linkText: '로그인하기',
    path: '/SignIn',
  },
};

interface FormLayoutProps {
  pageType: 'signIn' | 'signUp';
  children: React.ReactNode;
}

function SignLayout({ pageType, children }: FormLayoutProps) {
  return (
    <S.Layout>
      <S.Container>
        <S.LogoBox>
          <S.LogoImg />
          <LogoText />
          <S.WelcomeText>{LayoutValues[pageType].welcomeText}</S.WelcomeText>
        </S.LogoBox>
        {children}
        <S.LinkBox>
          <p>{LayoutValues[pageType].message}</p>
          <S.LinkText href={LayoutValues[pageType].path}>
            {LayoutValues[pageType].linkText}
          </S.LinkText>
        </S.LinkBox>
      </S.Container>
    </S.Layout>
  );
}

export default SignLayout;
