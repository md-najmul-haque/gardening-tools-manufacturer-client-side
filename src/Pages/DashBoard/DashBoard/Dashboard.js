import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (

        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h1 className='text-xl lg:text-2xl text-primary uppercase text-center font-bold'>Wellcome to your dashboard</h1>
                <Outlet />
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><Link to='/dashboard/orders'>My Orders</Link></li>
                    <li><Link to='/dashboard/reviews'>My Reviews</Link></li>
                    <li><Link to='/dashboard/profile'>My Profile</Link></li>

                </ul>

            </div>

        </div>

    );
};

export default Dashboard;