import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import AddIconButton from '@/components/common/button/AddIconButton';
import NewColumnsModal from '@/components/common/modal/NewColumnsModal';
import Column from '@/components/dashboard/column/Column';
import PageLayout from '@/components/template/PageLayout';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import columnsApi from '@/api/columns.api';

// 테스트용 배열
const dashboards = [
  { id: '1', color: '#FFA500', name: '대시보드 1', createdByMe: true },
  { id: '2', color: '#FF2660', name: '대시보드 2', createdByMe: true },
  { id: '3', color: '#7AC555', name: '대시보드 3', createdByMe: false },
];

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
  const [columnList, setColumnList] = useState([
    { id: 1, name: 'To Do' },
    { id: 2, name: 'On Progress' },
    { id: 3, name: 'Done' },
  ]);
  const initialColumnsCount = useRef(columnList.length);
  const [isModalOpen, setModalOpen] = useState(false);
  const scrollRef = useRef(null);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleCreate = (columnName: string) => {
    const newColumn = {
      id: columnList.length + 1,
      name: columnName,
    };
    setColumnList([...columnList, newColumn]);
    setModalOpen(false);
  };

  useEffect(() => {
    if (columnList.length > initialColumnsCount.current) {
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      }
    }

    initialColumnsCount.current = columnList.length;
  }, [columnList.length]);

  // api get 테스트 해보기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await columnsApi.getColumnList('5941');
        console.log(response);
      } catch (error) {
        console.error('컬럼에러:', error);
      }
    };
    fetchData();
  }, []);

  // api post 테스트 해보기
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await columnsApi.postCreateColumn({
  //         title: '민준',
  //         dashboardId: 5941,
  //       });
  //       console.log(response);
  //     } catch (error) {
  //       console.error('컬럼에러:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // api put 테스트 해보기
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await columnsApi.putEditColumn({
  //         title: '민준',
  //         columnsId: '19987',
  //       });
  //       console.log(response);
  //     } catch (error) {
  //       console.error('컬럼에러:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // api delete 테스트 해보기
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await columnsApi.deleteColumn({
  //         title: '민준',
  //         columnsId: '22151',
  //       });
  //       console.log(response);
  //     } catch (error) {
  //       console.error('컬럼에러:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <PageLayout>
      <S.DashBoardWrapper>
        {columnList.map((column, index) => (
          <Column
            key={column.id}
            name={column.name}
            ref={index === columnList.length - 1 ? scrollRef : null}
          />
        ))}
        <S.IconWrapper>
          <S.AddIconButton onClick={openModal}>새로운 대시보드</S.AddIconButton>
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
