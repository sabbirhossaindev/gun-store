import React from 'react';
import './Modal.css';

const Modal = (props) => {
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                <label onClick={() => props.setModalData(null)}
                htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{props?.data?.name}</h3>
                    <img src={props.data.img} alt="" />
                    <p className="py-2">
                        {
                            props.data.name ? props.data.action : "Not Found"
                        }
                    </p>
                    <h3 className="text-lg font-bold">capacity:  {props?.data?.capacity}</h3>
                    <h3 className="text-lg font-bold">category:  {props?.data?.category}</h3>
                    <h3 className="text-lg font-bold">price:  {props?.data?.price}</h3>
                </div>
            </div>
        </div>
    );
};

export default Modal;