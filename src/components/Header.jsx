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
        <header className='h-16 w-full bg-gray-500 shadow-lg shadow-gray-500 flex items-center justify-between px-8 fixed top-0'>
            <div className='flex items-center gap-2 cursor-pointer' onClick={() => setRoute("home")}>
                <GiDiceFire className='text-2xl text-emerald-400'/>
                <span className='text-xl font-semibold text-white'>FireShopping</span>
            </div>
            <div className='flex gap-2'>
                {
                    user 
                    ? 
                    <div className='flex gap-2 w-12 justify-end'>
                        <p className='p-1 text-gray-100 italic text-slate-700 mt-1'>{user.email}</p>
                        {/* <button className='bg-gray-600 text-white py-2 px-4 rounded-lg shadow-sm shadow-zinc-400 hover:bg-gray-500 transition'>
                            <RiShoppingCart2Fill className='text-xl text-g'/>
                        </button> */}
                        <button className='bg-gray-500 text-white font-semibold py-2 px-4 rounded-md  hover:bg-gray-400 transition'>
                            <BsListTask 
                                className='text-xl'
                                onClick={() => setRoute('tasklist')}
                                />
                        </button>
                        <button className='bg-gray-500 text-white font-semibold py-2 px-4 rounded-md  hover:bg-gray-400 transition'>
                            <RiUserFill 
                                className='text-xl'
                                onClick={() => setRoute('perfil')}
                                />
                        </button>
                        <button 
                            className='bg-gray-500 text-white font-semibold py-2 px-4 rounded-full  hover:bg-gray-400 transition'
                            onClick={hazLogout}
                            >
                            <RiLogoutCircleRLine className='text-2xl'/>
                        </button>
                    </div> 
                    : 
                    (
                        <><button 
                            className='bg-gray-500 text-white font-semibold py-2 px-4 rounded-md  hover:bg-gray-400 transition'
                            onClick={() => setRoute("login")}
                        >
                            Login
                        </button>
                        <button 
                            className='bg-gray-500 text-white border-gray-400 border-2 font-semibold py-2 px-4 rounded-md  hover:bg-gray-400 transition'
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
