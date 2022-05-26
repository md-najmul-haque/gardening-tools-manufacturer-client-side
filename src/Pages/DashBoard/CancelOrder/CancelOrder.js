import React from 'react';
import { toast } from 'react-toastify';

const CancelOrder = ({ booking, refetch }) => {
    const { _id, toolName, orderQuantity, price } = booking

    const cancelOrder = id => {
        fetch(`http://localhost:5000/booking/${_id}`, {
            method: 'delete',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                console.log(data);
                toast.success(`Your order is cancelled successfully `)
            })
    }

    return (
        <div>
            <input type="checkbox" id="cancel-order" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="cancel-order" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-primary">Do you really want to cancel order for {toolName}?</h3>
                    <h3 class="font-bold">Booking Details:</h3>
                    <p>Item Name: {toolName}</p>
                    <p>Unit Price: {price}</p>
                    <p>Order Quantity: {orderQuantity}</p>
                    <p>Total Price: {orderQuantity * price}</p>
                    <div class="modal-action">
                        <label onClick={() => cancelOrder(_id)} for="cancel-order" class="btn btn-error">Cancel Order</label>
                        <label for="cancel-order" class="btn btn-error">Keep Order</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelOrder;