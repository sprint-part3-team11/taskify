import Image from 'next/image';
import styled from 'styled-components';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import landingTodo from '@/public/image/landinTodo.png';
import landingCard from '@/public/image/landingCard.png';

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 5.9rem;
    margin-bottom: 9rem;
  `,

  Point1Wrapper: styled.article`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 120rem;
    height: 60rem;
    padding-top: 6rem;
    justify-content: space-between;
    background: #171717;
    border-radius: 0.8rem;

    ${MEDIA_QUERIES.onTablet} {
      flex-direction: column;
      width: 66.4rem;
      height: 97.2rem;
      padding-top: 6.3rem;
      padding-left: 6rem;
    }
    ${MEDIA_QUERIES.onMobile} {
      flex-direction: column;
      width: 34.3rem;
      height: 68.6rem;
    }
  `,
  Point1DescriptionWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 6.1rem;
  `,

  Point1ImagePositioner: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  `,

  Point1ImageWrapper: styled.div`
    position: relative;
    width: 59.4rem;
    height: 49.74rem;
    border-radius: 0.8rem 0rem;
    overflow: hidden;

    ${MEDIA_QUERIES.onTablet} {
      width: 51.94rem;
      height: 43.5rem;
    }

    ${MEDIA_QUERIES.onMobile} {
      width: 29.6rem;
      height: 24.8rem;
    }
  `,

  Point2Wrapper: styled.article`
    position: relative;
    display: flex;
    width: 120rem;
    height: 60rem;
    padding-top: 6rem;
    flex-direction: row-reverse;
    justify-content: flex-end;
    border-radius: 0.8rem;
    background: #171717;

    ${MEDIA_QUERIES.onTablet} {
      flex-direction: column;
      justify-content: space-between;
      width: 66.4rem;
      height: 97.2rem;
      padding-top: 6.3rem;
    }

    ${MEDIA_QUERIES.onMobile} {
      flex-direction: column;
      justify-content: space-between;
      width: 34.3rem;
      height: 68.6rem;
    }
  `,

  Point2DescriptionWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    gap: 6.1rem;

    ${MEDIA_QUERIES.onTablet} {
      padding-left: 6rem;
    }
  `,

  Point2ImagePositioner: styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
  `,

  Point2ImageWrapper: styled.div`
    position: relative;
    border-radius: 0.8rem 0.8rem 0 0;
    overflow: hidden;
    width: 43.6rem;
    height: 50.2rem;
    margin-left: 10.8rem;
    margin-right: 10rem;

    ${MEDIA_QUERIES.onTablet} {
      width: 36rem;
      height: 41.5rem;
      margin-left: 0.25rem;
      margin-right: 0;
    }

    ${MEDIA_QUERIES.onMobile} {
      width: 21.7rem;
      height: 25rem;
      margin-left: 0;
      margin-right: 0;
    }
  `,

  PointLabel: styled.h2`
    color: ${({ theme }) => theme.color.gray};
    text-align: start;
    padding-left: 6rem;
    font-size: 1.8rem;
    font-weight: 500;

    ${MEDIA_QUERIES.onTablet} {
      padding-left: 0;
      text-align: start;
      font-size: 2.2rem;
    }
    ${MEDIA_QUERIES.onMobile} {
      padding-left: 0;
      text-align: center;
    }
  `,

  PointDescription: styled.p`
    padding-left: 6rem;
    color: ${({ theme }) => theme.color.white};
    text-align: start;
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 6.4rem;

    ${MEDIA_QUERIES.onTablet} {
      text-align: start;
      font-size: 4.8rem;
      padding-left: 0;
    }
    ${MEDIA_QUERIES.onMobile} {
      padding-left: 0;
      text-align: center;
    }
  `,
};

export default function LandingMiddle() {
  return (
    <S.Container>
      <S.Point1Wrapper>
        <S.Point1DescriptionWrapper>
          <S.PointLabel>Point 1</S.PointLabel>
          <S.PointDescription>
            일의 우선순위를
            <br /> 관리하세요
          </S.PointDescription>
        </S.Point1DescriptionWrapper>
        <S.Point1ImagePositioner>
          <S.Point1ImageWrapper>
            <Image src={landingCard} alt="우선순위 기능 소개 이미지" fill />
          </S.Point1ImageWrapper>
        </S.Point1ImagePositioner>
      </S.Point1Wrapper>

      <S.Point2Wrapper>
        <S.Point2DescriptionWrapper>
          <S.PointLabel>Point 2</S.PointLabel>
          <S.PointDescription>
            해야 할 일을
            <br /> 등록하세요
          </S.PointDescription>
        </S.Point2DescriptionWrapper>
        <S.Point2ImagePositioner>
          <S.Point2ImageWrapper>
            <Image src={landingTodo} alt="우선순위 기능 소개 이미지" fill />
          </S.Point2ImageWrapper>
        </S.Point2ImagePositioner>
      </S.Point2Wrapper>
    </S.Container>
  );
}
