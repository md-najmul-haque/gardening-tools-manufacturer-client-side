import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth)
    const [bookings, setBookings] = useState([])
    const email = user.email;

    if (user) {
        fetch(`http://localhost:5000/booking?email=${email}`, {
            method: "GET",
            headers: {}
        })
            .then(res => res.json())
            .then(data => setBookings(data))
    }

    return (

        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th>SL No</th>
                        <th>Product Name</th>
                        <th>Order Quantity</th>
                        <th>Unit Price</th>
                        <th>Total Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        bookings.map((booking, index) => <tr key={booking._id}>
                            <th>{index + 1}</th>
                            <td>{booking.toolName}</td>
                            <td>{booking.orderQuantity}</td>
                            <td>{booking.price}</td>
                            <td>{`${booking.orderQuantity} * ${booking.price}`}</td>
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

export default MyOrders;