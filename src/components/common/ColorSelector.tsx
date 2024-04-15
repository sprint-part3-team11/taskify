import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ColorCheckIcon from '@/public/icon/colorCheckIcon.svg';
import theme from '@/styles/theme';

const S = {
  ColorArea: styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
  `,
  ColorPalette: styled.div<{ bg: Color; showIcon: boolean }>`
    position: relative;
    width: 1.875rem;
    height: 1.875rem;
    flex-shrink: 0;
    cursor: pointer;
    background-color: ${(props) => props.bg};

    &:after {
      content: ${(props) =>
        props.showIcon ? "url('/icon/colorCheckIcon.svg')" : ''};
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `,
  Button: styled.button`
    background-color: hotpink;
    width: 3.25rem;
    height: 3.25rem;
  `,
  SelectedColor: styled.div<{ bg: string }>`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) => props.bg};
  `,
};

type Color = string;

interface ColorPalette {
  [key: string]: Color;
}

const colorPalette: ColorPalette = {
  green: theme.color.green,
  purple: theme.color.purple,
  orange: theme.color.orange,
  blue: theme.color.skyBlue,
  pink: theme.color.pink,
};

function ColorSelector(): JSX.Element {
  const [selectedColors, setSelectedColors] = useState<Color[]>([
    'rgba(0, 0, 0, 0)',
  ]);
  const [changeColor, setChangeColor] = useState<boolean>(false);
  const lastClickedColor = useRef<Color>('');
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [currentColor, setCurrentColor] = useState<string>('');

  const handleColorClick = (color: Color) => {
    lastClickedColor.current = color;
    setChangeColor(true);
    setShowIcon(true);
    setCurrentColor(color);
  };

  const handleButtonClick = () => {
    setSelectedColors((prevColors) => {
      const newColors = [...prevColors];
      if (newColors.length < 3) {
        newColors.shift();
      }
      return [...newColors, lastClickedColor.current];
    });
    setChangeColor(true);
  };
  let resultColor = selectedColors[selectedColors.length - 1];
  let color = selectedColors;

  return (
    <>
      <S.ColorArea>
        {Object.entries(colorPalette).map(([colorName, colorValue]) => (
          <S.ColorPalette
            key={colorName}
            bg={colorValue}
            onClick={() => handleColorClick(colorValue)}
            showIcon={colorValue === currentColor && showIcon}
          />
        ))}
      </S.ColorArea>
      <S.Button onClick={handleButtonClick}>버튼</S.Button>
      {selectedColors.length > 0 && <S.SelectedColor bg={resultColor} />}
    </>
  );
}

export default ColorSelector;
