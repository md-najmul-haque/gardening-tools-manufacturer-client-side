import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageProductModal = ({ product, setProduct, refetch }) => {
    const { _id, name, img, description, price, available, minimumOrderQuantity } = product
    const navigate = useNavigate()

    const deleteProduct = id => {
        fetch(`http://localhost:5000/tools/${_id}`, {
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
            <input type="checkbox" id="manage-order" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="manage-order" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg">Do you want to delete {name}? please note, after deleting if will automatically disappear from home page. </h3>

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
                        </div>
                        <div class="modal-action">
                            <label onClick={() => deleteProduct(_id)} for="cancel-order" class="btn btn-error">Delete Product</label>
                            <label for="manage-order" class="btn btn-error">Keep Product</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProductModal;