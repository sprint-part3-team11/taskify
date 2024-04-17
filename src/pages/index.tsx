import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import Landing from '@/public/image/landing.png';

const S = {};

export default function Home() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  };
  return (
    <>
      <title>Taskify</title>
      <Image src={Landing} width={400} height={100} alt="랜딩 메인 이미지" />
    </>
  );
}
