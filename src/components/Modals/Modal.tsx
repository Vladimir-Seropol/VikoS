import React, { FC } from 'react';
import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <StyledModalProductPage onClick={(e) => e.stopPropagation()}>
        {children}
      </StyledModalProductPage>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex; 
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

const StyledModalProductPage = styled.div`
  height: 90%;
  width: 80%;
  background-color: white; 
  padding: 20px; 
  border-radius: 8px; 
  position: relative; 
  z-index: 6;
  max-width: 1180px;
 
`;

export default Modal;
