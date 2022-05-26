import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import CancelOrder from '../CancelOrder/CancelOrder';
import { useQuery } from 'react-query'
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth)
    // const [bookings, setBookings] = useState([])
    const navigate = useNavigate()
    const [booking, setBooking] = useState(null)
    const email = user.email;

    const { data: bookings, isLoading, refetch } = useQuery(['bookings', email], () => fetch(`http://localhost:5000/booking?email=${email}`, {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            console.log(res)
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate('/')
            }
            return res.json()
        }))

    if (loading || isLoading) {
        return <Loading />
    }

    // useEffect(() => {
    //     if (user) {
    //         fetch(`http://localhost:5000/booking?email=${email}`, {
    //             method: "GET",
    //             headers: {
    //                 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         })
    //             .then(res => {
    //                 console.log(res)
    //                 if (res.status === 401 || res.status === 403) {
    //                     signOut(auth);
    //                     localStorage.removeItem('accessToken');
    //                     navigate('/')
    //                 }
    //                 return res.json()
    //             })
    //             .then(data => setBookings(data))
    //     }
    // }, [email, user])

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
                            <td>{booking.orderQuantity} pcs</td>
                            <td>$ {booking.price}</td>
                            <td>$ {booking.orderQuantity * booking.price}</td>
                            <td>{
                                <div>
                                    {!booking.paid && <Link to={`/dashboard/payment/${booking._id}`} class="btn btn-primary btn-xs text-white mr-2">Payment</Link>}
                                    {booking.paid &&
                                        <>
                                            <span class="text-success mr-2">Paid</span>
                                            Transaction Id: <span className='text-success'>{booking.transactionId}</span>
                                        </>
                                    }

                                    {
                                        !booking.paid ? <label for="cancel-order" onClick={() => setBooking(booking)} class="btn  btn-primary btn-xs text-white">Cancel</label> : ''
                                    }



                                </div>
                            }</td>
                        </tr>)
                    }



                </tbody>
            </table>
            {
                booking && <CancelOrder booking={booking} refetch={refetch}></CancelOrder>
            }
        </div>

    );
};

export default MyOrders;