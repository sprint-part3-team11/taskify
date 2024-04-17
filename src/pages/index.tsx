import React from 'react';
import styled from 'styled-components';
import LandingHeader from '@/components/landing/LandingHeader';
import LandingMiddle from '@/components/landing/LandingMiddle';
import LandingSetting from '@/components/landing/LandingSetting';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

const S = {
  MainLayout: styled.main`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.color.black};
    padding-top: 4.2rem;

    ${MEDIA_QUERIES.onTablet} {
      padding-top: 9.4rem;
    }
  `,

  IntroduceBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

export default function Home() {
  return (
    <S.MainLayout>
      <LandingHeader />
      <S.IntroduceBox>
        <LandingMiddle />
        <LandingSetting />
      </S.IntroduceBox>
    </S.MainLayout>
  );
}
