import React, { useEffect, useState } from 'react';

const useToken = user => {
    const [token, setToken] = useState('')
    useEffect(() => {
        console.log('token', user)
        const email = user?.user?.email
        // const customerName = user?.user?.displayName
        const userProfile = {
            email: email
        }

        if (user) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userProfile)
            })
                .then(res => res.json())
                .then(result => {
                    console.log('inside token', result)
                    const accessToken = result.token;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken);

                });
        }
    }, [user])
    return [token]
};

export default useToken;