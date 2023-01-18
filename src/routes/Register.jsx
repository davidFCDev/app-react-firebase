import React, { useContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-hot-toast';
import { AppContext } from '../App';

const auth = getAuth();

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setRoute, setUser } = useContext(AppContext);

    const creaUsuario = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user);
            toast(`¡Usuario ${email} registrado correctamente!`);
            // setEmail("");
            // setPassword("");
            setUser(user);
            setRoute("home")
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            });
    }
    const handleSubmit = e => {
        e.preventDefault();
        creaUsuario();
    }   

    return (
        <div className='flex flex-col gap-4 items-center mt-10'>
            <h1 className='text-xl font-bold text-gray-800 text center'>Register</h1>
            <p className='text-sm italic'>Create a new user!</p>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2 max-w-sm'>
                <input 
                    className='border bg-slate-100 border-gray-300 rounded py-1 px-2 outline-none'
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                    placeholder='User'
                    />
                <input 
                    className='border bg-slate-100 border-gray-300 rounded py-1 px-2 outline-none'
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)} 
                    placeholder='Password'
                    />
                <button className='bg-red-600 py-1 text-white font-semibold hover: hover:bg-red-700 rounded shadow-slate-300 shadow-sm'>Send</button>
            </form>
        </div>
    );
}

export default Register;
