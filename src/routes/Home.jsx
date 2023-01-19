import React from 'react';
import { FaShopify, FaPercentage } from 'react-icons/fa';

const Home = () => {
    return (
        <section className='mx-16'>
            <main className='flex ml-10 mt-8'>
                <div className='flex flex-col w-44 md:w-60'>
                    <h1 className='text-xl md:text-3xl font-bold py-3 mt-16'>
                        <span className='text-2xl md:text-4xl'>
                            W
                        </span>
                            elcome to
                        </h1>
                    <h1 className='text-xl md:text-3xl font-bold pl-10'>
                        <span className='text-red-600'>
                            <span className='md:text-4xl'>
                                F
                            </span>
                            ire
                        </span>
                        Shopping
                    </h1>
                    <p className='italic mt-4 md:mt-6 text-sm text-center md:text-lg'>Start buying from our suppliers in more than fifteen countries.</p>
                </div>
                <img 
                    className='mt-10 w-24 h-24 md:w-auto md:h-auto' 
                    alt='' 
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZTmRvAWLGcLhcHpVeeZDwXk8SlxbZYjAB7w&usqp=CAU' />
            </main>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 my-16 pb-20'>
                    <img 
                        className='w-auto h-auto md:w-80 md:h-50 rounded-3xl shadow-lg shadow-zinc-200 hover:shadow-zinc-400' 
                        alt='' 
                        src='https://static.doofinder.com/main-files/uploads/2020/05/vender-una-tienda-online.jpg' />
                    <div className='text-left px-6 md:px-10 py-5'>
                        <h1 className='font-bold text-red-800 text-sm md:text-xl flex gap-3'>
                            Buy from anywhere
                            <FaShopify className='text-2xl text-red-700'/>
                        </h1>
                        <p className='pt-6 text-sm md:text-xl'>Download our App and buy from anywhere. </p>
                        <p className='font-extralight italic pt-1 text-sm md:text-lg'>IOS, Android and web.</p>
                    </div>
                    <img 
                        className='w-auto h-auto md:w-80 md:h-50 rounded-3xl shadow-lg shadow-zinc-200 hover:shadow-zinc-400' 
                        alt='' 
                        src='https://img.freepik.com/vector-gratis/mega-venta-letras-bolsas-compra-carrito_1262-15855.jpg?w=2000' />
                    <div className='text-left px-6 md:px-10 py-5 '>
                        <h1 className='font-bold text-red-800 text-sm md:text-xl flex gap-3'>
                            Big sales
                            <FaPercentage className='text-2xl text-red-700'/>
                        </h1>
                        <p className='pt-6 text-sm md:text-lg'>Enjoy the best discounts at any time of the year.</p>
                        <p className='font-extralight italic pt-1 text-sm md:text-lg'>Don't forget to check our promotions.</p>
                    </div>
            </div>
        </section>
    );
}

export default Home;
