import React, { useState } from 'react';
import './index.css'; // Your custom styles

const Modal = ({ isOpen, onClose, children }) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  const closeModal = () => {
    setModalOpen(false);
    onClose && onClose();
  };

  return (
    <>
      {modalOpen && (
        <div className="modal show d-flex justify-content-center align-items-center"  onClick={closeModal}>
          <div className="modal-dialog" role="document">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {/* <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" onClick={closeModal}>Close</button>
        </div> */}
              <div className="modal-body">
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
