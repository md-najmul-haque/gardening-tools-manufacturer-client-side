import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import gardeningLogo from '../../../assets/logo/gardeningLogo.png'
import { HashLink } from 'react-router-hash-link';

const DashboardNavbar = () => {

    const [user, loading] = useAuthState(auth);
    console.log(user)

    const navigate = useNavigate()

    if (loading) {
        return <Loading />
    }

    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
        navigate('/')
    }

    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }

        {
            user && <li><Link to=''>{user?.displayName}</Link></li>
        }
        {
            user ? <>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={`${user?.photoURL}`} alt='' />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black text-white rounded-box w-52">
                        <li><Link to='/dashboard/profile'>View Profile</Link></li>
                        <li><Link onClick={handleSignOut} to='/'>Sign Out</Link></li>
                    </ul>
                </div>
            </>
                : <li><Link to='/login'>Login</Link></li>
        }

    </>
    return (
        <div className="navbar bg-black  text-white font-medium sticky px-3 top-0 z-30">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to='/'><div className='flex items-center'>
                    <span className='w-11 '><img src={gardeningLogo} alt="" /> </span><span className="btn btn-ghost normal-case font-semibold text-xl pl-2">Gardening Plus</span></div>
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end lg:hidden">

                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>

        </div>
    );
};

export default DashboardNavbar;