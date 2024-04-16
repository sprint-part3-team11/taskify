import React from 'react';
import styled from 'styled-components';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

interface CircleColorProps {
  color: string;
}

const S = {
  CircleColor: styled.div<{ color: string }>`
    background-color: ${(props) => props.color};
    width: 0.65rem;
    height: 0.65rem;
    border-radius: 50%;

    ${MEDIA_QUERIES.onMobile} {
      margin-left: 0.5rem;
    }
  `,
};

function CircleColor({ color }: CircleColorProps) {
  return <S.CircleColor color={color} />;
}

export default CircleColor;
