
import './output.css';
import LoginComponent from './routes/login';
import SignComponent from './routes/signup';
import HomeComponent from './routes/home';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import { useState } from 'react';

function App() {
  const[currentSong,setCurrentSong]=useState(null);
  const [cookie, useCookie] = useCookies("token");
  return (
    <div className="App">

      <div className='w-screen h-screen'>
        <BrowserRouter>

          {cookie.token ? (
           
              <Routes>
                <Route path="/login" element={<LoginComponent />} />
                <Route path="/signup" element={<SignComponent />}/>
                <Route path='/home' element={<HomeComponent />} />
                
                <Route path='/*' element={<Navigate to="/home" />} />
              </Routes> )
            :
            (
              <Routes>
                
                <Route path='/*' element={<Navigate to="/signup" />} />
              </Routes>
            )}

        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
