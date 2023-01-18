import React from 'react';
import ProductList from '../components/ProductList';

const Shopping = () => {
    return (
        <div className='text-center'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>Tienda Online</h1>
                <p className='italic'>Descubre nuestros productos...</p>
            </div>
            <ProductList />
        </div>
    );
}

export default Shopping;
