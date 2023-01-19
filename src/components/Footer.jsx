import React, { useContext } from 'react';
import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { AppContext } from '../App';

const Footer = () => {
    const { setRoute } = useContext(AppContext);

    return (
        <footer className='fixed h-12 w-full bg-red-800 border-2 border-red-900 text-slate-900 bottom-0 flex justify-center gap-2 items-center'>
        <div className='bg-white text-xl hover:text-2xl p-2 rounded-full cursor-pointer' onClick={() => setRoute('home')}>
            <FaHome />
        </div>
        <div className='bg-white text-xl hover:text-2xl p-2 rounded-full cursor-pointer' onClick={() => setRoute('shopping')}>
            <FaShoppingCart />
        </div>
        </footer>
    )
}

export default Footer