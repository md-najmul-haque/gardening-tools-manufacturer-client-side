import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://gardening-tools-manufacturer-server.onrender.com/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(result => {
                if (result.modifiedCount > 0) {
                    refetch();
                    toast.success('Made an admin successfully')
                }
            })
    }

    return (

        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
            <td><button className="btn btn-xs">Remove User</button></td>
        </tr>

    );
};

export default UserRow;