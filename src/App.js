import React, { useState } from 'react';
import style from './App.module.css';
import Modal from 'react-modal';
Modal.setAppElement('#root');

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className = { style.app }>
      <button type = 'button' onClick = { openModal }>Open Modal</button>
      <Modal isOpen = { isModalOpen } onRequestClose = { closeModal } shouldCloseOnOverlayClick = { false } shouldCloseOnEsc = { false } overlayClassName = { style.modalOverlay } className = { style.modalContent }>
        <h2>Modal Title</h2>
        <p>Modal Body</p>
        <button type = 'button' onClick = { closeModal }>Close</button>
      </Modal>
    </div>
  );
}
