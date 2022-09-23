import React from 'react';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import './SingleCard.css';

const SingleCard = (props) => {

    const [modalData, setModalData] = useState({});

    const { gun, countIncrease } = props;
    const { action, bullet, capacity, category, id, img, name, price } = gun;
    
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-lg">
            <figure><img className='w-96 h-60' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <h2 className='text-2xl'>price: {price}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptates corporis !</p>
                    <div className='mt-3'>
                        <button onClick={() => countIncrease()} className="btn btn-sm btn btn-outline mr-3">Add to Card</button>
                        <label onClick={() => setModalData(gun)} htmlFor="my-modal-3" className="btn modal-button btn-sm btn-outline">Details</label>
                    </div>
                </div>
            </div>
            {modalData && (
        <Modal data={modalData} setModalData={setModalData}></Modal>
      )}
        </div>
    );
};

export default SingleCard;