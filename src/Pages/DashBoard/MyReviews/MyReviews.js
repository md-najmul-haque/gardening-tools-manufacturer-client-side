import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';

const MyReviews = () => {

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
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content w-200 shadow-xl bg-base-100 flex-col lg:flex-row mx-auto">

                    <div className="card-body w-96">
                        <h2 className="text-center text-2xl font-bold text-primary mb-2">Add Your Reviews!</h2>

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

                            <div className="form-control w-full max-w-xs">
                                <textarea
                                    type="text"
                                    placeholder="Write your review here"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("feedback", {
                                        required: {
                                            value: true,
                                            message: 'Your address is required'
                                        }
                                    })} />

                                <label className="label">
                                    {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
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
                                    type="number"
                                    placeholder="Your rating from 1 to 5"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("rating", {
                                        min: {
                                            value: 1,
                                            message: "Sorry! You can't give rating less than 1"
                                        },
                                        max: {
                                            value: 5,
                                            message: `Sorry! You can't give rating more than 5`
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.number?.type === 'min' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                                    {errors.number?.type === 'max' && <span className="label-text-alt text-red-500">{errors.number.message}</span>}
                                </label>
                            </div>
                            <input type="submit" className="btn w-full btn-primary" value='Publish' />

                        </form>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default MyReviews;