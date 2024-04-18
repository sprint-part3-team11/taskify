import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import {
  ColorSelector,
  resultColorState,
} from '@/components/common/ColorSelector';
import { ImgFileUpload, imgUrlState } from '@/components/common/ImgFileUpload';
import SelectBox from '@/components/common/SelectBox';
import Sidebar from '@/components/common/SideBar';

const selectBoxOptions = [
  { value: '배유철', label: '배유철' },
  { value: '배동석', label: '배동석' },
  { value: 'ToDo', label: '🔹To Do' },
  { value: '박지윤', label: '박지윤' },
  { value: '난사람', label: 'alallalalalaalalallalalalalaaalalalaalal' },
];

const dashboards = [
  { id: '1', color: '#FFA500', name: '대시보드 1', createdByMe: true },
  { id: '2', color: '#FF2660', name: '대시보드 2', createdByMe: true },
  { id: '3', color: '#7AC555', name: '대시보드 3', createdByMe: false },
];
function jy() {
  // useRecoilValue을 소문자로된 pages에서는 사용하면 빨간줄이 나타납니다. 컴포넌트에서 사용해야 할 것 같습니다ㅜㅜ 여기는 테스트 페이지니까 놔두겠습니다 ..!
  const resultColor = useRecoilValue(resultColorState);
  const imgUrl = useRecoilValue(imgUrlState);
  return (
    <>
      {/* true면 ={true} 를 린트가 쓰지 말라고 빨간줄 나오네요! false일때만 false를 명시해주세요 */}
      <SelectBox options={selectBoxOptions} placeholder />
      <Sidebar dashboards={dashboards} />
      <ColorSelector />
      {resultColor}
      {console.log(imgUrl)}
      <ImgFileUpload edit small />
    </>
  );
}

export default jy;
