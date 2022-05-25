import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../Shared/Loading/Loading';


const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [displayName, setDisplayName] = useState('');
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate()
    const [token] = useToken(user || gUser)

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        // setDisplayName(data.name)
        await updateProfile({ displayName: data.name });
        console.log(data)
    };

    let errorMessage;

    if (loading || gLoading || updating) {
        return <Loading />
    }
    if (error || gError || updateError) {
        return (

            errorMessage = <p> {gError?.message}</p>

        );
    }

    if (token) {
        console.log(gUser)
        navigate('/')
    }


    return (
        <div className=' flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
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

                        {errorMessage}

                        <input type="submit" class="btn w-full btn-primary mt-5" value='Sign Up' />

                    </form>
                    <small><span> Already have an account?</span> <Link className='text-primary' to='/login'>Login</Link ></small>

                    <div class="divider">or</div>

                    <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-primary">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;