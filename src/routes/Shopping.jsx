import React from 'react';
import ProductList from '../components/ProductList';

const Shopping = () => {
    return (
        <div className='text-center px-10 py-24'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'><span className='text-red-600'>On</span>line Store</h1>
                <p className='italic'>discover all our products...</p>
            </div>
            <ProductList />
        </div>
    );
}

export default Shopping;
