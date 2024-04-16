function AvatarImage({ src, width, height }: AvatarImageProps) {
  return (
    <S.Layout $width={width} $height={height}>
      <S.Image src={src} alt="프로필 이미지" width={100} height={100}></S.Image>
    </S.Layout>
  );
}

export default AvatarImage;
