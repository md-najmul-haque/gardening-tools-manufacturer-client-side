import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Tool from '../Tool/Tool';

const Tools = () => {

    const [products] = useProducts()

    return (
        <div className='py-10'>
            <h2 className='text-4xl font-bold text-primary mb-5 text-center'>Feature Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto'>
                {
                    products.map(product => <Tool key={product._id} product={product}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;