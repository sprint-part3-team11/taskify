import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import theme from '@/styles/theme';

function AvatarList({ max, dataArr }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      // api로 부터 받아온 댓글 사용자 데이터 넣기
      setData(dataArr);
    }, 100);
  }, []);

  const clickAvatarHandler = (id) => {
    console.log(id);
  };
  return (
    <AvatarGroup max={max}>
      {data.map(({ nickname, profileImageUrl, id, isOwner }) => {
        if (isOwner) return null;
        return (
          <Avatar
            key={id + Math.random()}
            alt={nickname}
            sx={{ bgcolor: theme.color.lightPink }}
            src={profileImageUrl}
            onClick={() => {
              clickAvatarHandler(id);
            }}
          />
        );
      })}
    </AvatarGroup>
  );
}

export default AvatarList;
