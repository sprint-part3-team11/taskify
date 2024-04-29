export const API = Object.freeze({
  AUTH: '/auth',
  CARDS: '/cards',
  COLUMNS: '/columns',
  COMMENTS: '/comments',
  DASHBOARDS: '/dashboards',
  INVITATIONS: '/invitations',
  MEMBERS: '/members',
  USERS: '/users',
});

export const API_AUTH = Object.freeze({
  LOGIN: `${API.AUTH}/login`,
  PASSWORD_CHANGE: `${API.AUTH}/password`,
});

export const API_CARDS = Object.freeze({
  BY_ID: (cardId: number) => `${API.CARDS}/${cardId}`,
});

export const API_COLUMNS = Object.freeze({
  BY_ID: (columnsId: number) => `${API.COLUMNS}/${columnsId}`,
  CARD_IMAGE_UPLOAD: (columnsId: number) =>
    `${API.COLUMNS}/${columnsId}/card-image`,
});

export const API_COMMENTS = Object.freeze({
  BY_ID: (commentsId: number) => `${API.COMMENTS}/${commentsId}`,
});

export const API_DASHBOARDS = Object.freeze({
  BY_ID: (dashboardsId: number) => `${API.DASHBOARDS}/${dashboardsId}`,
  INVITATIONS: (dashboardsId: number) =>
    `${API.DASHBOARDS}/${dashboardsId}/invitations`,
  INVITATIONS_CANCLE: (dashboardsId: number, invitationId: number) =>
    `${API.DASHBOARDS}/${dashboardsId}/invitations/${invitationId}`,
});

export const API_INVITATIONS = Object.freeze({
  BY_ID: (invitationId: number) => `${API.INVITATIONS}/${invitationId}`,
});

export const API_MEMBERS = Object.freeze({
  BY_ID: (memberId: number) => `${API.MEMBERS}/${memberId}`,
});

export const API_USERS = Object.freeze({
  MY_INFO: `${API.USERS}/me`,
  PROFILE_IMG_UPLOAD: `${API.USERS}/me/image`,
});
