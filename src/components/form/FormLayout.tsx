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

interface FormLayoutProps {
  welcomeText?: string;
  children: React.ReactNode;
  message?: string;
  linkText?: string;
}

function FormLayout({
  welcomeText = '오늘도 만나서 반가워요!',
  children,
  message = '회원이 아니신가요?',
  linkText = '회원가입하기',
}: FormLayoutProps) {
  return (
    <S.Layout>
      <S.LogoBox>
        <S.LogoImg />
        <LogoText />
        <h2>{welcomeText}</h2>
      </S.LogoBox>
      {children}
      <p>{message}</p>
      <Link href="/SignUp">{linkText}</Link>
    </S.Layout>
  );
}
