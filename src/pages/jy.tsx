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
  { id: 1, nickname: '배유철' },
  { id: 2, nickname: '배동석' },
  { id: 3, nickname: '🔹To Do' },
  { id: 4, nickname: '박지윤' },
  { id: 5, nickname: 'alallalalalaalalallalalalalaaalalalaalal' },
  { id: 1, nickname: '배유철' },
  { id: 2, nickname: '배동석' },
  { id: 3, nickname: '🔹To Do' },
  { id: 4, nickname: '박지윤' },
  { id: 5, nickname: 'alallalalalaalalallalalalalaaalalalaalal' },
  { id: 1, nickname: '배유철' },
  { id: 2, nickname: '배동석' },
  { id: 3, nickname: '🔹To Do' },
  { id: 4, nickname: '박지윤' },
  { id: 5, nickname: 'alallalalalaalalallalalalalaaalalalaalal' },
  { id: 1, nickname: '배유철' },
  { id: 2, nickname: '배동석' },
  { id: 3, nickname: '🔹To Do' },
  { id: 4, nickname: '박지윤' },
  { id: 5, nickname: 'alallalalalaalalallalalalalaaalalalaalal' },
];
function jy() {
  return (
    <>
      {/* true면 ={true} 를 린트가 쓰지 말라고 빨간줄 나오네요! false일때만 false를 명시해주세요 */}
      <SelectBox options={selectBoxOptions} placeholder />
    </>
  );
}

export default jy;
