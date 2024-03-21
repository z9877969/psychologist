import { createContext, useCallback, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop } from 'shared/components';

const ModalConext = createContext();
const modalRoot = document.querySelector('#modal-root');

export const useModal = () => useContext(ModalConext);

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);
  const handleSetModal = useCallback((modal = null) => {
    setModal(modal);
  }, []);
  return (
    <ModalConext.Provider value={handleSetModal}>
      {children}
      {modal &&
        createPortal(
          <ModalBackdrop onClose={handleSetModal}>{modal}</ModalBackdrop>,
          modalRoot
        )}
    </ModalConext.Provider>
  );
};
