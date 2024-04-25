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
  { id: 11, nickname: '배유철' },
  { id: 12, nickname: '배동석' },
  { id: 13, nickname: '🔹To Do' },
  { id: 14, nickname: '박지윤' },
  { id: 15, nickname: 'alallalalalaalalallalalalalaaalalalaalal' },
  { id: 21, nickname: '배유철' },
  { id: 22, nickname: '배동석' },
  { id: 23, nickname: '🔹To Do' },
  { id: 24, nickname: '박지윤' },
  { id: 25, nickname: 'alallalalalaalalallalalalalaaalalalaalal' },
  { id: 31, nickname: '배유철' },
  { id: 32, nickname: '배동석' },
  { id: 33, nickname: '🔹To Do' },
  { id: 34, nickname: '박지윤' },
  { id: 35, nickname: 'alallalalalaalalallalalalalaaalalalaalal' },
];

const data = [
  {
    id: 19980,
    title: 'To do',
    teamId: '4-11',
    dashboardId: 5941,
    createdAt: '2024-04-16T16:26:10.172Z',
    updatedAt: '2024-04-16T16:26:10.172Z',
  },
  {
    id: 19981,
    title: 'On progress',
    teamId: '4-11',
    dashboardId: 5941,
    createdAt: '2024-04-16T16:26:10.172Z',
    updatedAt: '2024-04-16T16:26:10.172Z',
  },
  {
    id: 19982,
    title: 'Done',
    teamId: '4-11',
    dashboardId: 5941,
    createdAt: '2024-04-16T16:26:10.172Z',
    updatedAt: '2024-04-16T16:26:10.172Z',
  },
  {
    id: 19985,
    title: '아침',
    teamId: '4-11',
    dashboardId: 5941,
    createdAt: '2024-04-17T02:04:51.592Z',
    updatedAt: '2024-04-17T02:04:51.592Z',
  },
  {
    id: 19986,
    title: '점심',
    teamId: '4-11',
    dashboardId: 5941,
    createdAt: '2024-04-17T02:05:02.991Z',
    updatedAt: '2024-04-17T02:05:02.991Z',
  },
  {
    id: 22152,
    title: '민준',
    teamId: '4-11',
    dashboardId: 5941,
    createdAt: '2024-04-24T12:52:57.690Z',
    updatedAt: '2024-04-24T12:52:57.690Z',
  },
  {
    id: 22406,
    title: '민준',
    teamId: '4-11',
    dashboardId: 5941,
    createdAt: '2024-04-24T15:47:52.041Z',
    updatedAt: '2024-04-24T15:47:52.041Z',
  },
  {
    id: 23232,
    title: 'string',
    teamId: '4-11',
    dashboardId: 5941,
    createdAt: '2024-04-25T05:07:17.931Z',
    updatedAt: '2024-04-25T05:07:17.931Z',
  },
  {
    id: 23696,
    title: '되야지',
    teamId: '4-11',
    dashboardId: 5941,
    createdAt: '2024-04-25T17:15:32.495Z',
    updatedAt: '2024-04-25T17:15:32.495Z',
  },
  {
    id: 23697,
    title: '되야지',
    teamId: '4-11',
    dashboardId: 5941,
    createdAt: '2024-04-25T17:15:40.033Z',
    updatedAt: '2024-04-25T17:15:40.033Z',
  },
];
function jy() {
  return (
    <>
      <SelectBox
        options={selectBoxOptions}
        placeholder
        displayFieldName="nickname"
      />
      <SelectBox options={data} placeholder displayFieldName="title" />
    </>
  );
}

export default jy;
