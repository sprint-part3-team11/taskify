import AddIconButton from '@/components/common/button/AddIconButton';
import { GridTemplate } from '@/styles/commonStyle';

function DashBoardList() {
  return (
    <GridTemplate>
      <AddIconButton style={{ height: '7rem' }}>새로운 대시보드</AddIconButton>
      {/* @Todo 각각의 대시보드 버튼 목록으로 대체하기 */}
      <AddIconButton style={{ height: '7rem' }}>새로운 대시보드</AddIconButton>
      <AddIconButton style={{ height: '7rem' }}>새로운 대시보드</AddIconButton>
      <AddIconButton style={{ height: '7rem' }}>새로운 대시보드</AddIconButton>
      <AddIconButton style={{ height: '7rem' }}>새로운 대시보드</AddIconButton>
      <AddIconButton style={{ height: '7rem' }}>새로운 대시보드</AddIconButton>
    </GridTemplate>
  );
}

export default DashBoardList;
