import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';


const ManageOrders = () => {

    const { data: orders, isLoading, refetch } = useQuery('bookings', () => fetch(`https://serene-wave-89546.herokuapp.com/order`, {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            console.log(res)
            if (res.status === 401 || res.status === 403) {
                // signOut(auth);
                // localStorage.removeItem('accessToken');
                // Navigate('/')
                console.log('abc')
            }
            return res.json()
        }))



    const handleShipped = id => {

        const shipped = {
            shipped: 'Shipped'
        }

        fetch(`https://serene-wave-89546.herokuapp.com/order/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(shipped)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
            })
    }


    if (isLoading) {
        return <Loading />
    }



    return (

        <div className="overflow-x-auto">
            <table className="table w-full">

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
                        orders.map((order, index) => <tr key={order._id}>
                            <th>{index + 1}</th>
                            <td>{order.toolName}</td>
                            <td>{order.orderQuantity}</td>
                            <td>{order.price}</td>
                            <td>{
                                <div>
                                    {!order.paid &&
                                        <>
                                            <Link to={`/dashboard/payment/${order._id}`} className="btn btn-primary btn-xs text-white mr-2">Unpaid</Link>

                                        </>}
                                    {order.paid &&
                                        <>
                                            {order.shipped ? <button className="btn btn-primary btn-xs text-white mr-2">Shipped</button> : <button className="btn btn-primary btn-xs text-white mr-2">Pending</button>}
                                            {order.shipped ? '' : <button onClick={() => handleShipped(order._id)} className="btn btn-primary btn-xs text-white mr-2">UPDATE TO SHIPPED</button>}

                                        </>
                                    }

                                    {
                                        !order.paid ? <label className="btn  btn-primary btn-xs text-white">Cancel</label> : ''
                                    }

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