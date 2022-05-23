import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ product }) => {
    console.log(product)
    const { name, img, description, price, available, minimumOrderQuantity } = product
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
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
                        <Link to='/purchase' class="btn btn-primary text-white">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;
