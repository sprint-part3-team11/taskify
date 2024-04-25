import { useRouter } from 'next/router';
import { useState } from 'react';
import { styled } from 'styled-components';
import CircleColor from '@/components/common/CircleColor';
import AddIconButton from '@/components/common/button/AddIconButton';
import useDashboardListQuery from '@/hooks/query/dashboards/useDashboardListQuery';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import ArrowLeft from '@/public/icon/arrowLeft.svg';
import ArrowRight from '@/public/icon/arrowRight.svg';
import CrownIcon from '@/public/icon/crownIcon.svg';
import RightArrow from '@/public/icon/rightArraowIcon.svg';
import { GridTemplate } from '@/styles/CommonStyle';

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
    cursor: pointer;

    ${MEDIA_QUERIES.onMobile} {
      padding: 2rem;
      font-size: 1.4rem;
    }
  `,

  BoardTitle: styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;

    .crown {
      margin-left: 0.6rem;
    }
  `,

  PageNavigationBox: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.6rem;
    margin-top: 1rem;

    ${MEDIA_QUERIES.onMobile} {
      gap: 1.2rem;
    }
  `,

  PageCount: styled.div`
    font-size: 1.4rem;

    ${MEDIA_QUERIES.onMobile} {
      font-size: 1.2rem;
    }
  `,

  Buttons: styled.div`
    display: flex;
  `,

  ArrowButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1.2rem;
    border: ${({ theme }) => theme.border.lightGray};
    background-color: ${({ theme }) => theme.color.white};
  `,
};

function DashBoardList() {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const { data } = useDashboardListQuery({
    navigationMethod: 'pagination',
    page: page,
  });

  const dashboards = data?.dashboards;
  const totalPages = Math.ceil(data?.totalCount / 5);

  const handlePrevBtnClick = () => {
    setPage((prev) => prev - 1);
  };
  const handleNextBtnClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <GridTemplate>
        <AddIconButton style={{ height: '7rem' }}>
          새로운 대시보드
        </AddIconButton>
        {dashboards?.map((board) => (
          <S.Container
            key={board.id}
            onClick={() => router.push(`/dashboard/${board.id}`)}
          >
            <S.BoardTitle>
              <CircleColor color={board.color} />
              <div>
                {board.title}
                {board.createdByMe && <CrownIcon className="crown" />}
              </div>
            </S.BoardTitle>

            <RightArrow />
          </S.Container>
        ))}
      </GridTemplate>
      <S.PageNavigationBox>
        <S.PageCount>
          {totalPages} 페이지중 {page}
        </S.PageCount>
        <S.Buttons>
          <S.ArrowButton disabled={page <= 1} onClick={handlePrevBtnClick}>
            <ArrowLeft />
          </S.ArrowButton>
          <S.ArrowButton
            disabled={page >= totalPages}
            onClick={handleNextBtnClick}
          >
            <ArrowRight />
          </S.ArrowButton>
        </S.Buttons>
      </S.PageNavigationBox>
    </>
  );
}

export default DashBoardList;
