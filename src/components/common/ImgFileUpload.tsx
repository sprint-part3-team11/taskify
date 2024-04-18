import React, { useRef, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import styled from 'styled-components';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import AddIcon from '@/public/icon/addImgIcon.svg';
import EditIcon from '@/public/icon/editPencilIcon.svg';

const imgUrlState = atom<File | null>({
  key: 'imgUrlState',
  default: null,
});

const S = {
  Label: styled.label<{ $small: boolean }>`
    position: relative;
    display: inline-block;

    width: ${(props) => (props.$small ? '4.75rem' : '15.37rem')};
    height: ${(props) => (props.$small ? '4.75rem' : '15.37rem')};

    ${MEDIA_QUERIES.onMobile} {
      width: ${(props) => (props.$small ? '3.8rem' : '6.25rem')};
      height: ${(props) => (props.$small ? '3.8rem' : '6.25rem')};
    }
  `,
  Image: styled.img<{ $small: boolean }>`
    display: flex;

    width: ${(props) => (props.$small ? '4.75rem' : '15.37rem')};
    height: ${(props) => (props.$small ? '4.75rem' : '15.375rem')};
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 0.375rem;

    cursor: pointer;

    ${MEDIA_QUERIES.onMobile} {
      width: ${(props) => (props.$small ? '4.5rem' : '8.25rem')};
      height: ${(props) => (props.$small ? '4.5rem' : '8.25rem')};
    }
  `,
  Button: styled.button<{ $small: boolean }>`
    position: absolute;
    top: 0;
    left: 0;

    width: ${(props) => (props.$small ? '100%' : '15.37rem')};
    height: ${(props) => (props.$small ? '100%' : '15.37rem')};

    cursor: pointer;
    opacity: 0;

    ${MEDIA_QUERIES.onMobile} {
      width: ${(props) => (props.$small ? '4.5rem' : '8.25rem')};
      height: ${(props) => (props.$small ? '4.5rem' : '8.25rem')};
    }
  `,
  AddIcon: styled(AddIcon)`
    path {
      width: 1px;
      height: 1px;
    }
    display: flex;
    flex-shrink: 0;

    width: ${(props) => (props.$small ? 'auto' : '15.37rem')};
    height: ${(props) => (props.$small ? 'auto' : '15.37rem')};
    padding: 1.5rem;
    justify-content: center;
    align-items: center;

    background: #f5f5f5;

    border-radius: 0.375rem;

    cursor: pointer;

    ${MEDIA_QUERIES.onMobile} {
      width: ${(props) => (props.$small ? '4.5rem' : '8.25rem')};
      height: ${(props) => (props.$small ? '4.5rem' : '8.25rem')};
    }
  `,
  Overlay: styled.div<{ $small: boolean }>`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;

    width: ${(props) => (props.$small ? '100%' : '15.37rem')};
    height: ${(props) => (props.$small ? '100%' : '15.37')};
    justify-content: center;
    align-items: center;
    border-radius: 0.375rem;

    background: rgba(0, 0, 0, 0.6);

    ${MEDIA_QUERIES.onMobile} {
      width: ${(props) => (props.$small ? '4.5rem' : '8.25rem')};
      height: ${(props) => (props.$small ? '4.5rem' : '8.25rem')};
    }
  `,
  Input: styled.input<{ $small: boolean }>`
    display: none;
  `,
};

interface ImgFileUploadProps {
  edit: boolean;
  small: boolean;
}

function ImgFileUpload({ edit, small }: ImgFileUploadProps): JSX.Element {
  const [uploadedImage, setUploadedImage] = useRecoilState<File | null>(
    imgUrlState,
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick: () => void = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void = (
    e,
  ) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      setUploadedImage(file);
    }
  };

  return (
    <S.Label htmlFor="fileInput" $small={small}>
      {uploadedImage ? (
        <>
          <S.Image
            src={URL.createObjectURL(uploadedImage)}
            alt="업로드된 이미지"
            $small={small}
          />
          {edit && (
            <S.Overlay $small={small}>
              <EditIcon />
            </S.Overlay>
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
  );
}

export { ImgFileUpload, imgUrlState };
