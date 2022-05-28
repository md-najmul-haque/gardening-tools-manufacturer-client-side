import React from 'react';


const ManageAllProduct = ({ product, setProduct }) => {

    const { _id, name, img, description, price, available, minimumOrderQuantity } = product
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure className="px-10 pt-10">
                    <img className='w-6/12' src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Price: $ {price}</p>
                    <p>MOQ: {minimumOrderQuantity} pcs</p>
                    <p>Available Quantity: {available} pcs</p>

                    <label htmlFor="manage-order" onClick={() => setProduct(product)} className="btn btn-error text-white">Delete</label>

                </div>
            </div>
        </div>
    );
};

export default ManageAllProduct;
