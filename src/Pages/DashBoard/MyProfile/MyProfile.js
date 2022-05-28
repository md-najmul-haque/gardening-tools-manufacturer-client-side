import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import defaultUser from '../../../assets/user/defaultUser.png'
import { useQuery } from 'react-query';

const MyProfile = () => {

    const [user, loading] = useAuthState(auth)
    const email = user.email

    const { data: userProfile, isLoading, refetch } = useQuery('userProfile', () => fetch(`http://localhost:5000/user?email=${email}`)
        .then(res => {
            return res.json()
        }))

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    if (loading || isLoading) {
        return <Loading />
    }
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
                console.log(result)
                const image = result.data.url

                const userProfile = {
                    customerName: user.displayName,
                    email: email,
                    education: data.education,
                    linkedin: data.linkedin,
                    address: data.address,
                    state: data.state,
                    country: data.country,
                    phone: data.phone,
                    img: image
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
                        toast.success(`Your profile is updated successfully`)
                        refetch();
                        reset();

                    });
            })

    };

    return (

        <div className="hero">
            <div className="hero-content flex flex-col lg:flex-row justify-center">
                <div className="card w-96">
                    <figure className="px-10 pt-10">
                        <img className='w-6/12' src={userProfile.img ? userProfile.img : defaultUser} alt="" className="rounded" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: {userProfile?.customerName}</h2>
                        <p>Email: {userProfile.email}</p>
                        <p>Education: {userProfile?.education} </p>
                        <p>LinkedIn: {userProfile?.linkedin} </p>
                        <p>Address: {userProfile?.address} </p>
                        <p>State: {userProfile?.state} </p>
                        <p>Country: {userProfile?.country} </p>
                        <p>Phone: {userProfile?.phone} </p>
                    </div>

                </div>

                <div className="card-body w-96">
                    <h2 className="text-primary text-2xl font-bold">Update Your Profile!</h2>

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
                                className="input input-bordered w-full max-w-xs"
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

                        <div className="form-control w-full max-w-xs mb-2">
                            <input
                                type="text"
                                placeholder="Your Address"
                                className="input input-bordered w-full max-w-xs"
                                {...register("address")} />

                        </div>

                        <div className="form-control w-full max-w-xs mb-2">
                            <input
                                type="text"
                                placeholder="State / City"
                                className="input input-bordered w-full max-w-xs"
                                {...register("state")} />
                        </div>

                        <div className="form-control w-full max-w-xs mb-2">
                            <input
                                type="text"
                                placeholder="Country"
                                className="input input-bordered w-full max-w-xs"
                                {...register("country")} />
                        </div>

                        <div className="form-control w-full max-w-xs mb-2">
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="input input-bordered w-full max-w-xs"
                                {...register("phone")} />
                        </div>

                        <div className="form-control w-full max-w-xs mb-2">
                            <input
                                type="file"
                                placeholder="Product Image"
                                className="input input-bordered w-full max-w-xs"
                                {...register("image")} />
                        </div>

                        <input type="submit" className="btn w-full btn-primary text-white max-w-xs" value='Update Profile' />
                    </form>

                </div>

            </div>
        </div>

    );
};

export default MyProfile;