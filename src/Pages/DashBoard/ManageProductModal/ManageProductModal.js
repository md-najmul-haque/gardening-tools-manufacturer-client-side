import React from 'react';
import { toast } from 'react-toastify';

const ManageProductModal = ({ product, setProduct, refetch }) => {
    const { _id, name, img, description, price, available, minimumOrderQuantity } = product

    const deleteProduct = id => {
        fetch(`https://serene-wave-89546.herokuapp.com/tools/${_id}`, {
            method: 'delete',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                console.log(data);
                toast.success(`Product is deleted successfully`)
                setProduct(null)
            })
    }

    return (
        <div>
            <input type="checkbox" id="manage-order" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="manage-order" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg">Do you want to delete {name}? please note, after deleting if will automatically disappear from home page. </h3>

                    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                        <figure className="px-10 pt-10">
                            <img className='w-6/12 rounded-xl' src={img} alt="Shoes" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{name}</h2>
                            <p>{description}</p>
                            <p>Price: $ {price}</p>
                            <p>MOQ: {minimumOrderQuantity} pcs</p>
                            <p>Available Quantity: {available} pcs</p>
                        </div>
                        <div className="modal-action flex justify-center mb-3">
                            <label onClick={() => deleteProduct(_id)} htmlFor="cancel-order" className="btn btn-error">Delete Product</label>
                            <label htmlFor="manage-order" className="btn btn-error">Keep Product</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProductModal;