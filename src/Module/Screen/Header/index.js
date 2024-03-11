import React, { useState } from 'react';
import './index.css';
import Modal from '../../../Components/Modal';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log('Opening modal');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log('Closing modal');
    setIsModalOpen(false);
  };

  console.log('Rendering Header, isModalOpen:', isModalOpen);

  return (
    <div className='bg'>
      <div className="py-20 bg-cover bg-no-repeat bg-fixed bg">
        <div className="container m-auto text-center px-6 opacity-100 align-item-center py-20 bg-text">
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'inherit', fontSize: '60px', color: '#f6efd7' }}>Ibea Elevators Private Limited</h1>
          <h2 className="text-2xl mb-8 text-gray-200">"Our Strength is Our Clear Infrastructure"</h2>
          <button className="bg-white font-bold rounded-full py-2 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-blue-500 hover:bg-gray-800 transition-all" onClick={openModal}>SignIn</button>
        </div>
      </div>
      {isModalOpen && (
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Hello, this is the modal content!</h2>
        <p>Any content can go here.</p>
      </Modal>
      )}
     
    </div>
  );
}

export { Header }

{/* <div>
    <button onClick={openModal}>SignIn</button>
    {isModalOpen && (
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Hello, this is the modal content!</h2>
        <p>Any content can go here.</p>
      </Modal>
    )}
  </div> */}