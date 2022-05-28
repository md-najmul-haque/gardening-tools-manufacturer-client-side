import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import ManageAllProduct from '../ManageAllProduct/ManageAllProduct';
import ManageProductModal from '../ManageProductModal/ManageProductModal';


const ManageProduct = () => {
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate()
    const [product, setProduct] = useState(null)
    const email = user.email;

    const { data: products, isLoading, refetch } = useQuery('products', () => fetch(`https://serene-wave-89546.herokuapp.com/tools`)
        .then(res => res.json()))

    if (loading || isLoading) {
        return <Loading />
    }


    return (
        <div className='py-10'>
            <h2 className='text-3xl text-bold text-center'>Our Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto'>
                {
                    products.map(product => <ManageAllProduct key={product._id} product={product} setProduct={setProduct}></ManageAllProduct>)
                }
            </div>
            {
                product && <ManageProductModal product={product} setProduct={setProduct} refetch={refetch}></ManageProductModal>
            }
        </div>
    );
};


export default ManageProduct;