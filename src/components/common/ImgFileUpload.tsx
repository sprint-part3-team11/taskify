import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import AddIcon from '@/public/icon/addImgIcon.svg';
import EditIcon from '@/public/icon/editPencilIcon.svg';
import theme from '@/styles/theme';

const S = {
  Title: styled.p`
    color: ${theme.color.body};
    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 0.63rem;
  `,
  Label: styled.label`
    position: relative;
    display: inline-block;
    width: 4.75rem;
    height: 4.75rem;
  `,
  Image: styled.img`
    display: flex;
    width: 4.75rem;
    height: 4.75rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 0.375rem;
    background: #f5f5f5;
    cursor: pointer;
  `,
  Button: styled.button`
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    cursor: pointer;
    opacity: 0;
    width: 4.75rem;
    height: 4.75rem;
  `,
  AddIcon: styled(AddIcon)`
    flex-shrink: 0;
    cursor: pointer;
    border-radius: 0.375rem;
    background: #f5f5f5;
    display: flex;
    width: 4.75rem;
    height: 4.75rem;
    padding: 1.5rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  `,
  Overlay: styled.div`
    background: rgba(0, 0, 0, 0.6);
    border-radius: 0.375rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

interface ImgFileUploadProps {
  title: string;
  edit: boolean;
}

const ImgFileUpload = ({ title, edit }: ImgFileUploadProps) => {
  const [uploadedImage, setUploadedImage] = useState<
    string | ArrayBuffer | null
  >(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <S.Title>{title}</S.Title>
      <S.Label htmlFor="fileInput">
        {uploadedImage ? (
          <>
            <S.Image src={uploadedImage?.toString()} alt="업로드된 이미지" />
            {edit ? (
              <S.Overlay>
                <EditIcon />
              </S.Overlay>
            ) : (
              ''
            )}
          </>
        ) : (
          <S.AddIcon onClick={handleClick} />
        )}
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={onChangeImage}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
        <S.Button onClick={handleClick}>파일 선택</S.Button>
      </S.Label>
    </>
  );
};

export default ImgFileUpload;
