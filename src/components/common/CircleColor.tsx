import React from 'react';
import styled from 'styled-components';

interface CircleColorProps {
  color: string;
}

const S = {
  CircleColor: styled.div<{ color: string }>`
    background-color: ${(props) => props.color};
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
  `,
};

function CircleColor({ color }: CircleColorProps) {
  return <S.CircleColor color={color} />;
}

export default CircleColor;
