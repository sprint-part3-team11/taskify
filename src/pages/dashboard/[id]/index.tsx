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
import ArrowLeft from '@/public/icon/arrowLeft.svg';
import ArrowRight from '@/public/icon/arrowRight.svg';

const S = {
  DashBoardWrapper: styled.div`
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;

    &::-webkit-scrollbar {
      display: none;
    }

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
      margin-top: 3rem;
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
      width: 100%;
      min-width: initial;
    }
  `,
  MoveToLeftButton1: styled.button`
    position: fixed;
    bottom: 4rem;
    left: 34rem;

    width: 4rem;
    height: 4rem;
    background-color: #f1effd;
    border-radius: 1rem;

    &:hover {
      background-color: ${({ theme }) => theme.color.main};
      transition: all ease-in-out 0.25s;
    }

    ${MEDIA_QUERIES.onTablet} {
      display: none;
    }
    ${MEDIA_QUERIES.onMobile} {
      display: none;
    }
  `,
  ArrowLeft: styled(ArrowLeft)`
    margin-right: -0.8rem;

    ${MEDIA_QUERIES.onTablet} {
      display: none;
    }
    ${MEDIA_QUERIES.onMobile} {
      display: none;
    }
  `,
  MoveToLeftButton2: styled.button`
    position: fixed;
    bottom: 4rem;
    left: 38.5rem;

    width: 4rem;
    height: 4rem;
    background-color: #f1effd;
    border-radius: 1rem;

    &:hover {
      background-color: ${({ theme }) => theme.color.main};
      transition: all ease-in-out 0.25s;
    }

    ${MEDIA_QUERIES.onTablet} {
      display: none;
    }
    ${MEDIA_QUERIES.onMobile} {
      display: none;
    }
  `,
  MoveToRightButton1: styled.button`
    position: fixed;
    bottom: 4rem;
    right: 4rem;

    width: 4rem;
    height: 4rem;
    background-color: #f1effd;
    border-radius: 1rem;

    &:hover {
      background-color: ${({ theme }) => theme.color.main};
      transition: all ease-in-out 0.25s;
    }

    ${MEDIA_QUERIES.onTablet} {
      display: none;
    }
    ${MEDIA_QUERIES.onMobile} {
      display: none;
    }
  `,
  ArrowRight: styled(ArrowRight)`
    margin-right: -0.8rem;

    ${MEDIA_QUERIES.onTablet} {
      display: none;
    }
    ${MEDIA_QUERIES.onMobile} {
      display: none;
    }
  `,
  MoveToRightButton2: styled.button`
    position: fixed;
    bottom: 4rem;
    right: 8.5rem;

    width: 4rem;
    height: 4rem;
    background-color: #f1effd;
    border-radius: 1rem;

    &:hover {
      background-color: ${({ theme }) => theme.color.main};
      transition: all ease-in-out 0.25s;
    }

    ${MEDIA_QUERIES.onTablet} {
      display: none;
    }
    ${MEDIA_QUERIES.onMobile} {
      display: none;
    }
  `,
};

export default function DashBoard() {
  const dashboardId = Number(useRouter().query.id);

  const { data: columns } = useColumnListQuery({ dashboardId });
  const { mutate: addColumnMutation } = useAddColumnMutation();

  const [isModalOpen, setModalOpen] = useState(false);
  const addColumnRef = useRef(null);
  const dashboardRef = useRef(null);
  const initialColumnsCount = useRef(columns);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleCreate = (columnName: string) => {
    addColumnMutation({ title: columnName, dashboardId });
  };

  useEffect(() => {
    if (columns?.length > initialColumnsCount.current) {
      if (addColumnRef.current) {
        addColumnRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      }
    }

    initialColumnsCount.current = columns?.length;
  }, [columns?.length]);

  const scrollToLeft1 = () => {
    if (dashboardRef.current) {
      dashboardRef.current.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    }
  };
  const scrollToLeft2 = () => {
    if (dashboardRef.current) {
      dashboardRef.current.scrollBy({
        left: -354,
        behavior: 'smooth',
      });
    }
  };

  const scrollToRight1 = () => {
    if (dashboardRef.current) {
      const maxScrollRight =
        dashboardRef.current.scrollWidth - dashboardRef.current.clientWidth;

      dashboardRef.current.scrollTo({
        left: maxScrollRight,
        behavior: 'smooth',
      });
    }
  };
  const scrollToRight2 = () => {
    if (dashboardRef.current) {
      dashboardRef.current.scrollBy({
        left: 354,
        behavior: 'smooth',
      });
    }
  };

  return (
    <PageLayout>
      <S.DashBoardWrapper ref={dashboardRef}>
        {columns?.map((column, index) => (
          <Column
            key={column.id}
            id={column.id}
            title={column.title}
            dashboardId={dashboardId}
            ref={index === columns?.length - 1 ? addColumnRef : null}
          />
        ))}

        <S.IconWrapper>
          <S.AddIconButton onClick={openModal}>
            새로운 컬럼 추가하기
          </S.AddIconButton>
        </S.IconWrapper>

        <S.MoveToLeftButton1 onClick={scrollToLeft1}>
          <S.ArrowLeft />
          <ArrowLeft />
        </S.MoveToLeftButton1>
        <S.MoveToLeftButton2 onClick={scrollToLeft2}>
          <ArrowLeft />
        </S.MoveToLeftButton2>
        <S.MoveToRightButton1 onClick={scrollToRight1}>
          <S.ArrowRight />
          <ArrowRight />
        </S.MoveToRightButton1>
        <S.MoveToRightButton2 onClick={scrollToRight2}>
          <ArrowRight />
        </S.MoveToRightButton2>

        <NewColumnsModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onCreate={handleCreate}
        />
      </S.DashBoardWrapper>
    </PageLayout>
  );
}
