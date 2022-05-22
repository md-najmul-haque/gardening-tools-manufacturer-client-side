import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import Loading from '../../Shared/Loading/Loading';

const Login = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    let from = location.state?.from?.pathname || "/";

    let errorMessage;

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };

    if (loading || gLoading) {
        return <Loading />
    }
    if (error || gError) {
        return (

            errorMessage = <p> {gError?.message}</p>

        );
    }

    if (user || gUser) {
        console.log(gUser)
        navigate(from, { replace: true });
    }

    return (
        <div className=' flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
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

                        <input type="submit" class="btn w-full btn-primary mt-5" value='login' />

                    </form>
                    <small><span> New in Gardening Plus?</span> <Link className='text-primary' to='/signup'>Create New Account</Link ></small>

                    <div class="divider">or</div>

                    <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-primary">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;