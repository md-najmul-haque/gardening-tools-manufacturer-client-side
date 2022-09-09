import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init'
import useToken from '../../../hooks/useToken';
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
    const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth);

    const [token] = useToken(user || gUser || fbUser);
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
            toast("Congrats! You have successfully login");
        }
    }, [from, navigate, token])

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };

    let errorMessage;

    if (loading || gLoading || fbLoading) {
        return <Loading />
    }
    if (error || gError || fbError) {
        return (
            errorMessage = <p className='text-red-600 text-center py-2'> {error?.message || gError?.message}</p>
        );
    }

    return (
        <div className=' flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("email", {
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
                            <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("password", {
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

                        <input type="submit" className="btn w-full bg-gradient-to-r from-secondary to-primary text-white mt-5" value='login' />

                    </form>

                    {errorMessage}

                    <small><span> New in Gardening Plus?</span> <Link className='text-primary' to='/signup'>Create New Account</Link ></small>

                    <div className="divider">or</div>

                    <button onClick={() => signInWithGoogle()} className="btn btn-outline text-primary hover:bg-gradient-to-r from-secondary to-primary hover:text-white">Continue with Google</button>
                    <button onClick={() => signInWithFacebook()} className="btn btn-outline text-primary hover:bg-gradient-to-r from-secondary to-primary hover:text-white">Continue with Facebook</button>
                </div>
            </div>
        </div>
    );
};

export default Login;