
import './App.css';
import React, { useEffect } from 'react';
import {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthService from './services/AuthService';

import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Todo from './components/Todo';

function App() {

  const [loggedIn,setLoggedIn] = useState(!!AuthService.getToken)
  
  const handleLogin= () => {
    setLoggedIn(true)
    console.log(loggedIn)
  }

  const handleLogout = () =>{
    setLoggedIn(false)
    console.log('log out ' , loggedIn)
  }

  useEffect(() => {
    console.log('USER CONNECTE  : ', loggedIn)
  },[])

  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path='/login' element={<Login onLogin={handleLogin} />} />
          <Route path='/' element={loggedIn? <Todo onLogout={handleLogout}/> : <Login onLogin={handleLogin} />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
