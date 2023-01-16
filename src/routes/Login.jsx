import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-hot-toast';
import { useContext } from 'react';
import { AppContext } from '../App';
import { FcGoogle } from 'react-icons/fc'


const auth = getAuth();
const provider = new GoogleAuthProvider();

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser, setRoute } = useContext(AppContext)

    const hazLoginGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
                console.log('token',token)
                console.log('user',user)
                setUser(user);
                setRoute('home');
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    const hazLoginConEmail = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                toast('Inicio de sesión válido');
                setUser(user);
                setRoute('home');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast('No existe el usuario');
            });
    }

    return (
        <div className='flex flex-col gap-2 mt-10'>
            <div className='flex flex-col items-center gap-3'>
                <h1 className='text-xl font-bold text-gray-800 mb-2'>Login</h1>
                <p className='text-sm'>Logea tu usuario</p>
                <form onSubmit={hazLoginConEmail} className='flex flex-col gap-2 max-w-xs'>
                <input className='border bg-slate-100 border-gray-300 rounded py-1 px-2 outline-none' type='email' value={email} onChange={e => setEmail(e.target.value)} />
                <input className='border bg-slate-100 border-gray-300 rounded py-1 px-2 outline-none' type='password' value={password} onChange={e => setPassword(e.target.value)} />
                <button className='bg-emerald-200 py-1 text-gray-600 font-semibold hover: hover:bg-emerald-300 rounded shadow-slate-300 shadow-sm'>Enviar</button>
                <div className='flex items-center gap-2 cursor-pointer '>
                    <button className='italic text-slate-700 hover:text-slate-400 transition' type='button' onClick={hazLoginGoogle}>...o haz login con Google</button>
                    <FcGoogle className=''/>
                </div>
            </form>
            </div>
        </div>
    );
}

export default Login;
