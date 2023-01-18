import React, { useContext } from 'react';
import { GiDiceFire } from 'react-icons/gi';
import { AppContext } from '../App';
import { getAuth, signOut } from "firebase/auth";
import { toast } from 'react-hot-toast';
import { RiLogoutCircleRLine, RiUserFill } from 'react-icons/ri';
import { BsListTask } from 'react-icons/bs';

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
        <header className='h-16 w-full bg-zinc-200 shadow-lg shadow-zinc-300 flex items-center justify-between px-8 fixed top-0'>
            <div className='flex items-center gap-2 cursor-pointer' onClick={() => setRoute("home")}>
                <GiDiceFire className='text-3xl text-red-600'/>
                <p className='text-2xl font-bold text-red-600'>Fire<span className='text-black'>Shopping</span></p>
            </div>
            <div className='flex gap-2'>
                {
                    user 
                    ? 
                    <div className='flex gap-2 w-12 justify-end'>
                        <p className='p-1 text-slate-900 italic mt-1'>{user.email}</p>
                        <button 
                            className='bg-zinc-200 text-slate-900 font-semibold py-2 px-4 rounded-md border border-slate-900 hover:bg-slate-900 hover:text-white transition'
                            onClick={() => setRoute('perfil')}
                        >
                            <RiUserFill className='text-xl'/>
                        </button>
                        <button 
                            className='bg-zinc-200 text-slate-900 font-semibold py-2 px-4 rounded-md border border-slate-900 hover:bg-slate-900 hover:text-white transition'
                            onClick={() => setRoute('tasklist')}
                        >
                            <BsListTask className='text-xl'/>
                        </button>
                        <button 
                            className='bg-zinc-200 text-slate-900 font-semibold py-2 px-4 rounded-full hover:bg-red-600 transition'
                            onClick={hazLogout}
                            >
                            <RiLogoutCircleRLine className='text-2xl'/>
                        </button>
                    </div> 
                    : 
                    (
                        <><button 
                            className='bg-zinc-200 text-slate-900 border border-slate-900 font-semibold py-2 px-4 rounded-md  hover:bg-slate-900 hover:text-white transition'
                            onClick={() => setRoute("login")}
                        >
                            Login
                        </button>
                        <button 
                            className='bg-red-600 text-white border-2 font-semibold py-2 px-4 rounded-md  hover:bg-red-700 transition'
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
