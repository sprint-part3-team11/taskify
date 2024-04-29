import styled from 'styled-components';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import { Shimmer } from '@/styles/CommonStyle';

const S = {
  CardContainer: styled.button`
    width: 31.5rem;
    padding: 2rem;
    border-radius: 0.6rem;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: rgba(0, 0, 0, 0.08) 0 1.2rem 2rem 0;
    ${MEDIA_QUERIES.onTablet} {
      display: flex;
      width: 100%;
    }
    ${MEDIA_QUERIES.onMobile} {
      width: 100%;
      padding: 1.2rem;
    }
  `,
  ImageWrapper: styled.div`
    position: relative;
    margin-bottom: 1.2rem;
    border-radius: 0.8rem;

    width: 27.4rem;
    height: 16rem;

    background-color: ${({ theme }) => theme.color.skeleton};
    overflow: hidden;
    border-radius: 0.4rem;
    ${MEDIA_QUERIES.onTablet} {
      margin: 0rem 2rem 0rem 0rem;

      width: 9.1rem;
      height: 5.3rem;

      border-radius: 0.4rem;
    }
    ${MEDIA_QUERIES.onMobile} {
      margin-bottom: 1rem;

      width: 100%;
      height: 15.1rem;

      border-radius: 0.6rem;
    }
  `,
  Title: styled.div`
    display: flex;

    margin-bottom: 1rem;

    height: 1.8rem;
    width: 15rem;

    background-color: ${({ theme }) => theme.color.skeleton};
    overflow: hidden;
    border-radius: 0.4rem;

    ${MEDIA_QUERIES.onMobile} {
      height: 1.6rem;
    }
  `,
  CardContentWrapper: styled.div`
    width: 100%;
  `,
  CardContent: styled.div`
    ${MEDIA_QUERIES.onTablet} {
      display: flex;
      justify-content: space-around;
    }
  `,
  HashTagContainer: styled.div`
    display: flex;
    gap: 0.6rem;
    margin-bottom: 1rem;
    white-space: nowrap;
    ${MEDIA_QUERIES.onTablet} {
      margin: 0.3rem 1.6rem 0rem 0rem;
    }
    ${MEDIA_QUERIES.onMobile} {
      margin-bottom: 0.6rem;
      gap: 0.4rem;
    }

    .tag {
      background-color: ${({ theme }) => theme.color.skeleton};
      overflow: hidden;
      border-radius: 0.8rem;

      width: 3rem;
      height: 2rem;
    }
  `,

  DateAndProfileWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${MEDIA_QUERIES.onTablet} {
      width: 100%;
    }
  `,
  CalendarIconWrapper: styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.color.skeleton};
    overflow: hidden;
    border-radius: 0.4rem;
  `,
  Date: styled.div`
    margin-left: 0.6rem;
    padding-top: 0.1rem;

    height: 1.7rem;
    width: 10rem;

    ${MEDIA_QUERIES.onMobile} {
      height: 1.4rem;
      margin: 0rem 0rem;
      padding-top: 0.3rem;
    }
  `,
  AvatarImage: styled.div`
    width: 2.4rem;
    height: 2.4rem;

    background-color: ${({ theme }) => theme.color.skeleton};
    overflow: hidden;
    border-radius: 50%;

    ${MEDIA_QUERIES.onMobile} {
      width: 2.2rem;
      height: 2.2rem;
    }
  `,
};

function CardSkeleton() {
  return (
    <S.CardContainer>
      <S.ImageWrapper>
        <Shimmer />
      </S.ImageWrapper>
      <S.CardContentWrapper>
        <S.Title>
          <Shimmer />
        </S.Title>
        <S.CardContent>
          <S.HashTagContainer>
            <div className="tag">
              <Shimmer />
            </div>
            <div className="tag">
              <Shimmer />
            </div>
          </S.HashTagContainer>
          <S.DateAndProfileWrapper>
            <S.CalendarIconWrapper>
              <S.Date>
                <Shimmer />
              </S.Date>
            </S.CalendarIconWrapper>
            <div>
              <S.AvatarImage>
                <Shimmer />
              </S.AvatarImage>
            </div>
          </S.DateAndProfileWrapper>
        </S.CardContent>
      </S.CardContentWrapper>
    </S.CardContainer>
  );
}

export default CardSkeleton;
