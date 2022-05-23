import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';

const Tools = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`products.json`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='py-10'>
            <h2 className='text-3xl text-bold text-center'>Our Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto'>
                {
                    products.map(product => <Tool key={product.id} product={product}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;