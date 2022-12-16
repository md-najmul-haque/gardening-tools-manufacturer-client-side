import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Tool = ({ product }) => {
    const { _id, name, img, description, price, available, minimumOrderQuantity } = product
    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="1500" className="card w-96 bg-base-100 shadow-2xl mx-auto">
                <figure className="px-10 pt-10">
                    <img className='w-6/12 rounded-xl' src={img} alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Price: $ {price}</p>
                    <p>MOQ: {minimumOrderQuantity} pcs</p>
                    <p>Available Quantity: {available} pcs</p>
                    <div className="card-actions">
                        <Link to={`/purchase/${_id}`} product={product} className="btn btn-primary bg-gradient-to-r from-secondary to-primary  text-white">Buy Now <FontAwesomeIcon className='ml-2' icon={faArrowRightLong} /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Tool;
