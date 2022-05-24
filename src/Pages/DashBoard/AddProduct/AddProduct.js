import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const [user, loading] = useAuthState(auth)

    const { register, formState: { errors }, handleSubmit } = useForm();

    if (loading) {
        return <Loading />
    }

    const onSubmit = (data, e) => {

        const review = {
            name: user.displayName,
            feedback: data.feedback,
            country: data.country,
            rating: data.rating,
        }

        fetch(`http://localhost:5000/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(result => {

                console.log(result)
            });

        e.target.reset();
        toast(`Thanks for your feedback.`)
    };

    return (
        <div className='shadow-xl bg-white'>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content w-200 shadow-xl bg-base-100 flex-col lg:flex-row mx-auto">

                    <div class="card-body w-96">
                        <h2 className="text-center text-2xl font-bold text-primary mb-2">Add New Products!</h2>

                        <form className='gap-1' onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs mb-2">
                                <input
                                    type="text"
                                    placeholder="Product Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Product name is required'
                                        }
                                    })} />
                            </div>
                            <div className="form-control w-full max-w-xs mb-2">
                                <input
                                    type="file"
                                    placeholder="Product Image"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("img", {
                                        required: {
                                            value: true,
                                            message: 'Product name is required'
                                        }
                                    })} />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <textarea
                                    type="text"
                                    placeholder="Enter product description"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: 'Product description is required'
                                        }
                                    })} />

                                <label className="label">
                                    {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="number"
                                    placeholder="Enter Product Price"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("price", {
                                        required: {
                                            value: true,
                                            message: 'Product price is required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="number"
                                    placeholder="Enter Minimum Order Quantity"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("minimumOrderQuantity", {
                                        required: {
                                            value: true,
                                            message: 'Minimum order quantity is required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.minimumOrderQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimumOrderQuantity.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="number"
                                    placeholder="Enter Available Product"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("available", {
                                        required: {
                                            value: true,
                                            message: 'Available product quantity is required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                                </label>
                            </div>

                            <input type="submit" class="btn w-full btn-primary text-white" value='Add Product' />

                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
};

export default AddProduct;