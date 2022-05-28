import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Tool = ({ product }) => {
    const { _id, name, img, description, price, available, minimumOrderQuantity } = product
    return (
        <div>
            <div data-aos="zoom-in-up" data-aos-duration="1500" class="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure class="px-10 pt-10">
                    <img className='w-6/12' src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Price: $ {price}</p>
                    <p>MOQ: {minimumOrderQuantity} pcs</p>
                    <p>Available Quantity: {available} pcs</p>
                    <div class="card-actions">
                        <Link to={`/purchase/${_id}`} product={product} class="btn btn-primary bg-gradient-to-r from-secondary to-primary  text-white">Buy Now <FontAwesomeIcon className='ml-2' icon={faArrowRightLong} /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

AOS.init();
export default Tool;
