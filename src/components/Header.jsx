import React, { useContext } from 'react';
import { GiFire } from 'react-icons/gi';
import { AppContext } from '../App';
import { getAuth, signOut } from "firebase/auth";
import { toast } from 'react-hot-toast';
import { RiLogoutCircleRLine, RiUserFill } from 'react-icons/ri';
import { ImageAvatarIcon } from './Avatar';



const auth = getAuth();

const Header = () => {
    const { setRoute, user, setUser } = useContext(AppContext);

    const hazLogout = () => {
        signOut(auth)
        .then(() => {
            setRoute('login');
            setUser(null);
            toast('El usuario ha hecho logout')
        }).catch((error) => {
            console.error(error)
        });
    }
    
    return (
            <header className='h-16 w-full bg-zinc-100 shadow-md shadow-zinc-400 flex items-center justify-between px-4 md:px-8 fixed top-0'>
                <div className='flex items-center gap-1 md:gap-2 cursor-pointer' onClick={() => setRoute("home")}>
                    <GiFire className='text-xl md:text-3xl text-red-600'/>
                    <p className='text-xl md:text-2xl font-bold text-red-600'>Fire<span className='text-black'>Shopping</span></p>
                </div>
                <div className='flex gap-1 md:gap-2 '>
                    {
                        user 
                        ? 
                        <div className='flex gap-1 md:gap-3'>
                                <div className='opacity-100 sm:opacity-0'>
                                </div>
                                <button 
                                    className='bg-zinc-100 text-slate-900 font-semibold px-2 md:py-2 md:px-4 hover:text-red-600 transition'
                                    onClick={() => setRoute('perfil')}
                                >
                                    <RiUserFill className='text-xl md:text-2xl'/>
                                </button>
                                <button 
                                    className='bg-zinc-100 text-slate-900 font-semibold px-2 md:py-2 md:px-4 hover:text-red-600 transition'
                                    onClick={hazLogout}
                                    >
                                    <RiLogoutCircleRLine className='text-2xl'/>
                                </button>
                        </div> 
                        : 
                        (
                            <>
                            <button 
                                className='bg-zinc-100 text-slate-900 border border-slate-900 font-semibold py-1 px-2 md:py-2 md:px-4 rounded-md  hover:bg-slate-900 hover:text-white transition'
                                onClick={() => setRoute("login")}
                            >
                                Login
                            </button>
                            <button 
                                className='bg-red-600 text-white border-2 font-semibold py-1 px-2 md:py-2 md:px-4 rounded-md  hover:bg-red-700 transition'
                                onClick={() => setRoute("register")}
                            >
                                Register
                            </button>
                        </>
                        )
                    }
                </div>
            </header>
    );
}

export default Header;
