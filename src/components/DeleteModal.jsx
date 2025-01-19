import React from 'react';
import ReactDOM from 'react-dom';

const DeleteModal = ({ isOpen, onClose, onConfirm, vehicle }) => {
  if (!isOpen) return null; // Don't render if the modal is not open

  return ReactDOM.createPortal(
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3>Confirm Deletion</h3>
        <p>Are you sure you want to delete {vehicle?.make} {vehicle?.model}?</p>
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onClose}>No</button>
      </div>
    </div>,
    document.getElementById('modal-root') // Portal target in public/index.html
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
  },
};

export default DeleteModal;
