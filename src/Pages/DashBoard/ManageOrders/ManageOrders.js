import React, { useState } from 'react';

const ManageOrders = () => {

    const [orders, setOrders] = useState([])

    fetch(`http://localhost:5000/booking`, {
        method: "GET",
        headers: {}
    })
        .then(res => res.json())
        .then(data => setOrders(data))


    return (

        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th>SL No</th>
                        <th>Product Name</th>
                        <th>Order Quantity</th>
                        <th> Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((orders, index) => <tr key={orders._id}>
                            <th>{index + 1}</th>
                            <td>{orders.toolName}</td>
                            <td>{orders.orderQuantity}</td>
                            <td>{orders.price}</td>
                            <td></td>
                            <td>{
                                <div>
                                    <button class="btn btn-primary btn-xs text-white mr-2">Payment</button>
                                    <button class="btn  btn-primary btn-xs text-white">Cancel</button>
                                </div>
                            }</td>
                        </tr>)
                    }



                </tbody>
            </table>
        </div>

    );
};

export default ManageOrders;