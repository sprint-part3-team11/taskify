import React from 'react';
import styled from 'styled-components';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

const S = {
  CircleColor: styled.div<{ color: string }>`
    width: 0.65rem;
    height: 0.65rem;
    background-color: ${(props) => props.color};
    border-radius: 50%;

    ${MEDIA_QUERIES.onMobile} {
      margin-left: 0.5rem;
    }
  `,
};

interface CircleColorProps {
  color: string;
}

function CircleColor({ color }: CircleColorProps) {
  return <S.CircleColor color={color} />;
}

export default CircleColor;
