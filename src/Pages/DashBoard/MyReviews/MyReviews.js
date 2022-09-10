import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const colors = {
    orange: '#FFBA5A',
    grey: '#a9a9a9',
}

const MyReviews = () => {
    const [user, loading] = useAuthState(auth)
    const [rating, setRating] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const stars = Array(5).fill(0);

    const handleClick = (value) => {
        setRating(value);
    }
    const handleMouseOver = (newHoverValue) => {
        setHoverValue(newHoverValue);
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    }

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

        fetch(`https://serene-wave-89546.herokuapp.com/reviews`, {
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
        <div className="w-96 lg:w-1/2 h-screen p-10 mx-auto">

            <h2 className="text-center text-2xl font-bold text-primary mb-2">Add Your Reviews!</h2>

            <form className='gap-1' onSubmit={handleSubmit(onSubmit)}>

                <div className="avatar flex justify-center">
                    <div className="w-24 mx-auto rounded-full ring ring-primary ring-offset-2">
                        <img src={`${user?.photoURL ? user?.photoURL : 'https://i.pravatar.cc/300'}`} alt={`${user?.displayName}`} />
                    </div>
                </div>
                <h2 className="text-2xl text-center my-3 font-bold">{user?.displayName}</h2>

                <div className="flex flex-row justify-center pb-3">
                    {stars.map((_, index) => {
                        return (
                            <FontAwesomeIcon
                                icon={faStar}
                                key={index}
                                size={24}
                                onClick={() => handleClick(index + 1)}
                                onMouseOver={() => handleMouseOver(index + 1)}
                                onMouseLeave={handleMouseLeave}
                                color={
                                    (hoverValue || rating) > index ? colors.orange : colors.grey
                                }
                                style={{
                                    marginRight: 10,
                                    cursor: "pointer",
                                }}
                            />
                        );
                    })}
                </div>

                <div className="form-control w-full">
                    <textarea
                        type="text"
                        placeholder="Write your review here"
                        className="input input-bordered focus:border-primary focus:outline-primary h-24"
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

                <div className="form-control w-full">
                    <input
                        type="text"
                        placeholder="Country"
                        className="input input-bordered focus:border-primary focus:outline-primary"
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

                <input type="submit" className="btn w-full btn-primary" value='Publish' />
            </form>
        </div>

    );
};

export default MyReviews;