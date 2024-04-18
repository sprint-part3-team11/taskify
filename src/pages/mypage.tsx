import styled from 'styled-components';
import Sidebar from '@/components/common/SideBar';
import MypageHeader from '@/components/my-page/MypageHeader';

// 테스트용 배열
const dashboards = [
  { id: '1', color: '#FFA500', name: '대시보드 1', createdByMe: true },
  { id: '2', color: '#FF2660', name: '대시보드 2', createdByMe: true },
  { id: '3', color: '#7AC555', name: '대시보드 3', createdByMe: false },
];

const S = {
  Container: styled.div`
    display: flex;
  `,
  Side: styled(Sidebar)`
    flex: 0 0 auto;
  `,
  ContentContainer: styled.div`
    flex: 1;
  `,
};

function mypage() {
  return (
    <S.Container>
      <S.Side dashboards={dashboards} />
      <S.ContentContainer>
        <MypageHeader name="공주들" />
      </S.ContentContainer>
    </S.Container>
  );
}

export default mypage;
