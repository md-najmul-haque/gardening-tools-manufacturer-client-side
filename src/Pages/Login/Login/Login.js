import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div class="card w-96 bg-base-100 shadow-xl flex justify-center">
            <div class="card-body">

                <form onSubmit={handleSubmit(onSubmit)}>


                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" {...register("email", { required: true })} />

                    {errors.name?.type === 'required' && "Your email is required"}

                    <input type="password" placeholder="Type here" class="input input-bordered w-full max-w-xs" {...register("password", { required: true })} />
                    {errors.password && "Your password is required"}

                    <input type="submit" class="btn btn-primary" />
                </form>
            </div>
        </div>
    );
};

export default Login;