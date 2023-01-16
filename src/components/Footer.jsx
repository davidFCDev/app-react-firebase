import React, { useContext } from 'react';
import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { BsList } from 'react-icons/bs';
import { AppContext } from '../App';

const Footer = () => {
    const { setRoute } = useContext(AppContext);

    return (
        <footer className='fixed h-16 w-full bg-emerald-200 bottom-0 flex justify-center gap-2 items-center'>
        <div className='bg-white text-2xl hover:text-3xl p-2 rounded-full cursor-pointer' onClick={() => setRoute('home')}>
            <FaHome />
        </div>
        <div className='bg-white text-2xl hover:text-3xl p-2 rounded-full cursor-pointer' onClick={() => setRoute('shopping')}>
            <FaShoppingCart />
        </div>
        </footer>
    )
}

export default Footer