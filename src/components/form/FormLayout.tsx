import Link from 'next/link';
import styled from 'styled-components';
import LogoText from '@/public/icon/Taskify.svg';
import LogoImg from '@/public/icon/logoImg.svg';
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
