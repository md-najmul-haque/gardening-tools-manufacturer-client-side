import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51L1YV6JtSRYbvKOdrPL64Md7CBgYuMHNSQH3MyRFxn5fXVs2vZWWRLo9YSzkltLiEMzAElnRagop5JyZwzVNDtr400sMyB71OK');

const Payment = () => {
    const { id } = useParams()

    const url = `https://serene-wave-89546.herokuapp.com/booking/${id}`;

    const { data: booking, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: "GET",
        headers: { 'authorization': `Bearer ${localStorage.getItem('accessToken')} ` }

    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>

            <div className="card w-50 max-w-md my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {booking.customerName}</p>
                    <p className="text-xl">Please Pay for {booking.toolName}</p>
                    <p className="text-xl">Total order quantity: {booking.orderQuantity} pcs</p>
                    <p className="text-xl">Unit Price: ${booking.price}</p>
                    <p className="text-xl">Total bill: {booking.orderQuantity * booking.price}</p>
                    <p className='text-xl'>Please pay: {booking.orderQuantity * booking.price}</p>
                </div>
            </div>
            <div className="card w-50 max-w-md">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm booking={booking} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;