import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import theme from '@/styles/theme';

function AvatarList({ max, dataArr }) {
  return (
    <AvatarGroup max={max}>
      {dataArr?.map(({ nickname, profileImageUrl, id, isOwner }) => {
        if (isOwner) return null;
        return (
          <Avatar
            key={id + Math.random()}
            alt={nickname}
            sx={{ bgcolor: theme.color.lightPink }}
            src={profileImageUrl}
          />
        );
      })}
    </AvatarGroup>
  );
}

export default AvatarList;
