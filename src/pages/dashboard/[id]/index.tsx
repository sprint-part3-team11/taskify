import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import AddIconButton from '@/components/common/button/AddIconButton';
import NewColumnsModal from '@/components/common/modal/NewColumnsModal';
import Column from '@/components/dashboard/column/Column';
import PageLayout from '@/components/template/PageLayout';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import columnsApi from '@/api/columns.api';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
`;

const S = {
  DashBoardWrapper: styled.div`
    display: flex;
    /* margin-top: 7rem; */
    /* margin-left: 30rem; */

    ${MEDIA_QUERIES.onTablet} {
      display: block;
    }
    ${MEDIA_QUERIES.onMobile} {
      display: block;
    }

    /* &::-webkit-scrollbar {
      position: fixed;
      top: 10px;
      right: 0;
      width: 10px;
    } */
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
  const [columnList, setColumnList] = useState([]);
  const initialColumnsCount = useRef(columnList.length);
  const [isModalOpen, setModalOpen] = useState(false);
  const scrollRef = useRef(null);

  const router = useRouter();
  const dashboardId = +router.query.id;

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleCreate = async (columnName: string) => {
    try {
      const response = await columnsApi.postCreateColumn({
        title: columnName,
        dashboardId,
      });

      const newColumn = response.data;
      setColumnList([...columnList, newColumn]);
      console.log(columnList);
      setModalOpen(false);
    } catch (error) {
      console.error('컬럼 생성 에러:', error);
    }
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
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await columnsApi.getColumnList('5941');
  //       console.log(response);
  //     } catch (error) {
  //       console.error('컬럼에러:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

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

  // api postCardImage 테스트 해보기
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await columnsApi.postCardImage({
  //         columnsId: '19985',
  //         imageUrl:
  //           'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/taskify/task_image/4-11_19985_1713944400291.jpeg',
  //       });
  //       console.log(response);
  //     } catch (error) {
  //       console.error('컬럼에러:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    if (!router.isReady || !dashboardId) return;

    const fetchData = async () => {
      try {
        const response = await columnsApi.getColumnList(dashboardId);
        setColumnList(response.data.data);
        // console.log(response.data.data);
      } catch (error) {
        console.error('컬럼에러:', error.message);
        setColumnList([]);
      }
    };
    fetchData();
  }, [router.isReady, router.query.id]);

  // {id: 19980, title: 'To do', teamId: '4-11', dashboardId: 5941, createdAt: '2024-04-16T16:26:10.172Z', …}
  // {id: 19981, title: 'On progress', teamId: '4-11', dashboardId: 5941, createdAt: '2024-04-16T16:26:10.172Z', …}
  // {id: 19982, title: 'Done', teamId: '4-11', dashboardId: 5941, createdAt: '2024-04-16T16:26:10.172Z', …}
  // {id: 19985, title: '아침', teamId: '4-11', dashboardId: 5941, createdAt: '2024-04-17T02:04:51.592Z', …}
  // {id: 19986, title: '점심', teamId: '4-11', dashboardId: 5941, createdAt: '2024-04-17T02:05:02.991Z', …}
  // {id: 22152, title: '민준', teamId: '4-11', dashboardId: 5941, createdAt: '2024-04-24T12:52:57.690Z', …}
  // {id: 22406, title: '민준', teamId: '4-11', dashboardId: 5941, createdAt: '2024-04-24T15:47:52.041Z', …}

  return (
    <PageLayout>
      <S.DashBoardWrapper>
        {columnList.map((column, index) => (
          <Column
            key={column.id}
            title={column.title}
            ref={index === columnList.length - 1 ? scrollRef : null}
          />
        ))}
        {/* <Column />
        <Column />
        <Column />
        <Column /> */}
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
