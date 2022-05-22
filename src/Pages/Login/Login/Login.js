import React from 'react';

const Login = () => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl flex justify-center">
            <div class="card-body">
                <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" placeholder="Type here" class="input input-bordered input-secondary w-full max-w-xs" />
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;