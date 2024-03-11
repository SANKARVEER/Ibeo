import React, { useState } from 'react';
import './index.css';
import Modal from '../../../Components/Modal';

function Cards() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedElevator, setSelectedElevator] = useState(null);

    const elevatorData = [
        { id: 1, image: require('../../../images/ibea1.jpeg'), title: 'Elevator 1', description: 'jjjdakjdakd' },
        { id: 2, image: require('../../../images/ibea2.jpeg'), title: 'Elevator 2', description: 'jjjdakjdakd' },
        { id: 3, image: require('../../../images/ibea3.jpeg'), title: 'Elevator 3', description: 'jjjdakjdakd' },
        { id: 4, image: require('../../../images/ibea4.jpeg'), title: 'Elevator 4', description: 'jjjdakjdakd' },
        { id: 5, image: require('../../../images/ibea5.jpeg'), title: 'Elevator 5', description: 'jjjdakjdakd' },
        { id: 6, image: require('../../../images/ibea6.jpeg'), title: 'Elevator 6', description: 'jjjdakjdakd' },
        { id: 7, image: require('../../../images/ibea7.jpeg'), title: 'Elevator 7', description: 'jjjdakjdakd' },
        { id: 8, image: require('../../../images/ibea8.jpeg'), title: 'Elevator 8', description: 'jjjdakjdakd' },
        { id: 9, image: require('../../../images/ibea3.jpeg'), title: 'Elevator 9', description: 'jjjdakjdakd' },
        { id: 10, image: require('../../../images/ibea1.jpeg'), title: 'Elevator 10', description: 'jjjdakjdakd' },
        { id: 11, image: require('../../../images/ibea2.jpeg'), title: 'Elevator 11', description: 'jjjdakjdakd' },
        { id: 12, image: require('../../../images/ibea4.jpeg'), title: 'Elevator 12', description: 'jjjdakjdakd' },

    ];

    const openModal = (elevator) => {
        setSelectedElevator(elevator);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedElevator(null);
    };

    const handleButtonClick = (elevator, event) => {
        event.preventDefault(); // Prevents the default navigation behavior
        openModal(elevator);
    };


    return (
        <>
            <div className='' style={{ backgroundColor: '#fef9eb' }}>
                <h1 className='text-center pt-3'>Elevators</h1>
                <section className="pt-2 ">
                    <div className="row m-0">
                        {elevatorData.map(elevator => (
                            <div key={elevator.id} className="col-lg-2 mb-4">
                                <div className="card cardddd">
                                    <img src={elevator.image} className="" alt="Card Image" />
                                    <div className="card-body">
                                        <h5 className="card-title">{elevator.title}</h5>
                                        <p className="card-text mb-4">{elevator.description}</p>
                                        <a href="#" className="btn btn-primary  d-flex justify-content-center" onClick={(event) => handleButtonClick(elevator, event)}>
                                            Click !
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            {modalOpen && selectedElevator && (
                <Modal isOpen={modalOpen} onClose={closeModal}>
                    <img src={selectedElevator.image} alt={selectedElevator.title} />
                    <h2>{selectedElevator.title}</h2>
                    <p>{selectedElevator.description}</p>
                    
                </Modal>
            )}
        </>

    )
}
export { Cards }




