import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import defaultUser from '../../../assets/user/defaultUser.png'
import { useQuery } from 'react-query';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth)
    const [isEdit, setIsEdit] = useState(false);
    const email = user.email

    const { data: userProfile, isLoading, refetch } = useQuery('userProfile', () => fetch(`https://serene-wave-89546.herokuapp.com/user?email=${email}`)
        .then(res => {
            return res.json()
        }))

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    if (loading || isLoading) {
        return <Loading />
    }

    const handleEdit = () => {
        setIsEdit(true);
    };

    const imageStorageKey = 'd90f0f7587defd256d8cd2cd85b0500d';

    const onSubmit = data => {
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
                // console.log(result)
                const image = result.data.url

                const userProfile = {
                    customerName: user.displayName,
                    email: email,
                    education: data.education,
                    linkedin: data.linkedin,
                    github: data.github,
                    address: data.address,
                    state: data.state,
                    country: data.country,
                    phone: data.phone,
                    img: image
                }
                fetch(`https://serene-wave-89546.herokuapp.com/user/${email}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result)
                        if (result.result.acknowledged === true) {
                            toast.success(`Your profile is updated successfully`)
                            reset();
                            setIsEdit(false);
                            refetch();
                        } else {
                            toast.error(`Sorry! Internal server error, please try after sometime`)
                        }
                    });
            })
    };

    return (
        <div className=" flex justify-center items-center mt-10">
            <div className=" card  shadow-lg w-96 lg:w-6/12 px-5 lg:px-10">
                <form className='gap-1' onSubmit={handleSubmit(onSubmit)}>

                    <div className="w-full bg-base-200 my-2 flex flex-row justify-center">
                        <div className="px-10 py-5 w-5/6 lg:w-10/12">
                            {isEdit ? (

                                <input
                                    type="file"
                                    className="input input-bordered input-secondary w-full"

                                    {...register("image")}
                                />
                            ) : (
                                <div className="avatar flex items-center justify-center">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={userProfile.img ? userProfile.img : defaultUser} alt='' />
                                    </div>
                                </div>

                            )}
                        </div>
                    </div>

                    <h1 className="text-xl font-bold">{user?.displayName}</h1>
                    <p>{user?.email}</p>

                    {
                        isEdit ? <div className="form-control w-full max-w-xs mb-2">
                            <input
                                type="text"
                                placeholder="Enter your education"
                                className="input input-bordered w-full max-w-xs"
                                {...register("education")} />
                        </div>
                            : <p>Education: {userProfile?.education} </p>
                    }

                    {
                        isEdit ? <div className="form-control w-full max-w-xs mb-2">
                            <input
                                type="text"
                                placeholder="Enter your LinkedIn profile link"
                                className="input input-bordered w-full max-w-xs"
                                {...register("linkedin")} />
                        </div> : <p>LinkedIn: {userProfile?.linkedin} </p>
                    }

                    {
                        isEdit ? <div className="form-control w-full max-w-xs mb-2">
                            <input
                                type="text"
                                placeholder="Enter your GitHub profile link"
                                className="input input-bordered w-full max-w-xs"
                                {...register("github")} />
                        </div> : <p>GitHub: {userProfile?.github} </p>
                    }

                    {
                        isEdit ? <div className="form-control w-full max-w-xs mb-2">
                            <input
                                type="text"
                                placeholder="Your Address"
                                className="input input-bordered w-full max-w-xs"
                                {...register("address")} />

                        </div> : <p>Address: {userProfile?.address} </p>
                    }

                    {
                        isEdit ? <div className="form-control w-full max-w-xs mb-2">
                            <input
                                type="text"
                                placeholder="State / City"
                                className="input input-bordered w-full max-w-xs"
                                {...register("state")} />
                        </div> : <p>State: {userProfile?.state} </p>
                    }

                    {
                        isEdit ? <div className="form-control w-full max-w-xs mb-2">
                            <input
                                type="text"
                                placeholder="Country"
                                className="input input-bordered w-full max-w-xs"
                                {...register("country")} />
                        </div> : <p>Country: {userProfile?.country} </p>
                    }

                    {
                        isEdit ? <div className="form-control w-full max-w-xs mb-2">
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="input input-bordered w-full max-w-xs"
                                {...register("phone")} />
                        </div> : <p>Phone: {userProfile?.phone} </p>

                    }

                    <div className=" flex flex-row justify-evenly items-center py-5">
                        <button
                            className="btn btn-primary px-7"
                            disabled={isEdit}
                            onClick={handleEdit}
                        >
                            Edit
                        </button>
                        <input
                            type="submit"
                            className="btn btn-secondary"
                            value='Update Profile'
                            disabled={!isEdit}
                        />
                    </div>

                </form>

            </div>

        </div>);
};

export default MyProfile;