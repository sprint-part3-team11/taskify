import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import Emil from '@/public/icon/email.svg';
import Facebook from '@/public/icon/facebook.svg';
import Insta from '@/public/icon/insta.svg';

const S = {
  Container: styled.footer`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    height: 33.6rem;
    padding: 12rem 14rem 0 14rem;
    background-color: ${({ theme }) => theme.color.black_000000};

    ${MEDIA_QUERIES.onTablet} {
      flex-direction: row;
      justify-content: space-between;
      padding-left: 4rem;
      padding-right: 4rem;
    }

    ${MEDIA_QUERIES.onMobile} {
      flex-direction: column;
      justify-content: flex-start;
    }
  `,

  PrivacyPolicyAndFAQWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 1.2rem;

    ${MEDIA_QUERIES.onTablet} {
      gap: 3.2rem;
      margin-top: 0;
    }
  `,

  Text: styled.div`
    color: ${({ theme }) => theme.color.gray};
    font-size: 1.2rem;
    font-weight: 400;

    ${MEDIA_QUERIES.onTablet} {
      font-size: 1.6rem;
    }
  `,

  IconWrapper: styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 8.8rem;

    ${MEDIA_QUERIES.onTablet} {
      gap: 1.4rem;
      margin-top: 0;
    }
  `,
};

export default function Footer() {
  return (
    <S.Container>
      <S.Text>©codeit - 2024</S.Text>
      <S.PrivacyPolicyAndFAQWrapper>
        <S.Text>Privacy Policy</S.Text>
        <S.Text>FAQ</S.Text>
      </S.PrivacyPolicyAndFAQWrapper>
      <S.IconWrapper>
        <Link href="https://www.google.com/intl/ko/gmail/about/">
          <Emil />
        </Link>
        <Link href="https://www.facebook.com/?locale=ko_KR">
          <Facebook />
        </Link>
        <Link href="https://www.instagram.com/">
          <Insta />
        </Link>
      </S.IconWrapper>
    </S.Container>
  );
}
