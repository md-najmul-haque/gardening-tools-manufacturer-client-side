import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const Navbar = () => {

    const [user, loading] = useAuthState(auth);

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

        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>

        {
            user && <li><Link to=''>{user?.displayName}</Link></li>
        }
        {
            user ? <button onClick={handleSignOut} className="btn btn-ghost">Sign Out</button> : <li><Link to='/login'>Login</Link></li>
        }

    </>
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-secondary font-bold text-xl">Gardening Plus</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end lg:hidden">

                <label tabindex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>

        </div>
    );
};

export default Navbar;