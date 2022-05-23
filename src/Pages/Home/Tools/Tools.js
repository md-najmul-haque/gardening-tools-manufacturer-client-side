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
        <div>
            <h2>tools: {products.length}</h2>
            {
                products.map(product => <Tool key={product.id} product={product}></Tool>)
            }
        </div>
    );
};

export default Tools;