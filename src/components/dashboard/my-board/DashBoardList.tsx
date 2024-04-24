import Link from 'next/link';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import CircleColor from '@/components/common/CircleColor';
import AddIconButton from '@/components/common/button/AddIconButton';
import useDashboardListQuery from '@/hooks/query/dashboards/useDashboardListQuery';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import dashboardsApi from '@/api/dashboards.api';
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
};

function DashBoardList() {
  const { data } = useDashboardListQuery({
    navigationMethod: 'pagination',
    page: 1,
    size: 5,
  });
  const dashboards = data?.dashboards;

  return (
    <GridTemplate>
      <AddIconButton style={{ height: '7rem' }}>새로운 대시보드</AddIconButton>
      {dashboards?.map((board) => (
        <S.Container key={board.id}>
          <S.BoardTitle>
            <CircleColor color={board.color} />
            <div>
              {board.title}
              {board.createdByMe && <CrownIcon className="crown" />}
            </div>
          </S.BoardTitle>
          <Link href={`/dashboard/${board.id}`}>
            <RightArrow />
          </Link>
        </S.Container>
      ))}
    </GridTemplate>
  );
}

export default DashBoardList;
