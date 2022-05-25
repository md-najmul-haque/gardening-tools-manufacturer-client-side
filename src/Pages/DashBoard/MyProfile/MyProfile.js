import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import defaultUser from '../../../assets/user/defaultUser.png'
import { useQuery } from 'react-query';

const MyProfile = () => {

    const [userProfile, setUserProfile] = useState({})
    console.log('userProfile', userProfile)
    const [user, loading] = useAuthState(auth)

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/user/email=${email}`)
                .then(res => res.json())
                .then(user => { setUserProfile(user) })
        }

    }, [user])

    const { register, formState: { errors }, handleSubmit } = useForm();

    if (loading) {
        return <Loading />
    }

    const email = user.email
    const onSubmit = (data, e) => {

        const userProfile = {
            customerName: user.displayName,
            email: email,
            education: data.education,
            linkedin: data.linkedin,
            address: data.address,
            state: data.state,
            country: data.country,
            phone: data.phone,
        }

        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userProfile)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            });
        e.target.reset();
        toast.success(`Your profile is updated successfully`)
    };




    return (
        <div className='shadow-xl bg-white'>
            <div class="hero min-h-screen">
                <div class="hero-content w-200 bg-base-100 flex-col lg:flex-row mx-auto">
                    <div class="card w-96">
                        <figure class="px-10 pt-10">
                            <img className='w-6/12' src={user.img ? user.img : defaultUser} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Name: {userProfile?.customerName}</h2>
                            <p>Email: {userProfile.email}</p>
                            <p>Price:$ {userProfile?.education} </p>
                            <p>MOQ: {userProfile?.linkedin} </p>
                            <p>Address: {userProfile?.address} </p>
                            <p>State: {userProfile?.state} </p>
                            <p>Country: {userProfile?.country} </p>
                            <p>Phone: {userProfile?.phone} </p>
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

                            <div className="form-control w-full max-w-xs mb-2">
                                <input
                                    type="text"
                                    placeholder="Enter your education"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("education")} />
                            </div>

                            <div className="form-control w-full max-w-xs mb-2">
                                <input
                                    type="text"
                                    placeholder="Enter your LinkedIn profile link"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("linkedin")} />
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
                                    placeholder="State / City"
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
                            <input type="submit" class="btn w-full btn-primary text-white" value='Update Profile' />
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyProfile;