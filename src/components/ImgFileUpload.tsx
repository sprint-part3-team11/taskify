import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const S = {
  Label: styled.label`
    position: relative;
    display: inline-block;
  `,
  ImageWrapper: styled.div`
    position: relative;
    display: inline-block;
    border-radius: 0.375rem;
    &:hover .overlay {
      opacity: 0.5;
    }
    &:hover .editIcon {
      opacity: 1;
    }
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
  Overlay: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 0.375rem;
    z-index: 1;
  `,
  EditIcon: styled.svg`
    position: absolute;
    top: calc(50% - 0.875rem);
    left: calc(50% - 0.875rem);
    width: 1.75rem;
    height: 1.75rem;
    flex-shrink: 0;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  `,
  Button: styled.button`
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    cursor: pointer;
    opacity: 0;
  `,
  AddIcon: styled.img`
    width: 1.75rem;
    height: 1.75rem;
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
};

const ImgFileUpload = () => {
  const [uploadedImage, setUploadedImage] = useState<
    string | ArrayBuffer | null
  >(null);
  const [hover, setHover] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // 파일 선택(input) 창 열기
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
    <S.Label htmlFor="fileInput">
      <S.ImageWrapper
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {uploadedImage && (
          <>
            <S.Overlay />
            {hover && (
              <S.EditIcon
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M5.50481 25.6249C5.18471 25.6249 4.91639 25.5167 4.69984 25.3001C4.48328 25.0836 4.375 24.8152 4.375 24.4951V22.3293C4.375 22.0245 4.4335 21.7339 4.5505 21.4577C4.66748 21.1814 4.82853 20.9407 5.03366 20.7356L20.863 4.91347C21.052 4.74178 21.2607 4.60911 21.4891 4.51547C21.7175 4.42182 21.957 4.375 22.2077 4.375C22.4583 4.375 22.701 4.41948 22.936 4.50844C23.1709 4.59738 23.3789 4.73879 23.56 4.93269L25.0865 6.47834C25.2804 6.65943 25.4186 6.8678 25.5011 7.10347C25.5837 7.33912 25.6249 7.57476 25.6249 7.81041C25.6249 8.06176 25.582 8.30164 25.4962 8.53003C25.4103 8.75845 25.2738 8.96717 25.0865 9.15619L9.26434 24.9663C9.05922 25.1714 8.81853 25.3325 8.54228 25.4494C8.26601 25.5664 7.97546 25.6249 7.67062 25.6249H5.50481ZM21.9399 9.61775L23.75 7.81966L22.1803 6.24997L20.3822 8.06006L21.9399 9.61775Z"
                  fill="white"
                />
              </S.EditIcon>
            )}
          </>
        )}
        {uploadedImage ? (
          <S.Image src={uploadedImage?.toString()} alt="업로드된 이미지" />
        ) : (
          <S.AddIcon
            as="svg"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            onClick={handleClick}
          >
            <path
              d="M12.6724 15.3266H6.92282C6.5504 15.3266 6.23611 15.1985 5.97994 14.9424C5.72378 14.6862 5.5957 14.3719 5.5957 13.9995C5.5957 13.6271 5.72378 13.3128 5.97994 13.0567C6.23611 12.8005 6.5504 12.6724 6.92282 12.6724H12.6724V6.92282C12.6724 6.5504 12.8005 6.23611 13.0567 5.97995C13.3128 5.72378 13.6271 5.5957 13.9995 5.5957C14.3719 5.5957 14.6862 5.72378 14.9424 5.97995C15.1985 6.23611 15.3266 6.5504 15.3266 6.92282V12.6724H21.0762C21.4487 12.6724 21.7629 12.8005 22.0191 13.0567C22.2753 13.3128 22.4033 13.6271 22.4033 13.9995C22.4033 14.3719 22.2753 14.6862 22.0191 14.9424C21.7629 15.1985 21.4487 15.3266 21.0762 15.3266H15.3266V21.0762C15.3266 21.4487 15.1985 21.7629 14.9424 22.0191C14.6862 22.2753 14.3719 22.4033 13.9995 22.4033C13.6271 22.4033 13.3128 22.2753 13.0567 22.0191C12.8005 21.7629 12.6724 21.4487 12.6724 21.0762V15.3266Z"
              fill="#5534DA"
            />
          </S.AddIcon>
        )}
      </S.ImageWrapper>
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
  );
};

export default ImgFileUpload;
