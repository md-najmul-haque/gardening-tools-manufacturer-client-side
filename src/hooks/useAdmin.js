import React, { useEffect, useState } from 'react';

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true)
    const email = user.email
    useEffect(() => {
        fetch(`https://gardening-tools-manufacturer-server.onrender.com/admin/${email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin);
                setAdminLoading(false)
            })
    }, [email, user])
    return [admin, adminLoading]
};

export default useAdmin;