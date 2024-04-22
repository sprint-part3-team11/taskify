import Link from 'next/link';
import { styled } from 'styled-components';
import CircleColor from '@/components/common/CircleColor';
import AddIconButton from '@/components/common/button/AddIconButton';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import CrownIcon from '@/public/icon/crownIcon.svg';
import RightArrow from '@/public/icon/rightArraowIcon.svg';
import { GridTemplate } from '@/styles/commonStyle';

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

const dashboards = [
  {
    id: 1,
    title: '이게맞냐구',
    color: '#76A5EA',
    createdAt: '2024-04-21T14:07:17.165Z',
    updatedAt: '2024-04-21T14:07:17.165Z',
    createdByMe: true,
    userId: 1,
  },
  {
    id: 2,
    title: '나는 괜찮아',
    color: '#E876EA',
    createdAt: '2024-04-21T14:07:17.165Z',
    updatedAt: '2024-04-21T14:07:17.165Z',
    createdByMe: false,
    userId: 1,
  },
  {
    id: 3,
    title: '이게맞냐구',
    color: '#76A5EA',
    createdAt: '2024-04-21T14:07:17.165Z',
    updatedAt: '2024-04-21T14:07:17.165Z',
    createdByMe: true,
    userId: 1,
  },
  {
    id: 4,
    title: '나는 괜찮아',
    color: '#E876EA',
    createdAt: '2024-04-21T14:07:17.165Z',
    updatedAt: '2024-04-21T14:07:17.165Z',
    createdByMe: false,
    userId: 1,
  },
  {
    id: 5,
    title: '이게맞냐구',
    color: '#76A5EA',
    createdAt: '2024-04-21T14:07:17.165Z',
    updatedAt: '2024-04-21T14:07:17.165Z',
    createdByMe: true,
    userId: 1,
  },
];

function DashBoardList() {
  return (
    <GridTemplate>
      <AddIconButton style={{ height: '7rem' }}>새로운 대시보드</AddIconButton>
      {dashboards.map((board) => (
        <S.Container>
          <S.BoardTitle>
            <CircleColor color={board.color} />
            <div>
              {board.title}
              {board.createdByMe && <CrownIcon className="crown" />}
            </div>
          </S.BoardTitle>
          <Link href={`/my-dashboards/${board.id}`}>
            <RightArrow />
          </Link>
        </S.Container>
      ))}
    </GridTemplate>
  );
}

export default DashBoardList;
