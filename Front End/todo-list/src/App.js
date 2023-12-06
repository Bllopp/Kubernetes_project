import './App.css';
import React, { useEffect } from 'react';
import {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import AuthService from './services/AuthService';

import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Todo from './components/Todo';

function App() {

  const [loggedIn,setLoggedIn] = useState(true)
  
  const handleLogin= () => {
    setLoggedIn(true)
    console.log(loggedIn)
  }

  const handleLogout = () => {
    setLoggedIn(false)
   
  }

  const checkToken= () => {
    const token = localStorage.getItem('token');
    if (token) setLoggedIn(true)
    else {
      setLoggedIn(false);  
    }
  }

  useEffect(() => {
    checkToken()
  },[])

  return (
    <div className="App">
     <Router>
        <Routes>
          <Route exact path='/login' element={<Login onLogin={handleLogin} />} />
          <Route exact path='/' element={ loggedIn ? (<Todo onLogout={handleLogout}/>) : ( <Login onLogin={handleLogin} />) } />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
