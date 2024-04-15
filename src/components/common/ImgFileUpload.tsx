import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import AddIcon from '@/public/icon/addImgIcon.svg';
import EditIcon from '@/public/icon/editPencilIcon.svg';
import theme from '@/styles/theme';

const BREAKPOINT_MOBILE = 768;

const onMobile = `@media only screen and (max-width: ${BREAKPOINT_MOBILE}px)`;

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
  Label: styled.label<{ $small: boolean }>`
    position: relative;
    display: inline-block;
    width: ${(props) => (props.$small ? '4.75rem' : '11.37rem')};
    height: ${(props) => (props.$small ? '4.75rem' : '11.375rem')};

    ${onMobile} {
      width: ${(props) => (props.$small ? '3.625rem' : '6.25rem')};
      height: ${(props) => (props.$small ? '3.525rem' : '6.25rem')};
    }
  `,
  Image: styled.img<{ $small: boolean }>`
    display: flex;
    width: ${(props) => (props.$small ? '4.75rem' : '11.37rem')};
    height: ${(props) => (props.$small ? '4.75rem' : '11.375rem')};
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 0.375rem;
    cursor: pointer;

    ${onMobile} {
      width: ${(props) => (props.$small ? '3.625rem' : '8.25rem')};
      height: ${(props) => (props.$small ? '3.525rem' : '8.25rem')};
    }
  `,
  Button: styled.button<{ $small: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => (props.$small ? '100%' : '8.125rem')};
    height: ${(props) => (props.$small ? '100%;' : '8.125rem')};
    cursor: pointer;
    opacity: 0;
    width: 4.75rem;
    height: 4.75rem;

    ${onMobile} {
      width: ${(props) => (props.$small ? '3.625rem' : '8.25rem')};
      height: ${(props) => (props.$small ? '3.525rem' : '8.25rem')};
    }
  `,
  AddIcon: styled(AddIcon)`
    flex-shrink: 0;
    cursor: pointer;
    border-radius: 0.375rem;
    background: #f5f5f5;
    display: flex;
    width: ${(props) => (props.$small ? 'auto' : '11.375rem')};
    height: ${(props) => (props.$small ? 'auto' : '11.375rem')};
    padding: 1.5rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    ${onMobile} {
      width: ${(props) => (props.$small ? '3.625rem' : '8.25rem')};
      height: ${(props) => (props.$small ? '3.525rem' : '8.25rem')};
    }
  `,
  Overlay: styled.div<{ $small: boolean }>`
    background: rgba(0, 0, 0, 0.6);
    border-radius: 0.375rem;
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => (props.$small ? '100%' : '11.375rem')};
    height: ${(props) => (props.$small ? '100%' : '11.375rem')};
    display: flex;
    justify-content: center;
    align-items: center;

    ${onMobile} {
      width: ${(props) => (props.$small ? '3.625rem' : '8.25rem')};
      height: ${(props) => (props.$small ? '3.525rem' : '8.25rem')};
    }
  `,
  Input: styled.input<{ $small: boolean }>`
    display: none;
  `,
};

interface ImgFileUploadProps {
  title: string;
  edit: boolean;
  small: boolean;
}

const ImgFileUpload = ({ title, edit, small }: ImgFileUploadProps) => {
  const isImage = title === '이미지';
  const [uploadedImage, setUploadedImage] = useState<
    string | ArrayBuffer | null
  >(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      <S.Label htmlFor="fileInput" $small={small}>
        {uploadedImage ? (
          <>
            <S.Image
              src={uploadedImage?.toString()}
              alt="업로드된 이미지"
              $small={small}
            />
            {edit ? (
              <S.Overlay $small={small}>
                <EditIcon />
              </S.Overlay>
            ) : (
              ''
            )}
          </>
        ) : (
          <S.AddIcon onClick={handleClick} $small={small} />
        )}
        <S.Input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={onChangeImage}
          ref={fileInputRef}
          $small={small}
        />
        <S.Button onClick={handleClick} $small={small}>
          파일 선택
        </S.Button>
      </S.Label>
    </>
  );
};

export default ImgFileUpload;
