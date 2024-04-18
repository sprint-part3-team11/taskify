import Image from 'next/image';
import styled from 'styled-components';

const S = {
  Layout: styled.div<{ $width: string; $height: string }>`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
  `,
  Image: styled(Image)`
    flex-shrink: 0;

    width: 100%;
    height: 100%;
    border-radius: 50%;

    object-fit: cover;
  `,
};

interface AvatarImageProps {
  src: string;
  width: string;
  height: string;
}

/**
 * @component
 * @param src - 이미지 url 프롭으로 받음
 * @param width - 이미지 감싼 div의 width값 프롭으로 받음
 * @param height - 이미지 감싼 div의 height값 프롭으로 받음
 */

function AvatarImage({ src, width, height }: AvatarImageProps) {
  return (
    <S.Layout $width={width} $height={height}>
      <S.Image src={src} alt="프로필 이미지" width={100} height={100} />
    </S.Layout>
  );
}

export default AvatarImage;
