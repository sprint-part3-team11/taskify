import Image from 'next/image';
import styled from 'styled-components';
import { LANDING_SETTING_ITEMS } from '@/constants/LANDING_SETTING_ITEMS';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  Title: styled.h3`
    margin-bottom: 4.2rem;
    color: ${({ theme }) => theme.color.white};
    text-align: center;
    font-size: 2.2rem;
    font-weight: 700;

    ${MEDIA_QUERIES.onTablet} {
      margin-bottom: 3.6rem;
      font-size: 2.8rem;
    }
  `,

  SettingBox: styled.div`
    display: flex;
    flex-direction: row;
    gap: 3.3rem;

    ${MEDIA_QUERIES.onTablet} {
      gap: 4.8rem;
      flex-direction: column;
    }

    ${MEDIA_QUERIES.onMobile} {
      flex-direction: column;
      gap: 4rem;
    }
  `,

  SettingWrapper: styled.article`
    width: 34.3rem;
    border-radius: 0.8rem;
    overflow: hidden;

    ${MEDIA_QUERIES.onTablet} {
      width: 37.8rem;
    }
  `,

  SettingImageWrapper: styled.div`
    width: 100%;
    height: 23.5rem;
    padding: 0rem 4.1rem;
    background-color: #4b4b4b;

    ${MEDIA_QUERIES.onTablet} {
      height: 26rem;
      padding: 0rem 3.9rem;
    }
  `,

  SettingImage: styled.div`
    width: 100%;
    height: 100%;
    position: relative;
  `,

  SettingDescriptionWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    padding: 2.7rem 3.2rem;
    background: #171717;

    ${MEDIA_QUERIES.onTablet} {
      padding-top: 3.3rem;
      height: 12.4rem;
    }
  `,

  SettingTitle: styled.h4`
    color: ${({ theme }) => theme.color.white};
    font-size: 1.8rem;
    font-weight: 700;

    ${MEDIA_QUERIES.onTablet} {
      font-size: 1.8rem;
    }
  `,

  SettingDescription: styled.p`
    color: ${({ theme }) => theme.color.gray};
    font-size: 1.6rem;
    font-weight: 500;
  `,
};

export default function LandingSetting() {
  return (
    <S.Container>
      <S.Title>생산성을 높이는 다양한 설정 ⚡</S.Title>
      <S.SettingBox>
        {LANDING_SETTING_ITEMS.map((item) => (
          <S.SettingWrapper key={item.id}>
            <S.SettingImageWrapper>
              <S.SettingImage>
                <Image
                  src={item.imageSource}
                  alt="설정 이미지"
                  layout="fill"
                  objectFit="contain"
                />
              </S.SettingImage>
            </S.SettingImageWrapper>
            <S.SettingDescriptionWrapper>
              <S.SettingTitle>{item.title}</S.SettingTitle>
              <S.SettingDescription>{item.description}</S.SettingDescription>
            </S.SettingDescriptionWrapper>
          </S.SettingWrapper>
        ))}
      </S.SettingBox>
    </S.Container>
  );
}
