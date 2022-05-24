import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { toast } from 'react-toastify';

const Purchase = () => {
    const { id } = useParams()
    const orderQuantity = useRef('');
    const navigate = useNavigate()

    const [user, loading] = useAuthState(auth)
    console.log(user)
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { data: tool, isLoading } = useQuery('tool', () => fetch(`http://localhost:5000/tools/${id}`)
        .then(res => res.json()))

    if (loading || isLoading) {
        return <Loading />
    }

    const { _id, name, img, description, price, available, minimumOrderQuantity } = tool

    const onSubmit = (data, e) => {

        const booking = {
            customerName: user.displayName,
            email: user.email,
            address: data.address,
            state: data.state,
            country: data.country,
            phone: data.phone,

            id: _id,
            toolName: name,
            price,
            orderQuantity: data.number

        }
        fetch(`http://localhost:5000/booking`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(result => {

                console.log(result)
            });
        toast(`Your booking for ${name} is placed successfully`)
        e.target.reset();
        navigate('/')
    };

    return (
        <div className='shadow-xl bg-white'>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content w-200 shadow-xl bg-base-100 flex-col lg:flex-row mx-auto">
                    <div class="card w-96">
                        <figure class="px-10 pt-10">
                            <img className='w-6/12' src={img} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">{name}</h2>
                            <p>{description}</p>
                            <p>Price:$ {price} </p>
                            <p>MOQ: {minimumOrderQuantity} pcs</p>
                            <p>Available Quantity: {available} pcs</p>
                        </div>

                    </div>

                    <div class="card-body w-96">
                        <h2 className="text-center text-2xl font-bold">Place Your Order!</h2>

                        <form className='gap-1' onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs mb-2">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs"
                                    value={user?.displayName}
                                    disabled
                                    {...register("name")} />
                            </div>

                            <div className="form-control w-full max-w-xs mb-2">
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    class="input input-bordered w-full max-w-xs"
                                    value={user?.email}
                                    disabled
                                    {...register("email")} />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="text"
                                    placeholder="Your Address"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'Your address is required'
                                        }
                                    })} />

                                <label className="label">
                                    {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="text"
                                    placeholder="State"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("state", {
                                        required: {
                                            value: true,
                                            message: 'State is required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.state?.type === 'required' && <span className="label-text-alt text-red-500">{errors.state.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="text"
                                    placeholder="Country"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("country", {
                                        required: {
                                            value: true,
                                            message: 'Country is required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.country?.type === 'required' && <span className="label-text-alt text-red-500">{errors.country.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Phone is required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="number"
                                    ref={orderQuantity}
                                    defaultValue={100}
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("number", {
                                        min: {
                                            value: 100,
                                            message: "Sorry! You can't order less than 100pcs"
                                        },
                                        max: {
                                            value: `${tool.available}`,
                                            message: `Sorry! You can't order more than our available quantity`
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.number?.type === 'min' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                                    {errors.number?.type === 'max' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                                </label>
                            </div>

                            <input type="submit" class="btn w-full btn-primary" value='Place Order' />
                            {/*  disabled={minimumOrderQuantity > orderQuantity || available < orderQuantity} */}
                        </form>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default Purchase;