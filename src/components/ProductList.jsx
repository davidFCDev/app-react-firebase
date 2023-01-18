import React, { useState, useEffect } from 'react'
import { getProducts } from '../controllers/productController';
import Product from './Product';

const ProductList = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProducts()
            .then((r) => setProductList(r.data))
            .catch((e) => console.error(e))
    }, [])
    

    return (
        <>
            {productList.length === 0 ? (
                <p></p>
            ) : (
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2  gap-4 sm:gap-3 md:grid-cols-4 lg:grid-cols-6" >
                {productList.map(
                    (product, i) => (
                    <Product
                        key={i}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                    />
                    )
                )}
                </div>
            )}
            </>
        );
    }

export default ProductList