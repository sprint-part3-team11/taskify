import React, { useState } from 'react';
import styled from 'styled-components';
import BackDropModal from '@/components/common/Modal/BackDropModal';

const S = {
  Button: styled.button`
    border: 1px solid black;
    background-color: yellow;
    padding: 30px;
  `,
};

function mj() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <S.Button onClick={openModal}>Open Modal</S.Button>
      <p style={{ fontSize: 30 }}>
        모달 띄웠을 때 스크롤 되는지 안되는지 확인용 <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
        nulla eleifend, dignissim mi vitae, porttitor lacus. Quisque lacus
        libero, efficitur eget mauris nec, rhoncus ultricies justo. Integer
        lorem ipsum, pharetra id tincidunt vel, lacinia id mauris. Proin eget
        est posuere, rhoncus eros quis, vulputate est. Ut elementum mattis
        nulla. In eget sapien ornare, ultricies ex nec, ullamcorper diam. Donec
        convallis rhoncus porttitor. Quisque urna est, placerat in justo quis,
        blandit elementum tellus. Integer commodo faucibus ipsum, vitae pulvinar
        urna molestie in. Etiam augue est, luctus scelerisque imperdiet ut,
        euismod ut leo. Maecenas a ligula augue. Integer sollicitudin, elit ut
        tristique dignissim, orci sapien rutrum ipsum, vel luctus ligula velit
        id erat. Nulla ultricies nulla ante, placerat hendrerit augue sagittis
        vitae. Integer eget sollicitudin neque. Ut efficitur pretium dui, quis
        blandit ipsum viverra sed. Suspendisse condimentum eros in fermentum
        laoreet. Mauris a est dolor. Suspendisse non commodo urna. Sed in arcu
        pretium, fermentum neque vitae, consectetur lectus. Quisque sit amet
        egestas dolor, nec ultricies mauris. Mauris elementum sapien vitae eros
        cursus, ut tincidunt nibh aliquet. Cras odio ex, finibus et nunc at,
        consectetur interdum ex. Aliquam et risus vehicula, hendrerit libero
        nec, vehicula lorem. Phasellus vulputate semper sem id consectetur.
        Proin sed augue ultrices, consequat dui sed, consectetur lorem. Etiam
        porta euismod dui ut semper. Donec id mauris lacinia, luctus magna et,
        pulvinar metus. Integer id eleifend justo, in scelerisque turpis.
        Phasellus lectus dui, ornare ut pretium vel, sollicitudin ut nisl.
        Suspendisse sodales leo id hendrerit pellentesque. Ut id sagittis magna.
        Nullam eu tellus nisl. Integer consectetur libero nec mattis lacinia.
        Nam nec risus at arcu tincidunt gravida. Phasellus lacinia sapien at
        interdum malesuada. Nunc in mi pellentesque libero lobortis tempor vel
        at eros. Sed nec porta augue, in molestie lectus. In a lacinia quam, at
        convallis diam. Vivamus ornare metus nec tortor pellentesque mattis. Nam
        enim risus, euismod at convallis eget, hendrerit vulputate ex. Donec non
        velit fringilla, pellentesque felis nec, lobortis massa. Quisque vitae
        nisi eu justo pharetra ornare ut nec sem. Vestibulum vitae tincidunt
        massa, ac posuere dolor. Etiam at nisi pellentesque, feugiat velit sit
        amet, commodo mi. Curabitur sit amet elit maximus, suscipit risus at,
        viverra dolor. Duis ut semper dolor. Sed vitae eros ac risus placerat
        accumsan non sed neque. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Suspendisse potenti. Morbi sed
        leo mattis, molestie nunc iaculis, finibus nisi. Pellentesque nec
        consectetur ex. Duis fermentum luctus cursus. Praesent ultrices rutrum
        vestibulum. Duis pulvinar in lectus quis commodo. Donec quis ornare
        odio. Etiam posuere nunc eu quam congue viverra. Sed at cursus elit.
        Vivamus hendrerit nisl non magna ultricies egestas.blandit ipsum viverra
        sed. Suspendisse condimentum eros in fermentum laoreet. Mauris a est
        dolor. Suspendisse non commodo urna. Sed in arcu pretium, fermentum
        neque vitae, consectetur lectus. Quisque sit amet egestas dolor, nec
        ultricies mauris. Mauris elementum sapien vitae eros cursus, ut
        tincidunt nibh aliquet. Cras odio ex, finibus et nunc at, consectetur
        interdum ex. Aliquam et risus vehicula, hendrerit libero nec, vehicula
        lorem. Phasellus vulputate semper sem id consectetur. Proin sed augue
        ultrices, consequat dui sed, consectetur lorem. Etiam porta euismod dui
        ut semper. Donec id mauris lacinia, luctus magna et, pulvinar metus.
        Integer id eleifend justo, in scelerisque turpis. Phasellus lectus dui,
        ornare ut pretium vel, sollicitudin ut nisl. Suspendisse sodales leo id
        hendrerit pellentesque. Ut id sagittis magna. Nullam eu tellus nisl.
        Integer consectetur libero nec mattis lacinia. Nam nec risus at arcu
        tincidunt gravida. Phasellus lacinia sapien at interdum malesuada. Nunc
        in mi pellentesque libero lobortis tempor vel at eros. Sed nec porta
        augue, in molestie lectus. In a lacinia quam, at convallis diam. Vivamus
        ornare metus nec tortor pellentesque mattis. Nam enim risus, euismod at
        convallis eget, hendrerit vulputate ex. Donec non velit fringilla,
        pellentesque felis nec, lobortis massa. Quisque vitae nisi eu justo
        pharetra ornare ut nec sem. Vestibulum vitae tincidunt massa, ac posuere
        dolor. Etiam at nisi pellentesque, feugiat velit sit amet, commodo mi.
        Curabitur sit amet elit maximus, suscipit risus at, viverra dolor. Duis
        ut semper dolor. Sed vitae eros ac risus placerat accumsan non sed
        neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia curae; Suspendisse potenti. Morbi sed leo mattis,
        molestie nunc iaculis, finibus nisi. Pellentesque nec consectetur ex.
        Duis fermentum luctus cursus. Praesent ultrices rutrum vestibulum. Duis
        pulvinar in lectus quis commodo. Donec quis ornare odio. Etiam posuere
        nunc eu quam congue viverra. Sed at cursus elit. Vivamus hendrerit nisl
        non magna ultricies egestas.
      </p>

      <BackDropModal isOpen={isModalOpen} onClose={closeModal}>
        <h1>내가 모달이다</h1>
        <p>나도 모달이다~~~~~~</p>
        <button onClick={closeModal}>모달 닫기</button>
      </BackDropModal>
    </div>
  );
}

export default mj;
