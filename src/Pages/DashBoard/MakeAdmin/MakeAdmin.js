import { useQuery } from '@tanstack/react-query';
import React from 'react';

import Loading from '../../Shared/Loading/Loading';
import UserRow from '../UserRow/UserRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery(['users'], () => fetch(`https://gardening-tools-manufacturer-server.onrender.com/users`, {
        method: "GET",
        headers: { authorization: `Bearer, ${localStorage.getItem('accessToken')}` }

    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='px-10'>
            <h1 className='text-xl lg:text-2xl text-primary uppercase text-center mt-10 font-bold'>Admin Route</h1>
            <h2 className="text-2xl mb-3">Total Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;