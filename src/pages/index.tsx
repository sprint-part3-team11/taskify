import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import Landing from '@/public/image/landing.png';

const S = {
  Container: styled.div`
    background-color: ${({ theme }) => theme.color.black};
    width: 100%;
  `,
};

export default function Home() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  };
  return (
    <>
      <title>Taskify</title>
      <S.Container>
        <Image src={Landing} width={722} height={423} alt="랜딩 메인 이미지" />
      </S.Container>
    </>
  );
}
