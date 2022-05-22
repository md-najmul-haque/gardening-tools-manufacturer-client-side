import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assets/notFound/notFound.jpg'

const NotFound = () => {
    return (
        <div className='flex justify-center py-10'>
            <div>
                <img src={notFound} alt="" />
                <Link to='/' class="btn btn-outline btn-primary flex justify-center">Back to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;