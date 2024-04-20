import Link from 'next/link';
import { styled } from 'styled-components';
import CircleColor from '@/components/common/CircleColor';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import RightArrow from '@/public/icon/rightArraowIcon.svg';

const S = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: ${({ theme }) => theme.border.lightGray};
    border-radius: 0.8rem;

    padding: 2.5rem 2rem;
    background-color: ${({ theme }) => theme.color.white};

    font-size: 1.6rem;
    font-weight: 600;

    ${MEDIA_QUERIES.onMobile} {
      padding: 2rem;
      font-size: 1.4rem;
    }
  `,

  BoardTitle: styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
  `,
};

function DashBoardItem() {
  return (
    <>
      <S.Container>
        <S.BoardTitle>
          <CircleColor color="pink" />
          <div>코드잇</div>
        </S.BoardTitle>
        <Link href="/dashboard">
          <RightArrow />
        </Link>
      </S.Container>
    </>
  );
}

export default DashBoardItem;
