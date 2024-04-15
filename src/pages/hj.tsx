import DashBoardHeader from '@/components/common/DashBoardHeader';
import HashTag from '@/components/common/tag/HashTag';
import StateTag from '@/components/common/tag/StateTag';
import ProfileImg from '@/public/icon/profileImg.svg';
import '@/styles/GlobalStyle';

function hj() {
  const stateTags = ['To Do', 'On Progress', 'Done'];
  const isMobile = false;
  const hashTag = ['프로젝트', '프론트엔드', '어려워'];
  const IMAGE_URL = 'https://i.ibb.co/ysRQMyj/me.jpg';
  return (
    <>
      <DashBoardHeader
        menuName={'내 대시보드'}
        profileName={'배유철'}
        profileImgURL={IMAGE_URL}
      />
      <div>
        {stateTags.map((tag, index) => (
          <StateTag isMobile={isMobile}>{tag}</StateTag>
        ))}
        {hashTag.map((tag, index) => (
          <HashTag index={index} isMobile={isMobile}>
            {tag}
          </HashTag>
        ))}
      </div>
    </>
  );
}

export default hj;
