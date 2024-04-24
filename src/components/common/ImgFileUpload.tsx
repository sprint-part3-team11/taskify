import React, { useRef } from 'react';
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
    display: block;

    width: ${({ $small }) => ($small ? '7.6rem' : '18.2rem')};
    height: ${({ $small }) => ($small ? '7.6rem' : '18.2rem')};

    ${MEDIA_QUERIES.onMobile} {
      width: ${({ $small }) => ($small ? '5.8rem' : '10rem')};
      height: ${({ $small }) => ($small ? '5.8rem' : '10rem')};
    }
  `,
  Image: styled.img<{ $small: boolean }>`
    display: flex;

    width: ${({ $small }) => ($small ? '7.6rem' : '18.2rem')};
    height: ${({ $small }) => ($small ? '7.6rem' : '18.2rem')};
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 0.375rem;

    cursor: pointer;

    ${MEDIA_QUERIES.onMobile} {
      width: ${({ $small }) => ($small ? '5.8rem' : '10rem')};
      height: ${({ $small }) => ($small ? '5.8rem' : '10rem')};
    }
  `,
  Button: styled.button<{ $small: boolean }>`
    position: absolute;
    top: 0;
    left: 0;

    width: ${({ $small }) => ($small ? '7.6rem' : '18.2rem')};
    height: ${({ $small }) => ($small ? '7.6rem' : '18.2rem')};

    cursor: pointer;
    opacity: 0;

    ${MEDIA_QUERIES.onMobile} {
      width: ${({ $small }) => ($small ? '5.8rem' : '10rem')};
      height: ${({ $small }) => ($small ? '5.8rem' : '10rem')};
    }
  `,
  AddIcon: styled.div<{ $small: boolean }>`
    display: flex;
    flex-shrink: 0;

    width: ${({ $small }) => ($small ? '7.6rem' : '18.2rem')};
    height: ${({ $small }) => ($small ? '7.6rem' : '18.2rem')};
    padding: 1.5rem;
    justify-content: center;
    align-items: center;

    background: #f5f5f5;

    border-radius: 0.375rem;

    cursor: pointer;

    ${MEDIA_QUERIES.onMobile} {
      width: ${({ $small }) => ($small ? '5.8rem' : '10rem')};
      height: ${({ $small }) => ($small ? '5.8rem' : '10rem')};
    }
  `,
  Overlay: styled.div<{ $small: boolean }>`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;

    width: ${({ $small }) => ($small ? '100%' : '18.2rem')};
    height: ${({ $small }) => ($small ? '100%' : '18.2rem')};
    justify-content: center;
    align-items: center;
    border-radius: 0.375rem;

    background: rgba(0, 0, 0, 0.6);

    ${MEDIA_QUERIES.onMobile} {
      width: ${({ $small }) => ($small ? '5.8rem' : '10rem')};
      height: ${({ $small }) => ($small ? '5.8rem' : '10rem')};
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
  const [uploadedImage, setUploadedImage] = useRecoilState(imgUrlState);
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
        <S.AddIcon onClick={handleClick} $small={small}>
          <AddIcon />
        </S.AddIcon>
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
