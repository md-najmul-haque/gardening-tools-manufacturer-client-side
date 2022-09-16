import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Tool from '../Tool/Tool';

const Tools = () => {

    const [products] = useProducts()

    return (
        <div id='products' className='py-10'>
            <h2 className='text-3xl pb-3 font-bold text-transparent uppercase bg-clip-text bg-gradient-to-r from-secondary to-primary mb-5 text-center'>Feature Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto'>
                {
                    products.map(product => <Tool key={product._id} product={product}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;