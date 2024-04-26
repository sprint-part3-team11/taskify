import instance from './instance';
import { API, API_DASHBOARDS } from '@/constants/API';

/**
 * 대시보드 생성 api
 */
const postCreateDashboard = ({ title, color }) => {
  return instance({
    url: API.DASHBOARDS,
    method: 'POST',
    data: {
      title,
      color,
    },
  });
};

/**
 * 대시보드 목록조회 api
 */
const getDashboardList = ({ navigationMethod, page, size }) => {
  return instance({
    url: API.DASHBOARDS,
    method: 'GET',
    params: {
      navigationMethod,
      page,
      size,
    },
  });
};

/**
 * 대시보드 상세조회 api
 */
const getDashboardDetail = (dashboardId: string) => {
  return instance({
    url: API_DASHBOARDS.BY_ID(dashboardId),
    method: 'GET',
  });
};

/**
 * 대시보드 수정 api
 */
const putEditDashboard = ({ dashboardId, title, color }) => {
  return instance({
    url: API_DASHBOARDS.BY_ID(dashboardId),
    method: 'PUT',
    data: {
      title,
      color,
    },
  });
};

/**
 * 대시보드 삭제 api
 */
const deleteDashboard = (dashboardId: string) => {
  return instance({
    url: API_DASHBOARDS.BY_ID(dashboardId),
    method: 'DELETE',
  });
};

/**
 * 대시보드 초대 api
 */
const postInviteDashboard = ({ dashboardId, email }) => {
  return instance({
    url: API_DASHBOARDS.INVITATIONS(dashboardId),
    method: 'POST',
    data: {
      email,
    },
  });
};

/**
 * 대시보드 초대 불러오는 api
 */
const getDashboardInvitation = ({ dashboardId, page, size }) => {
  return instance({
    url: API_DASHBOARDS.INVITATIONS(dashboardId),
    method: 'GET',
    params: {
      dashboardId,
      page,
      size,
    },
  });
};

/**
 * 대시보드 초대 취소 api
 */
const deleteDashboardInvitation = ({ dashboardId, invitationId }) => {
  return instance({
    url: API_DASHBOARDS.INVITATIONS_CANCLE(dashboardId, invitationId),
    method: 'DELETE',
  });
};

export default {
  postCreateDashboard,
  getDashboardList,
  getDashboardDetail,
  putEditDashboard,
  deleteDashboard,
  postInviteDashboard,
  getDashboardInvitation,
  deleteDashboardInvitation,
};
