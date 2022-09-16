import { useEffect, useState } from 'react';

const useToken = user => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email
        // const customerName = user?.user?.displayName
        const userProfile = {
            email: email
        }

        if (user) {
            fetch(`https://gardening-tools-manufacturer-server.onrender.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userProfile)
            })
                .then(res => res.json())
                .then(result => {
                    const accessToken = result.token;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken);

                });
        }
    }, [user])
    return [token]
};

export default useToken;