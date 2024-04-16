import styled from 'styled-components';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

const S = {
  SideBarBox: styled.div`
    position: fixed;
    top: 0;
    border: 1px solid black;
    width: 30rem;
    min-height: 100vh;
    ${MEDIA_QUERIES.onTablet} {
      width: 16rem;
      min-height: 100vh;
    }
    ${MEDIA_QUERIES.onMobile} {
      width: 6.7rem;
      min-height: 100vh;
    }
  `,
};

function SideBar() {
  return (
    <div>
      <S.SideBarBox />
    </div>
  );
}

export default SideBar;
