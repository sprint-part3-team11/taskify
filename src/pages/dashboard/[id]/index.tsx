import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import AddIconButton from '@/components/common/button/AddIconButton';
import NewColumnsModal from '@/components/common/modal/NewColumnsModal';
import Column from '@/components/dashboard/column/Column';
import PageLayout from '@/components/template/PageLayout';
import useAddColumnMutation from '@/hooks/query/columns/useAddColumnMutation';
import useColumnListQuery from '@/hooks/query/columns/useColumnListQuery';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

const S = {
  DashBoardWrapper: styled.div`
    display: flex;

    ${MEDIA_QUERIES.onTablet} {
      display: block;
    }
    ${MEDIA_QUERIES.onMobile} {
      display: block;
    }
  `,
  IconWrapper: styled.div`
    margin: 6.8rem 0rem 0rem 2rem;
    padding-right: 2rem;

    ${MEDIA_QUERIES.onTablet} {
      padding: 2rem;
      margin: 0;
    }
    ${MEDIA_QUERIES.onMobile} {
    }
  `,
  AddIconButton: styled(AddIconButton)`
    min-width: 35rem;
    height: 7rem;

    font-size: 1.8rem;
    font-weight: 700;

    ${MEDIA_QUERIES.onTablet} {
      width: 100%;
    }
    ${MEDIA_QUERIES.onMobile} {
    }
  `,
};

export default function DashBoard() {
  const [isModalOpen, setModalOpen] = useState(false);
  const scrollRef = useRef(null);

  const router = useRouter();
  const dashboardId = Number(router.query.id);

  const { data: columns } = useColumnListQuery({ dashboardId });
  const { mutate: addColumnMutation } = useAddColumnMutation();

  const initialColumnsCount = useRef(columns);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // useMutation 수정하여 적용
  const handleCreate = (columnName: string) => {
    addColumnMutation({ title: columnName, dashboardId });
  };

  useEffect(() => {
    if (columns?.length > initialColumnsCount.current) {
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      }
    }

    initialColumnsCount.current = columns?.length;
  }, [columns?.length]);

  return (
    <PageLayout>
      <S.DashBoardWrapper>
        {columns?.map((column, index) => (
          <Column
            key={column.id + 1}
            id={column.id}
            title={column.title}
            dashboardId={dashboardId}
            ref={index === columns?.length - 1 ? scrollRef : null}
          />
        ))}

        <S.IconWrapper>
          <S.AddIconButton onClick={openModal}>
            새로운 컬럼 추가하기
          </S.AddIconButton>
        </S.IconWrapper>
        <NewColumnsModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onCreate={handleCreate}
        />
      </S.DashBoardWrapper>
    </PageLayout>
  );
}
