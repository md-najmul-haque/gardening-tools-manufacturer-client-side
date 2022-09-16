import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import Loading from '../../Shared/Loading/Loading';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth)
    const [admin, adminLoading] = useAdmin(user)

    if (loading || adminLoading) {
        return <Loading />
    }

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h1 className='text-xl lg:text-2xl text-primary uppercase text-center my-5 font-bold'>Welcome to your dashboard</h1>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-10 overflow-y-auto w-64 bg-lime-900 text-white">

                    {
                        !admin && <>
                            <li><Link to='/dashboard/orders'>My Orders</Link></li>
                            <li><Link to='/dashboard/reviews'>My Reviews</Link></li>
                        </>
                    }
                    <li><Link to='/dashboard/profile'>My Profile</Link></li>
                    {
                        admin && <>
                            <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
                            <li><Link to='/dashboard/manageOrder'>Manage Orders</Link></li>
                            <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                            <li><Link to='/dashboard/manageProduct'>Manage Products</Link></li>
                        </>
                    }

                </ul>

            </div>

        </div>

    );
};

export default Dashboard;