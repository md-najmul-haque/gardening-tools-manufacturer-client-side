import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useQuery } from 'react-query';
import { useParams, useSearchParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const Purchase = () => {
    const { id } = useParams()
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { data: tool, loading } = useQuery('tool', () => fetch(`http://localhost:5000/tools/${id}`)
        .then(res => res.json()))

    if (loading) {
        return <Loading />
    }



    const onSubmit = data => {
        console.log(data)
    };



    return (
        <div className='shadow-xl bg-white'>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content w-200 shadow-xl bg-base-100 flex-col lg:flex-row mx-auto">
                    <div class="card w-96">
                        <figure class="px-10 pt-10">
                            <img className='w-6/12' src={tool.img} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">{tool.name}</h2>
                            <p>{tool.description}</p>
                            <p>Price:$ {tool.price} </p>
                            <p>MOQ: {tool.minimumOrderQuantity} pcs</p>
                            <p>Available Quantity: {tool.available} pcs</p>
                        </div>

                    </div>

                    <div class="card-body w-96">
                        <h2 className="text-center text-2xl font-bold">Sign Up</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please provide valid email address'
                                    }
                                })} />

                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <input type="password" placeholder="Type here" class="input input-bordered w-full max-w-xs" {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password length must be six character or more'
                                    }
                                })} />

                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>

                            <input type="submit" class="btn w-full btn-primary mt-5" value='Place Order' />

                        </form>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default Purchase;