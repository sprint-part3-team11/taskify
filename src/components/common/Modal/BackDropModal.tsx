import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

const unfoldIn = keyframes`
  0% { transform: scaleY(.005) scaleX(0); }
  50% { transform: scaleY(.005) scaleX(1); }
  100% { transform: scaleY(1) scaleX(1); }
`;

const zoomIn = keyframes`
  0% { transform: scale(0); }
  100% { transform: scale(1); }
`;

const appearModal = keyframes`
  0%{opacity:0}
  75%{opacity:0}
  100%{opacity:1}
`;
const S = {
  ModalBackground: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    animation: ${unfoldIn} 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  `,
  ModalContainer: styled.div`
    padding: 3.2rem 2rem 2rem;
    background: ${({ theme }) => theme.color.white};
    border-radius: 0.8rem;

    animation: ${appearModal} 1s;
  `,
};

interface BackDropModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

/**
 * 백드롭 모달(기본형) - 모달이 열려있는지 확인하고, 내부 내용을 표시하고, onClose 함수를 사용하여 모달을 닫습니다.
 * @component
 * @param isOpen - 모달이 열려있는지 확인
 * @param children - 모달 내부 내용
 * @param onClose - 모달을 닫을 때 사용할 함수
 * @example
 * 새 컬럼 생성 예시
 * import React, { useState } from 'react';
 * import BackDropModal from '@/components/common/Modal/BackDropModal';
 *
 * const CreateCategoryModal = () => {
 *   const [isModalOpen, setModalOpen] = useState(false);
 *   const openModal = () => setModalOpen(true);
 *   const closeModal = () => setModalOpen(false);
 *
 *   const [projectName, setProjectName] = useState("");
 *
 *   const handleInputChange = (e) => {
 *     setProjectName(e.target.value);
 *   };
 *
 *   const handleFormSubmit = (e) => {
 *    e.preventDefault(); // 페이지 리로드 방지
 *    // 카테고리 생성 로직 여기 적기
 *    closeModal(); // 모달 닫기
 *   };
 *
 *   return (
 *     <BackDropModal isOpen={isModalOpen} onClose={closeModal}>
 *       <h1>새 카테고리 생성</h1>
 *       <div>이름</div>
 *       <form onSubmit={handleFormSubmit}>
 *         <input
 *           type="text"
 *           placeholder="새로운 프로젝트"
 *           value={projectName}
 *           onChange={handleInputChange}
 *         />
 *       </form>
 *       <button onClick={closeModal}>취소</button>
 *       <button type="button" onClick={handleFormSubmit}>생성</button>
 *     </BackDropModal>
 *   );
 * };
 *
 * export default CreateCategoryModal;
 * );
 */

function BackDropModal({ isOpen, children, onClose }: BackDropModalProps) {
  const [modalRoot, setModalRoot] = useState<Element | null>(null);

  useEffect(() => {
    setModalRoot(document.getElementById('modal-root'));
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return isOpen && modalRoot
    ? ReactDOM.createPortal(
        <S.ModalBackground onClick={onClose}>
          <S.ModalContainer onClick={(e) => e.stopPropagation()}>
            {children}
          </S.ModalContainer>
        </S.ModalBackground>,
        modalRoot,
      )
    : null;
}

export default BackDropModal;
