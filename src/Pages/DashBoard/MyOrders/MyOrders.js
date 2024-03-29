import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import CancelOrder from '../CancelOrder/CancelOrder';
import Loading from '../../Shared/Loading/Loading';
import { useQuery } from '@tanstack/react-query';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate()
    const [booking, setBooking] = useState(null)
    const email = user.email;

    const { isLoading, data: bookings, refetch } = useQuery({
        queryKey: ['bookings'], email,
        queryFn: () =>
            fetch(`https://gardening-tools-manufacturer-server.onrender.com/booking?email=${email}`, {
                method: "GET",
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(res => {
                // console.log(res)
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/')
                }
                return res.json()
            })
    })

    if (loading || isLoading) {
        return <Loading />
    }

    return (

        <div className="overflow-x-auto mt-10 px-10">
            <h2 className="text-center text-2xl uppercase font-bold text-primary pb-5 ">Your Orders</h2>
            <table className="table w-full">

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
                        bookings?.map((booking, index) => <tr key={booking._id}>
                            <th>{index + 1}</th>
                            <td>{booking.toolName}</td>
                            <td>{booking.orderQuantity} pcs</td>
                            <td>$ {booking.price}</td>
                            <td>$ {booking.orderQuantity * booking.price}</td>
                            <td>{
                                <div>
                                    {!booking.paid && <Link to={`/dashboard/payment/${booking._id}`} className="btn btn-primary btn-xs text-white mr-2">Payment</Link>}
                                    {booking.paid &&
                                        <>
                                            <span className="text-success mr-2">Paid</span>
                                            Transaction Id: <span className='text-success'>{booking.transactionId}</span>
                                        </>
                                    }

                                    {
                                        !booking.paid ? <label htmlFor="cancel-order" onClick={() => setBooking(booking)} className="btn  btn-primary btn-xs text-white">Cancel</label> : ''
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