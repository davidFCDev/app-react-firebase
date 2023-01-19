import { app, messaging } from './firebase'
import React, { createContext, useContext, useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import Shopping from './routes/Shopping';
import Footer from './components/Footer';
import Perfil from './routes/Perfil';
import { TaskList } from './components/TaskList';
import { Toaster, toast } from 'react-hot-toast';
import { onMessage } from 'firebase/messaging';

export const AppContext = createContext(null);

onMessage(messaging, payload => {
  toast.custom(t => (
    <div className='bg-gray-100 p-4 rounded-lg shadow-md '>
      <h1 className='text-lg text-gray-800 font-semibold'>{payload.notification.title}</h1>
      <p className='text-sm italic'>{payload.notification.body}</p>
    </div>
    )
  );
});

function App() {
  const [route, setRoute] = useState("home");
  const [user, setUser] = useState(null);

  return (
      <AppContext.Provider value={{ route, setRoute, user, setUser }} >
        <div className='h-screen'>
          <Toaster />
          <Header />
          <main >
            {route === "home" && <Home />}
            {route === "login" && <Login />}
            {route === "register" && <Register />}
            {route === "shopping" && <Shopping />}
            {route === "tasklist" && <TaskList />}
            {route === "perfil" && <Perfil />}
          </main> 
          <Footer>
          
          </Footer>
        </div>
      </AppContext.Provider>
  );
}

export default App;
