import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = 'd90f0f7587defd256d8cd2cd85b0500d'

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {

                if (result.success) {
                    const img = result.data.url;

                    const tool = {
                        name: data.name,
                        img: img,
                        description: data.description,
                        price: data.price,
                        minimumOrderQuantity: data.minimumOrderQuantity,
                        available: data.available,
                    }

                    fetch(`http://localhost:5000/tools`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer, ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(tool)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.insertedId) {
                                toast(`New product ${data.name} added successfully`)
                                reset();
                            } else {
                                toast(`Failed to add a product`)
                            }
                        });
                }
            })
    };

    return (

        <div className="hero">
            <div className="hero-content flex-col lg:flex-row justify-start">

                <div className="card-body w-96">
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
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs mb-2">
                            <input
                                type="file"
                                placeholder="Product Image"
                                className="input input-bordered w-full max-w-xs"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Product image is required'
                                    }
                                })} />

                            <label className="label">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                            </label>
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
                                {errors.available?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available.message}</span>}
                            </label>
                        </div>

                        <input type="submit" className="btn w-full btn-primary text-white max-w-xs" value='Add Product' />

                    </form>

                </div>

            </div>
        </div>

    )
};

export default AddProduct;