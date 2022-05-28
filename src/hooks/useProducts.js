import { useEffect, useState } from 'react';


const useProducts = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://serene-wave-89546.herokuapp.com/tools`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return [products];
};

export default useProducts;